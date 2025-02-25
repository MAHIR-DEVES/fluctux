"use client";
import React, { useEffect, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { PageIcon } from "@/components/ui/icons/page-icon";
import { ThumbsUpIcon } from "@/components/ui/icons/thumbs-up-icon";
import { StarIcon } from "@/components/ui/icons/star-icon";
import { ThreeDotIcon } from "@/components/ui/icons/three-dot-icon";
import { LockIcon } from "@/components/ui/icons/lock-icon";
import { FileImportIcon } from "@/components/ui/icons/file-import-icon";
import { DeleteIcon } from "@/components/ui/icons/delete-icon";
import { GlobeIcon } from "@/components/ui/icons/globe-icon";
import { TwoPeopleIcon } from "@/components/ui/icons/two-people-icon";
import { CircleUserIcon } from "@/components/ui/icons/circle-user-icon";
import SelectAssignees from "./SelectAssignees";
import { FxButton, FxInput } from "@/components/ui";

interface Assign {
  value: string;
  label: string;
  image: string;
}

interface Project {
  title: string;
  assigns?: Assign;
  status: string;
}

const statusOptions = [
  {
    value: "PUBLIC",
    label: "Public",
    icon: <GlobeIcon />,
  },
  {
    value: "PRIVATE",
    label: "Private",
    icon: <LockIcon />,
  },
];

const allAssigns: Assign[] = [
  {
    value: "halima-khatun",
    label: "Ni Mahin Org's",
    image:
      "https://st2.depositphotos.com/3867453/9096/v/450/depositphotos_90960358-stock-illustration-letter-m-logo-icon-design.jpg",
  },
  {
    value: "mehena-khatun",
    label: "M Org's",
    image:
      "https://i.pinimg.com/474x/b6/74/f5/b674f5c59532b8f0e6efeb17bf6f75bc.jpg",
  },
];

export default function PageList({ data }: { data: Project[] }) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [assignStates, setAssignStates] = useState<
    Record<string, { value: string; open: boolean }>
  >({});
  const [statusStates, setStatusStates] = useState<
    Record<string, { value: string; open: boolean }>
  >({});

  useEffect(() => {
    const fetchData = async () => {
      setProjects(data);

      const initialAssignStates: Record<
        string,
        { value: string; open: boolean }
      > = {};
      const initialStatusStates: Record<
        string,
        { value: string; open: boolean }
      > = {};
      data.forEach((item, index) => {
        const id = `id-${index}`;
        initialAssignStates[id] = {
          value: item.assigns?.value || "",
          open: false,
        };
        initialStatusStates[id] = { value: item.status, open: false };
      });
      setAssignStates(initialAssignStates);
      setStatusStates(initialStatusStates);
    };

    fetchData();
  }, [data]);

  const handleAssignSelect = (id: string, value: string) => {
    setAssignStates((prevState) => ({
      ...prevState,
      [id]: { ...prevState[id], value, open: false },
    }));
  };

  const handleStatusSelect = (id: string, value: string) => {
    setStatusStates((prevState) => ({
      ...prevState,
      [id]: { ...prevState[id], value, open: false },
    }));
  };

  return (
    <>
      <div className="page-nav p-3 sticky top-0 backdrop-blur-3xl shborder flex justify-between items-center">
        <div className="flex justify-start items-center gap-3">
          <FxButton
            variant="secondary"
            size="sm"
            className="fx-label-color font-medium"
            radius="tiny"
          >
            All
          </FxButton>
          <FxButton
            variant="secondary"
            size="sm"
            className="fx-label-color font-medium"
            radius="tiny"
          >
            Public
          </FxButton>
          <FxButton
            variant="secondary"
            size="sm"
            className="fx-label-color font-medium"
            radius="tiny"
          >
            Private
          </FxButton>
        </div>
        <div>
          <div className="w-full flex justify-center items-center gap-3 ">
            <FxInput
              variant="primary"
              size="sm"
              placeholder="Search pages..."
              className="w-full"
              radius="tiny"
            />
            <FxButton
              variant="secondary"
              size="sm"
              className="flex-shrink-0 font-medium text-yellow-400"
              radius="tiny"
            >
              Draft
            </FxButton>
            <FxButton
              variant="primary"
              size="sm"
              className="flex-shrink-0 font-medium"
              radius="tiny"
            >
              New page
            </FxButton>
          </div>
        </div>
      </div>
      <div className="app-page-header mb-3 overflow-x-auto overflow-y-hidden shborder w-full h-[100px]  flex justify-start items-center ">
        <div className="p-3 min-w-[200px] shborder w-full max-w-[200px] h-full flex flex-col justify-between items-start">
          <div className="flex justify-start items-center gap-1">
            <p className="fx-label-color font-medium">Pages</p>
            <PageIcon />
          </div>
          <p className="text-[30px] text-white">23</p>
        </div>
        <div className="p-3 min-w-[200px] shborder fx-hover-primary-bg cursor-pointer  w-full max-w-[200px] h-full flex flex-col justify-between items-start">
          <div className="flex justify-start items-center gap-1">
            <p className="fx-label-color font-medium">Likes</p>
            <ThumbsUpIcon />
          </div>
          <p className="text-[30px] text-white">2358</p>
        </div>
        <div className="p-3 min-w-[200px] shborder fx-hover-primary-bg cursor-pointer  w-full max-w-[200px] h-full flex flex-col justify-between items-start">
          <div className="flex justify-start items-center gap-1">
            <p className="fx-label-color font-medium">Stars</p>
            <StarIcon />
          </div>
          <p className="text-[30px] text-white">132</p>
        </div>
        
        <div className="p-3 min-w-[200px] shborder fx-hover-primary-bg cursor-pointer w-full max-w-[200px] h-full flex flex-col justify-between items-start">
          <div className="flex justify-start items-center gap-1">
            <p className="fx-label-color font-medium">Assignees</p>
            <TwoPeopleIcon />
          </div>
          <p className="text-[30px] text-white">58</p>
        </div>
      </div>
      <div className="flex justify-between items-center p-3 pt-0 pr-0 pb-0 sticky top-[59px] fx-secondary-bg">
        <div className="w-full min-w-[300px] font-medium text-[16px]">
          Title
        </div>
        <div className="flex justify-end items-center">
          <div className="w-[170px] p-3 font-medium text-[16px]">Assignees</div>
          <div className="w-[100px] p-3 font-medium text-[16px]">Status</div>
          <div className="w-[50px]"></div>
        </div>
      </div>
      <div className="app-page-main w-full h-[1000px]">
        {projects.map((item, index) => {
          const id = `id-${index}`;
          const assignState = assignStates[id] || { value: "", open: false };
          const statusState = statusStates[id] || { value: "", open: false };
          return (
            <div
              key={index}
              className="app-page-list-box shborder w-full h-[70px] flex justify-between items-center"
            >
              {/* experimental */}
              <Popover
     
              >
               
                  <PopoverTrigger asChild>
                    <FxButton variant="secondary" size="sm">
                      select assignees
                    </FxButton>
               
                </PopoverTrigger>
                <PopoverContent className="p-0 org-combo fx-border-color fx-secondary-bg w-[220px]">
                  <div>
                    <SelectAssignees />
                  </div>
                </PopoverContent>
              </Popover>
              <div className="w-full h-[70px] flex justify-start items-center p-3 fx-hover-primary-bg">
                <h2 className="text-[18px] font-medium fx-label-color min-w-[300px] one-line-ellipsis w-full cursor-pointer">
                  {item.title}
                </h2>
              </div>
              <div className="flex justify-end items-center h-full">
                <Popover
                  open={assignState.open}
                  onOpenChange={(open) =>
                    setAssignStates((prevState) => ({
                      ...prevState,
                      [id]: { ...assignState, open },
                    }))
                  }
                >
                  <PopoverTrigger asChild>
                    <div className="flex w-[170px] h-[70px] flex-shrink-0 justify-center items-center p-3 fx-hover-primary-bg cursor-pointer ">
                      <button className="flex justify-center items-center w-full">
                        {assignState.value ? (
                          <div className="flex justify-start items-center gap-2 w-full">
                            <img
                              src={
                                allAssigns.find(
                                  (assign) => assign.value === assignState.value
                                )?.image
                              }
                              className="w-[25px] h-[25px] rounded-[50%] border fx-border-color object-cover object-center"
                            />
                            <p className="font-medium text-[14px] fx-label-color one-line-ellipsis">
                              {
                                allAssigns.find(
                                  (assign) => assign.value === assignState.value
                                )?.label
                              }
                            </p>
                          </div>
                        ) : (
                          <div className="fx-flex-bl w-full">
                            <CircleUserIcon />
                          </div>
                        )}
                      </button>
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className="p-0 org-combo fx-border-color fx-secondary-bg w-[220px]">
                    <Command className="fx-secondary-bg org-combo-command">
                      <p className="fx-sec-label-color font-medium p-2 pb-0 text-[16px]">
                        Assign to
                      </p>
                      <CommandInput
                        placeholder="Search Contributors"
                        className="text-white"
                      />
                      <CommandList className="fx-border-color">
                        <CommandEmpty className="fx-sec-label-color text-center">
                          No contributor found
                        </CommandEmpty>
                        <CommandGroup className="fx-border-color">
                          {allAssigns.map((assign) => (
                            <CommandItem
                              key={assign.value}
                              value={assign.value}
                              onSelect={() =>
                                handleAssignSelect(
                                  id,
                                  assign.value === assignState.value
                                    ? ""
                                    : assign.value
                                )
                              }
                            >
                              <div className="flex justify-start items-center gap-2 w-full">
                                <img
                                  src={assign.image}
                                  alt=""
                                  className="w-[25px] h-[25px] rounded-[50%] border fx-border-color object-cover object-center"
                                />
                                <p className="font-medium text-[14px] fx-label-color">
                                  {assign.label}
                                </p>
                              </div>
                              <Check
                                className={cn(
                                  "ml-auto",
                                  assignState.value === assign.value
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

                <Popover
                  open={statusState.open}
                  onOpenChange={(open) =>
                    setStatusStates((prevState) => ({
                      ...prevState,
                      [id]: { ...statusState, open },
                    }))
                  }
                >
                  <PopoverTrigger asChild>
                    {item.status && (
                      <div className="flex fx-hover-primary-bg flex-shrink-0 justify-between items-center h-[70px] w-[100px] p-3 cursor-pointer">
                        <button className="flex justify-center items-center w-full">
                          <div className="flex justify-start items-center gap-1 w-full">
                            {statusOptions.find(
                              (s) => s.value === statusState.value
                            )?.icon ||
                              statusOptions.find((s) => s.value === item.status)
                                ?.icon}
                            <p className="font-medium text-[14px] one-line-ellipsis fx-label-color">
                              {statusState.value.charAt(0).toUpperCase() +
                                statusState.value.slice(1).toLowerCase() ||
                                statusOptions.find(
                                  (s) => s.value === item.status
                                )?.label}
                            </p>
                          </div>
                        </button>
                      </div>
                    )}
                  </PopoverTrigger>
                  <PopoverContent className="p-0 org-combo fx-border-color fx-secondary-bg w-[150px]">
                    <Command className="fx-secondary-bg org-combo-command">
                      <CommandList className="fx-border-color">
                        <CommandGroup className="fx-border-color">
                          {statusOptions.map((s) => (
                            <CommandItem
                              key={s.value}
                              value={s.value}
                              onSelect={() => handleStatusSelect(id, s.value)}
                            >
                              <div className="flex justify-start items-center gap-2 w-full">
                                {s.icon}
                                <p className="font-medium text-[14px] one-line-ellipsis fx-label-color">
                                  {s.label}
                                </p>
                              </div>
                              <Check
                                className={cn(
                                  "ml-auto",
                                  statusState.value === s.value
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
                <Popover>
                  <PopoverTrigger asChild>
                    <div className="w-[50px] h-[70px] flex justify-center items-center fx-hover-primary-bg cursor-pointer">
                      <ThreeDotIcon />
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] fx-secondary-bg fx-rounded fx-border-color p-1">
                    <ul>
                      <li className="fx-sec-label-color p-1">
                        Created: 27 Jan, 2024
                      </li>
                      <li className="w-full p-1 rounded-[6px] fx-hover-primary-bg flex justify-start items-center gap-2 cursor-pointer">
                        <LockIcon />
                        <p className="fx-label-color">Lock</p>
                      </li>
                      <li className="w-full p-1 rounded-[6px] fx-hover-primary-bg flex justify-start items-center gap-2 cursor-pointer">
                        <FileImportIcon />
                        <p className="fx-label-color">Move to draft</p>
                      </li>
                      <li className="w-full p-1 rounded-[6px] fx-hover-tred-bg flex justify-start items-center gap-2 cursor-pointer">
                        <DeleteIcon />
                        <p className="fx-text-red">Delete</p>
                      </li>
                    </ul>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
