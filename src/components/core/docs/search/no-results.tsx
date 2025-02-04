"use client"

import FxButton from "@/components/ui/fxbutton";
import FxFavIcon from "@/components/ui/fxfav";
import { CodeIcon } from "@/components/ui/icons/code-icon";
import { RightArrowIcon } from "@/components/ui/icons/right-arrow-icon";
import { SadIcon } from "@/components/ui/icons/sad-icon";
import { UserIcon } from "@/components/ui/icons/user-icon";
import Link from "next/link";
import { useInstantSearch } from "react-instantsearch";

export default function NoResults() {
    const { indexUiState } = useInstantSearch();

    return (
        <div className="p-3 w-full h-screen fx-flex-center flex-col">
            <div className="fx-flex-center gap-2 max-w-[500px] w-full ">
                <SadIcon width={24} height={24} className="flex-shrink-0" />
                <p className="text-[20px] font-medium fx-label-color one-line-ellipsis">
                    No results for <q>{indexUiState.query}</q>.
                </p>
            </div>

            <div className="max-w-[500px] w-full mt-10">
                <Link href={""}>
                    <FxButton variant="secondary" radius="primary" className="w-full p-3 fx-flex-tl gap-2 relative">
                        <div className="w-[40px] h-[40px] border fx-border-color fx-flex-center flex-shrink-0 rounded-[5px]">
                            <FxFavIcon variant="default" size="sm" />
                        </div>
                        <div className="text-left">

                            <h3 className="font-medium text-[18px]  ">
                                What is Fluctux
                            </h3>
                            <p className="text-[14px] fx-label-color mt-2 two-line-ellipsis">Fluctux is an advanced open source work and project management platform where users can join both public & private organizations, collaborate in teams, make friends, and share their daily work—all in one place.</p>
                        </div>
                        <div className="w-[20px] flex-shrink-0">
                            <RightArrowIcon className="absolute top-[50%] translate-y-[-50%]"/>
                        </div>
                    </FxButton>
                </Link>
                <Link href={""}>
                    <FxButton variant="secondary" radius="primary" className="w-full p-3 fx-flex-between-ic gap-3 mt-3">
                        <div className="fx-flex-cl gap-2">
                            <UserIcon />
                            <p>
                                Quickstart for Users

                            </p>
                        </div>
                        <div className="w-[20px] flex-shrink-0">
                            <RightArrowIcon/>
                        </div>
                    </FxButton>
                </Link>
                <Link href={""}>
                    <FxButton variant="secondary" radius="primary" className="w-full p-3 fx-flex-between-ic gap-3 mt-3">
                        <div className="fx-flex-cl gap-2">

                            <CodeIcon />
                            <p>
                                Quickstart for Developers

                            </p>
                        </div>
                        <div className="w-[20px] flex-shrink-0">
                            <RightArrowIcon/>
                        </div>
                    </FxButton>
                </Link>
            </div>
        </div>
    );
}