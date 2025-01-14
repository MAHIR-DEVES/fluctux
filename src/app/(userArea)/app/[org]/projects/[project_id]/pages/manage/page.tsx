"use client";
import { EditorContext } from "@/context/EditorContext";
import React, { useContext, useEffect, useRef } from "react";

export default function ManagePage() {
  const editorContext = useContext(EditorContext);
  const initEditor = editorContext?.initEditor;
  const editorRef = useRef<boolean | null>(null);

  useEffect(() => {
    if (!editorRef.current) {
      initEditor?.();
      editorRef.current = true;
    }
  }, [initEditor]);

  return (
    <div className="flex justify-center items-start h-full w-full">
      <section className="max-w-[1000px] w-full mt-14">
        <h1 className="ml-[68px] font-medium text-[32px]">
          Heading
        </h1>
      <div
        id="editorjs"
        className=" p-3 ml-14 w-full h-fit mt-5"
        >
      </div>
        </section>
    </div>
  );
}
