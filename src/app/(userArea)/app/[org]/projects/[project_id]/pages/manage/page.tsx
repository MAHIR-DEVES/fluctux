"use client";
import TextareaAutosize from "react-textarea-autosize";
import dynamic from "next/dynamic";
import { useMemo } from "react";

export default function ManagePage() {
  const Editor = useMemo(
    () =>
      dynamic(() => import("@/components/core/text-editor/BlockNote"), {
        ssr: false,
      }),
    []
  );

  return (
    <section className="pb-14 h-full w-full">
      <div className="w-full shborder p-5">
      <TextareaAutosize
          placeholder="Untitled"
          className="resize-none w-full appearance-none overflow-hidden outline-none bg-transparent text-[30px] text-white font-medium"
        />
      </div>
      <div className="flex justify-center items-start w-full">

      <div className="max-w-[1000px] w-full mt-0">

        <Editor />
      </div>
      </div>
    </section>
  );
}
