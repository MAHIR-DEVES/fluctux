import { GlobeIcon } from "./icons/globe-icon";
import { LockIcon } from "./icons/lock-icon";
import { SettingsIcon } from "./icons/settings-icon";
import { TwoPeopleIcon } from "./icons/two-people-icon";
import { RadiusType } from "./type";

export const ROUNDED_VARIANTS: { [key in RadiusType]: string } = {
  primary: "rounded-[8px]",
  tablet: "rounded-[50px]",
  circle: "rounded-[50%]",
  tiny: "rounded-[5px]"
}

export const PROJECT_STATUS_ITEMS = [
  {
    label: "Public",
    desc: " Anyone can see this project",
    id: "public",
    value: "public",
    svg: <GlobeIcon />
  },
  {
    label: "Private",
    desc: " Only you can see this project",
    id: "private",
    value: "private",
    svg: <LockIcon />
  },
  {
    label: 'Friends',
    desc: " Only you and friends can see this project",
    id: 'friends',
    value: 'friends',
    svg: <TwoPeopleIcon />
  },
  {
    label: 'Custom',
    desc: " Only you and selected people can see this project",
    id: 'custom',
    value: 'custom',
    svg: <SettingsIcon />
  }
]