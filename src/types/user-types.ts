export enum VisibilityType {
  PUBLIC = "PUBLIC",
  PRIVATE = "PRIVATE",
  FRIEND = "FRIEND",
  ORG = "ORG",
}

export enum GenderType {
  MALE = "MALE",
  FEMALE = "FEMALE",
  CUSTOM = "CUSTOM",
}

export type NumberType = {
  number: string;
  visibility: VisibilityType;
};

export type SocialLinkType = {
  link: string;
  social_media: SocialMediaType;
  visibility: VisibilityType;
};

export type DateOfBirthType = {
  day_month: string;
  year: string;
  visibility: VisibilityType;
};

export enum AuthProviderType {
  GOOGLE = "GOOGLE",
  GITHUB = "GITHUB",
  DISCORD = "DISCORD",
  CUSTOM = "CUSTOM",
}

export enum UserStatusType {
  SUSPENDED = "SUSPENDED",
  RESTRICTED = "RESTRICTED",
  NORMAL = "NORMAL",
}

export enum UserRoleType {
  ADMIN = "ADMIN",
  USER = "USER",
}


export enum SocialMediaType {
    FACEBOOK = "FACEBOOK",
    TWITTER = "TWITTER",
    LINKEDIN = "LINKEDIN",
    GITHUB = "GITHUB",
    INSTAGRAM = "INSTAGRAM",
} 


export enum RequestStatusType {
    PENDING = "PENDING",
    ACCEPTED = "ACCEPTED",
    REJECTED = "REJECTED",
}