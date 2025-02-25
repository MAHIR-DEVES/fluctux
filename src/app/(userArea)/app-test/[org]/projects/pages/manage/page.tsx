"use client";
import TextareaAutosize from "react-textarea-autosize";
import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import { ForwardIcon } from "@/components/ui/icons/forward-icon";
import { LockIcon } from "@/components/ui/icons/lock-icon";
import { UnlockIcon } from "@/components/ui/icons/unlock-icon";
import { NavigationIcon } from "@/components/ui/icons/navigation-icon";
import AddToFavourite from "@/components/core/workspace/AddToFavourite";
import { FxButton } from "@/components/ui";

export default function ManagePage() {
  const [locked, setLocked] = useState(false);
  const [isPublished, setIsPublished] = useState(false);

  const Editor = useMemo(
    () =>
      dynamic(() => import("@/components/core/text-editor/BlockNote"), {
        ssr: false,
      }),
    []
  );

  return (
    <section className="pb-14 w-full">
      <div className="w-full shborder p-3 flex justify-between items-center sticky top-0 backdrop-blur-xl z-[300]">
        <AddToFavourite/>
        <div className="fx-flex-cr gap-2">
          <FxButton
            variant="secondary"
            className="w-[30px] h-[30px] fx-flex-center "
            radius="tiny"
            onClick={() => setLocked(!locked)}
          >
            {locked ? <LockIcon /> : <UnlockIcon />}
          </FxButton>
          <FxButton
            variant="secondary"
            className="p-2 h-[30px] fx-flex-center gap-1"
            radius="tiny"
          >
            <p className="fx-label-color">Share</p>
            <ForwardIcon />
          </FxButton>
          <FxButton
            variant={isPublished ? "secondary" : "primary"}
            className={`p-2 h-[30px] fx-flex-center gap-1 ${isPublished && "hover:bg-red-500"}`}
            radius="tiny"
            onClick={() => setIsPublished(!isPublished)}
          >
            {isPublished ? (
              <p
                className={`font-medium fx-label-color ${isPublished && "hover:text-white"}`}
              >
                Switch to draft
              </p>
            ) : (
              <>
                <p className="font-medium">Publish</p>
                <NavigationIcon />
              </>
            )}
          </FxButton>
        </div>
      </div>
      <div className="flex justify-center items-start w-full">
        <div className="max-w-[1000px] w-full mt-5 pb-24">
          <TextareaAutosize
            placeholder="Untitled"
            className="resize-none w-full ml-[53px] appearance-none overflow-hidden outline-none bg-transparent text-[30px] text-white font-medium"
          />
          <div className="mt-3">
            <Editor onChange={() => console.log('Editor content changed')} />
          </div>
        </div>
      </div>
    </section>
  );
}