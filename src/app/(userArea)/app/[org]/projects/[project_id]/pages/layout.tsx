import FxButton from "@/components/ui/fxbutton";
import FxInput from "@/components/ui/fxinput";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <div className="page-nav p-3 sticky top-0 backdrop-blur-3xl shborder flex justify-between items-center">
        <div className="flex justify-start items-center gap-3">
          <FxButton variant="secondary" size="sm" className="fx-label-color font-medium">
            All
          </FxButton>
          <FxButton variant="secondary" size="sm" className="fx-label-color font-medium">
            Public
          </FxButton>
          <FxButton variant="secondary" size="sm" className="fx-label-color font-medium">
            Private
          </FxButton>
        </div>
        <div>
          <div className="w-full flex justify-center items-center gap-3 ">
            <FxInput
              variant="primary"
              size="sm"
              placeholder="Search pages..."
              className="w-full"
            />
            <FxButton
              variant="secondary"
              size="sm"
              className="flex-shrink-0 font-medium text-yellow-400"
            >
              Draft
            </FxButton>
            <FxButton
              variant="glassy"
              size="sm"
              className="flex-shrink-0 font-medium"
            >
              New page
            </FxButton>
          </div>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
