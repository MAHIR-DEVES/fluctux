"use client"
import Logo from "@/components/ui/fxlogo";
import { usePathname } from "next/navigation";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const path_name = usePathname()
  const current_path = path_name.split("/")[1]

  const h1Title = current_path.charAt(0).toUpperCase() + current_path.slice(1);

  return (
    <section className="flex justify-center items-center h-screen w-full">
      <div className="fixed top-8 left-8">
        <Logo color="WHITE" />
      </div>

      <div className="max-w-[420px] w-full p-3">
        <h1 className="text-[25px] font-medium">{h1Title} to Fluctux</h1>
        {children}
      </div>

      {/* <div className="absolute inset-0 -z-10 h-full w-full bg-[var(--background)] [background:radial-gradient(125%_125%_at_50%_10%,var(--background)_40%,#6aeeae1b_100%)]"></div> */}
    </section>
  );
}
