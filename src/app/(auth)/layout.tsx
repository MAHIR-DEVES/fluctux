"use client"
import { FxButton, FxLogo } from "@/components/ui";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const path_name = usePathname()
  const current_path = path_name.split("/")[1]

  const h1Title = current_path.charAt(0).toUpperCase() + current_path.slice(1);

  return (
    <section className="flex justify-center items-center w-full h-screen overflow-y-auto hide-scrollbar">

      <div className="max-w-[420px] my-auto w-full p-3 pt-16 pb-24">
        <div className="fixed top-0 left-0 bg-gradient-to-t from-transparent to-[var(--background)] w-full h-[50px] fx-flex-cl p-3 backdrop-blur-xl">
          <FxLogo size="sm" />

        </div>
        <h1 className="text-[25px] font-medium">{h1Title} to Fluctux</h1>
        {children}
      </div>
      <div className="fixed bottom-0 left-0 w-full h-[60px] fx-secondary-bg fx-flex-center z-10">
        {
          current_path === "login" ?

            <div className="flex justify-center items-center gap-2">
              <p className="fx-label-color font-medium">New to Fluctux?</p>
              <Link href={"/signup"}>
                <FxButton variant="secondary" radius="tablet" size="sm" className="relative rgb-animation font-medium">
                  Create Account
                </FxButton>
              </Link>
            </div> : <div className="flex justify-center items-center gap-2">
              <p className="fx-label-color font-medium">Already have an account?</p>
              <Link href={"/login"}>
                <FxButton variant="primary" radius="tablet" size="sm" className="font-medium pl-[20px] pr-[20px]">
                  Login
                </FxButton>
              </Link>
            </div>
        }

      </div>

      {/* <div className="absolute inset-0 -z-10 h-full w-full bg-[var(--background)] [background:radial-gradient(125%_125%_at_50%_10%,var(--background)_40%,#6aeeae1b_100%)]"></div> */}
    </section>
  );
}
