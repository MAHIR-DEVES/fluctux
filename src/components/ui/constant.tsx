import { ComputerIcon } from "./icons/computer-icon";
import { GlobeIcon } from "./icons/globe-icon";
import { LockIcon } from "./icons/lock-icon";
import { MoonIcon } from "./icons/moon-icon";
import { ProjectBlueIcon } from "./icons/project-colors/project-blue-icon";
import { ProjectGreenIcon } from "./icons/project-colors/project-green-icon";
import { ProjectOrangeIcon } from "./icons/project-colors/project-orange-icon";
import { ProjectPinkIcon } from "./icons/project-colors/project-pink-icon";
import { ProjectPurpleIcon } from "./icons/project-colors/project-purple-icon";
import { ProjectRedIcon } from "./icons/project-colors/project-red-icon";
import { ProjectYellowIcon } from "./icons/project-colors/project-yellow-icon";
import { SettingsIcon } from "./icons/settings-icon";
import { SunIcon } from "./icons/sun-icon";
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


export const PROJECT_COLORS = [
  {
    id: "green",
    value: "--project-green",
  
    svg: <ProjectGreenIcon width={24} height={24} />
  },
  {
    id: "purple",
    value: "--project-purple",

    svg: <ProjectPurpleIcon width={24} height={24} />
  },
  {
    id: "pink",
    value: "--project-pink",
 
    svg: <ProjectPinkIcon width={24} height={24} />
  },
  {
    id: "yellow",
    value: "--project-yellow",

    svg: <ProjectYellowIcon width={24} height={24} />
  },
  {
    id: "blue",
    value: "--project-blue",

    svg: <ProjectBlueIcon width={24} height={24} />
  },
  {
    id: "red",
    value: "--project-red",

    svg: <ProjectRedIcon width={24} height={24} />
  },
  {
    id: "orange",
    value: "--project-orange",

    svg: <ProjectOrangeIcon width={24} height={24} />
  }
]


export const THEME_ICONS = [
  {
      svg: <SunIcon />
  },
  {
      svg: <MoonIcon />
  },
  {
      svg: <ComputerIcon width={18} height={18} />
  }
]