import Logo from "@/components/ui/logo";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex justify-center items-center h-screen w-full">
      <div className="fixed top-8 left-8">
        <Logo color="WHITE" />
      </div>

      <div className="max-w-[400px] w-full">
        <h1 className="text-[25px] font-medium">Login to Fluctux</h1>
        {children}
      </div>

      <div className="absolute inset-0 -z-10 h-full w-full bg-[var(--background)] [background:radial-gradient(125%_125%_at_50%_10%,var(--background)_40%,#6aeeae1b_100%)]"></div>
    </section>
  );
}
