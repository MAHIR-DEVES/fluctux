import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex justify-center items-center">
      <div className="w-full bg-[var(--primary-light-bg-alter)] h-screen"></div>
      <div className="w-full flex justify-center items-center">
        <div className="max-w-[400px] w-full">
          <h1 className="text-[25px] font-medium">
            Login to Fluctux
          </h1>
          {children}
        </div>
      </div>
    </section>
  );
}
