"use client";
import React, { useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
// import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
// import FxButton from "@/components/ui/fxbutton";
// import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import FxSeparator from "@/components/ui/fxseparator";
import FxBadge from "@/components/ui/fxbadge";
import { HomeIcon } from "@/components/ui/icons/home-icon";
import { TwoPeopleIcon } from "@/components/ui/icons/two-people-icon";
import { ActivityIcon } from "@/components/ui/icons/activity-icon";
import { AnalyticsIcon } from "@/components/ui/icons/analytics-icon";
import { TaskIcon } from "@/components/ui/icons/task-icon";
import { SheetIcon } from "@/components/ui/icons/sheet-icon";
import { IssueIcon } from "@/components/ui/icons/issue-icon";
import { PageIcon } from "@/components/ui/icons/page-icon";

const frameworks = [
  {
    value: "ni-mahin-org",
    label: "Ni Mahin Org's",
    image:
      "https://st2.depositphotos.com/3867453/9096/v/450/depositphotos_90960358-stock-illustration-letter-m-logo-icon-design.jpg",
    category: "Business",
  },
  {
    value: "m-org",
    label: "M Org's",
    image:
      "https://i.pinimg.com/474x/b6/74/f5/b674f5c59532b8f0e6efeb17bf6f75bc.jpg",
    category: "Software Company",
  },
];

export default function AppSidebar() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  // const router = useRouter();
  // const path_name = usePathname();

  // const [openCollapsible, setOpenCollapsible] = useState<{
  //   [key: number]: boolean;
  // }>({});

  // const toggleCollapsible = (id: number) => {
  //   setOpenCollapsible((prevState: { [key: number]: boolean }) => ({
  //     ...prevState,
  //     [id]: !prevState[id],
  //   }));
  // };

  // const openProject = (id: number, path: string) => {
  //   const isProject = openCollapsible[id];
  //   if (!isProject) {
  //     setOpenCollapsible((prevState: { [key: number]: boolean }) => ({
  //       ...prevState,
  //       [id]: !prevState[id],
  //     }));
  //     return router.push(`${path}`);
  //   }

  //   if (path_name !== path) {
  //     return router.push(`${path}`);
  //   }
  // };

  const ICON_SIZE_IN_SQR = 18

  return (
    <aside className="w-[260px] h-full fixed top-0 left-0 fx-secondary-bg border-r fx-border-color">
      <div className="w-full">
        <div>
          <Popover open={open} onOpenChange={setOpen}>
            <div className="flex justify-between items-center border-b fx-border-color w-full p-3 h-[70px]">
              <button className="flex justify-between items-center w-full active:scale-[1] cursor-default ">
                {value ? (
                  <div className="flex justify-center items-center gap-2 w-full">
                    <img
                      src={`${frameworks.find(
                        (framework) => framework.value === value
                      )?.image
                        }`}
                      alt=""
                      className="w-[40px] h-[40px] fx-rounded border fx-border-color object-cover object-center"
                    />

                    <div className="w-full text-left">
                      <h1 className="font-medium text-[17px] one-line-ellipsis">
                        {
                          frameworks.find(
                            (framework) => framework.value === value
                          )?.label
                        }
                      </h1>
                      <p className="text-[14px] fx-label-color">
                        {
                          frameworks.find(
                            (framework) => framework.value === value
                          )?.category
                        }
                      </p>
                    </div>
                  </div>
                ) : (
                  "My Organizations"
                )}
              </button>
              <PopoverTrigger asChild>
                <div className="fx-hover-primary-bg border fx-rounded p-1 fx-border-color cursor-pointer">
                  <ChevronsUpDown className="opacity-50" />
                </div>
              </PopoverTrigger>
            </div>
            <PopoverContent className="p-0 org-combo fx-border-color fx-secondary-bg ">
              <Command className="fx-secondary-bg org-combo-command">
                <CommandInput
                  placeholder="Search Organization"
                  className="text-white"
                />
                <CommandList className="fx-border-color">
                  <CommandEmpty>No framework found.</CommandEmpty>
                  <CommandGroup className="fx-border-color ">
                    {frameworks.map((framework) => (
                      <CommandItem
                        className="fx-border-color hover:fx-secondary-bg "
                        key={framework.value}
                        value={framework.value}
                        onSelect={(currentValue) => {
                          setValue(currentValue);
                          setOpen(false);
                        }}
                      >
                        <div className="flex justify-center items-center gap-2 w-full">
                          <img
                            src={`${framework.image}`}
                            alt=""
                            className="w-[40px] h-[40px] fx-rounded border fx-border-color object-cover object-center"
                          />

                          <div className="w-full text-left">
                            <h1 className="font-medium text-[17px] one-line-ellipsis text-white">
                              {framework.label}
                            </h1>
                            <p className="text-[14px] fx-label-color">
                              {framework.category}
                            </p>
                          </div>
                        </div>
                        <Check
                          className={cn(
                            "ml-auto",
                            value === framework.value
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <nav className="app-side-nav overflow-y-auto p-3">
        <ul>
          <Link href={"/app/org"}>
            <li className="p-1 font-medium pl-2 pr-2 cursor-pointer flex justify-start items-center gap-2 fx-rounded fx-label-color fx-hover-primary-fg fx-hover-primary-bg">
              <HomeIcon width={ICON_SIZE_IN_SQR} height={ICON_SIZE_IN_SQR} />
              <p>Home</p>
            </li>
          </Link>

          <li className="p-1 font-medium pl-2 pr-2 cursor-pointer flex justify-start items-center gap-2 fx-rounded fx-label-color fx-hover-primary-fg fx-hover-primary-bg">
            <TwoPeopleIcon width={ICON_SIZE_IN_SQR} height={ICON_SIZE_IN_SQR} />
            <p>Friends</p>
          </li>
        </ul>
        <FxSeparator orientation="horizontal" gap="sm" />
        <ul>
          <p className="text-[16px] font-medium fx-sec-label-color mb-1">
            Workspace
          </p>
          <li className="p-1 font-medium pl-2 pr-2 cursor-pointer flex justify-start items-center gap-2 fx-rounded fx-label-color fx-hover-primary-fg fx-hover-primary-bg">
            <ActivityIcon width={ICON_SIZE_IN_SQR} height={ICON_SIZE_IN_SQR} />
            <p>Activity</p>
          </li>
          <li className="p-1 font-medium pl-2 pr-2 cursor-pointer flex justify-start items-center gap-2 fx-rounded fx-label-color fx-hover-primary-fg fx-hover-primary-bg">
            <AnalyticsIcon width={ICON_SIZE_IN_SQR} height={ICON_SIZE_IN_SQR} />
            <p>Analytics</p>
          </li>
        </ul>
        <FxSeparator orientation="horizontal" gap="sm" />
        <ul>
          <div className="mb-1 flex justify-start items-center gap-2">
            <p className="text-[16px] font-medium fx-sec-label-color ">
              Workspace
            </p>
            <FxBadge variant="purple">32</FxBadge>
          </div>
          <div className="space-y-2">

            <Link href={"/app/my-org/projects/tasks"}>
              <li className="p-1 text-[15px] font-medium pl-2 pr-2 cursor-pointer flex justify-start items-center gap-2 fx-rounded fx-label-color hover:text-white fx-hover-primary-bg">
                <TaskIcon width={ICON_SIZE_IN_SQR} height={ICON_SIZE_IN_SQR} />
                <p>Tasks</p>
              </li>
            </Link>
            <Link href={"/app/my-org/projects/tables/tables-id"}>
              <li className="p-1 text-[15px] font-medium pl-2 pr-2 cursor-pointer flex justify-start items-center gap-2 fx-rounded fx-label-color hover:text-white fx-hover-primary-bg">
                <SheetIcon width={ICON_SIZE_IN_SQR} height={ICON_SIZE_IN_SQR} />
                <p>Tables</p>
              </li>
            </Link>
            <Link href={"/app/my-org/projects/issues"}>
              <li className="p-1 text-[15px] font-medium pl-2 pr-2 cursor-pointer flex justify-start items-center gap-2 fx-rounded fx-label-color hover:text-white fx-hover-primary-bg">
                <IssueIcon width={ICON_SIZE_IN_SQR} height={ICON_SIZE_IN_SQR} />
                <p>Issues</p>
              </li>
            </Link>
            <Link href={"/app/my-org/projects/pages"}>
              <li className="p-1 text-[15px] font-medium pl-2 pr-2 cursor-pointer flex justify-start items-center gap-2 fx-rounded fx-label-color hover:text-white fx-hover-primary-bg">
                <PageIcon width={ICON_SIZE_IN_SQR} height={ICON_SIZE_IN_SQR} />
                <p>Pages</p>
              </li>
            </Link>

          </div>
        </ul>
      </nav>

      <div className="w-full h-[50px] border-t cursor-pointer fx-border-color flex justify-center items-center p-3 gap-3 fx-hover-primary-bg">
        <img
          src="https://img.freepik.com/premium-photo/anime-male-avatar_950633-956.jpg"
          alt=""
          className="w-[35px] h-[35px] rounded-[50%] fx-border-color border"
        />
      </div>
    </aside>
  );
}
