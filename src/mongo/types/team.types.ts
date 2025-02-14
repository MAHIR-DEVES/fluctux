export enum TeamCategoryType {
    SOFTWARE = "SOFTWARE",
    DESIGN = "DESIGN",
    MARKETING = "MARKETING",
    EDCUATION = "EDCUATION",
    BUSINESS = "BUSINESS",
    SRPOTS = "SRPOTS",
}

export interface TeamType {
    team_name: string;
    team_desc: string;
    team_avatar: string;
    team_category: string;
    isHidden: boolean;
    team_visibility: string;
}