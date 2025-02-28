import { CodeIcon, UserIcon } from "@/components/ui/icons";

export const DOC_TYPE = [
  {
    label: 'User',
    id: 'user',
    value: 'user',
    desc: 'Guides for users.',
    svg: <UserIcon />
  },
  {
    label: 'Developer',
    id: 'developer',
    value: 'developer',
    desc: 'Guides for developers.',
    svg: <CodeIcon />
  }
]