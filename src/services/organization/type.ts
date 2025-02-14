import { OrgVisibilityType } from "@/mongo/types";

export interface CreateOrganizationDataType {
    org_name: string;
    org_slug: string;
    org_visibility: OrgVisibilityType;
}

export interface CreateNewTeamDataType {
    team_name: string;
    team_desc: string;
    team_avatar: string;
    team_category: string; //TODO: it should be enum
    isHidden: boolean;
    team_visibility: string; //TODO: it should be enum
}

