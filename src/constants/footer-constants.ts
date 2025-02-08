import { GithubCircleIcon } from "@/components/ui/icons/github-circle-icon"


interface FooterListType {
    label: string,
    slug?: string,
    icon?: React.ElementType
}

export const footerMainData: FooterListType[] = [
    {
        label: "Company",
        slug: "",
      
    },
    {
        label: "Contact us",
        slug: "",
       
    }
]

export const resourcesData: FooterListType[] = [
    {
        label: "User Guides",
        slug: ""
    },
    {
        label: "Developer Guides",
        slug: ""
    },
    {
        label: "Blog",
        slug: ""
    }
]

export const legalData: FooterListType[] = [
    {
        label: "Privacy policy",
        slug: ""
    },
    {
        label: "Terms & conditions",
        slug: ""
    },
]


export const planData: FooterListType[] = [
    {
        label: "Free",
        slug: ""
    },
    {
        label: "Pro",
        slug: ""
    },
    {
        label: "Business",
        slug: ""
    },
    {
        label: "Enterprise",
        slug: ""
    },
]

export const workManagementData: FooterListType[] = [
    {
        label: "Organization",
        slug: ""
    },
    {
        label: "Teams",
        slug: ""
    },
    {
        label: "Projects",
        slug: ""
    },
    {
        label: "Wave",
        slug: ""
    },
]