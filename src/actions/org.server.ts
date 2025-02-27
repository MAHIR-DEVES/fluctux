"use server";

import { MEMBER_ADDED, REQUEST_SENT } from "@/constants/events";
import { ERROR } from "@/constants/error";
import OrgMember from "@/mongo/org/orgMember.model";
import OrgMemberRequest from "@/mongo/org/orgMemberRequest.model";
import User from "@/mongo/user/user.model";
import { OrgMemberRoleType } from "@/mongo/types/org.types";
import { RequestStatusType } from "@/mongo/types/user.types";
import { serverSession } from "@/helpers";
import { CreateOrganizationDataType, Organization } from "@/services/organization";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";

export async function createOrganization(data: CreateOrganizationDataType) {
  const session = await getServerSession(authOptions)
  const organization = new Organization(session && session.user);
  return organization.createNewOrg(data)
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return { error: ERROR.INTERNAL_SERVER_ERROR };
  }
}
