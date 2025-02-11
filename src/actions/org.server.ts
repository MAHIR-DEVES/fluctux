"use server";

import { MEMBER_ADDED, ORG_CREATED, REQUEST_SENT } from "@/constants";
import { ERROR } from "@/constants/error";
import serverSession from "@/helpers/session.helper";
import connDb from "@/lib/db.conn";
import Org from "@/mongo/org/org.model";
import OrgMember from "@/mongo/org/orgMember.model";
import OrgMemberRequest from "@/mongo/org/orgMemberRequest.model";
import User from "@/mongo/user/user.model";
import { OrgMemberRoleType, OrgVisibilityType } from "@/mongo/types/org.types";
import { RequestStatusType } from "@/mongo/types/user.types";

export async function createNewOrg(data: {
  org_name: string;
  org_slug: string;
  org_visibility: OrgVisibilityType;
  category: string;
}) {
  try {
    const user = await serverSession();
    if (!user) {
      return { error: ERROR.UNAUTHORIZED_USER };
    }

    await connDb();
    const newOrganization = new Org({
      ...data,
      admin: user._id,
    });

    await newOrganization.save();
    return { message: ORG_CREATED };
  } catch (error) {
    return { error: ERROR.INTERNAL_SERVER_ERROR };
  }
}

export async function sendOrgMemberRequest(data: {
  requested_to: string;
  requested_role: OrgMemberRoleType;
}) {
  try {
    const user = await serverSession();
    if (!user) {
      return { error: ERROR.UNAUTHORIZED_USER };
    }

    const newMemberRequest = new OrgMemberRequest({
      ...data,
      sender_id: user._id,
    });

    await newMemberRequest.save();
    return { message: REQUEST_SENT };
  } catch (error) {
    return { error: ERROR.INTERNAL_SERVER_ERROR };
  }
}

export async function acceptOrgMemberRequest(org_id: string) {
  try {
    const user = await serverSession();
    if (!user) {
      return { error: ERROR.UNAUTHORIZED_USER };
    }

    const findRequest = await OrgMemberRequest.findOne({
      requested_to: org_id,
    });

    if (!findRequest) {
      return { error: ERROR.INVITATION_NOT_FOUND };
    }

    const findReceiver = await User.findById({ _id: findRequest.receiver_id });

    if (!findReceiver) {
      return { error: ERROR.USER_NOT_FOUND };
    }

    if (
      findRequest?.status ===
      (RequestStatusType.ACCEPTED || RequestStatusType.REJECTED)
    ) {
      return { error: ERROR.INVALID_REQUEST };
    }

    const newOrgMember = new OrgMember({
      org: findRequest.requested_to,
      user: findRequest.receiver_id,
      role: findRequest.requested_role,
    });

    await newOrgMember.save();
    return { message: MEMBER_ADDED };
  } catch (error) {
    return { error: ERROR.INTERNAL_SERVER_ERROR };
  }
}