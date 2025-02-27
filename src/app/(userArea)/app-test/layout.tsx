import AppHeader from "@/components/core/workspace/AppHeader";
import React from "react";

interface AppLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    org: string
    
  }>

}

export default async function Layout({ children }: AppLayoutProps) {

  return (
    <section className="flex justify-end items-center">
      <main className="app-main pl-3 pr-3">
        <AppHeader />
        <div className="border-l border-r fx-border-color app-r-main-w overflow-y-auto">
          {children}
        </div>
      </main>
    </section>
  );
}
