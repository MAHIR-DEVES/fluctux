import AppHeader from "@/components/core/app/AppHeader";
import AppSidebar from "@/components/core/app/AppSidebar";
import React from "react";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: AppLayoutProps) {
  return (
    <section className="flex justify-end items-center">
      <AppSidebar />
      <main className="app-main pl-3 pr-3">
        <AppHeader />
        <div className="border-l border-r fx-border-color app-r-main-w overflow-y-auto">
          {children}
          </div>
      </main>
    </section>
  );
}
