"use client"

import { FxButton } from "@/components/ui";
import { SettingsErrorIcon } from "@/components/ui/icons/settings-error-icon";

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}

) {
    return (
        <div className="w-full h-screen fx-flex-center">
            <div className="max-w-[400px] w-full">
                <div className="w-full fx-flex-center">
                    <SettingsErrorIcon width={60} height={60} />
                </div>
                <div className="w-full mt-5">
                    <h1 className="text-center w-full font-medium text-[25px]">This page isn&apos;t available at the moment</h1>
                    <p className="fx-label-color text-center w-full mt-2">This may be because of a technical error that we&apos;re working to fix. Please try reloading the page</p>
                </div>
                <div className="fx-flex-center">
                    
                    <FxButton onClick={reset} variant="primary" radius="primary" className="font-medium text-white max-w-[200px] w-full p-2 mt-5">
                        Reload
                    </FxButton>

                </div>

            </div>
        </div>
    )
}


