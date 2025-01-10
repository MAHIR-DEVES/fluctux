"use client";
import React from "react";
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
import FxButton from "@/components/ui/button";
import { svg_activity, svg_analytics, svg_friends, svg_home, svg_issue, svg_page, svg_sheet, svg_task } from "@/components/ui/icons";

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
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
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
                      src={`${
                        frameworks.find(
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
        <ul className="pb-2">
          <li className="p-1 font-medium pl-2 pr-2 cursor-pointer flex justify-start items-center gap-2 fx-rounded fx-label-color fx-hover-greentext-bgpr">
            {svg_home(20, 20)}
            <p>Home</p>
          </li>

          <li className="p-1 font-medium pl-2 pr-2 cursor-pointer flex justify-start items-center gap-2 fx-rounded fx-label-color fx-hover-greentext-bgpr">
            {svg_friends(20, 20)}
            <p>Friends</p>
          </li>
          
        </ul>
        <ul className="pt-2 pb-2 border-t fx-border-color">
          <p className="text-[17px] font-medium">Workspace</p>
          <li className="p-1 font-medium pl-2 pr-2 cursor-pointer flex justify-start items-center gap-2 fx-rounded fx-label-color fx-hover-greentext-bgpr">
            {svg_activity(20, 20)}
            <p>Activity</p>
          </li>
          <li className="p-1 font-medium pl-2 pr-2 cursor-pointer flex justify-start items-center gap-2 fx-rounded fx-label-color fx-hover-greentext-bgpr">
            {svg_analytics(20, 20)}
            <p>Analytics</p>
          </li>
        </ul>
        <ul className="pt-2 border-t fx-border-color">
          <p className="text-[17px] font-medium">Projects</p>
          <li className="p-1 font-medium pl-2 pr-2 cursor-pointer flex justify-start items-center gap-2 fx-rounded fx-label-color fx-hover-greentext-bgpr">
            {svg_task(20, 20)}
            <p>Tasks</p>
          </li>
          <li className="p-1 font-medium pl-2 pr-2 cursor-pointer flex justify-start items-center gap-2 fx-rounded fx-label-color fx-hover-greentext-bgpr">
            {svg_sheet(20, 20)}
            <p>Sheets</p>
          </li>
          <li className="p-1 font-medium pl-2 pr-2 cursor-pointer flex justify-start items-center gap-2 fx-rounded fx-label-color fx-hover-greentext-bgpr">
            {svg_issue(20, 20)}
            <p>Issues</p>
          </li>
          <li className="p-1 font-medium pl-2 pr-2 cursor-pointer flex justify-start items-center gap-2 fx-rounded fx-label-color fx-hover-greentext-bgpr">
            {svg_page(20, 20)}
            <p>Pages</p>
          </li>
          
        </ul>
      </nav>
      <div className="w-full h-[64px] border-t fx-border-color"></div>
    </aside>
  );
}
