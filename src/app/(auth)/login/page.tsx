"use client";
import FxButton from "@/components/ui/button";
import FxInput from "@/components/ui/input";
import FxSeparator from "@/components/ui/separator";
import Link from "next/link";
import React from "react";

export default function LoginPage() {
  return (
    <div className=" w-full mt-5">
      <>
        <p className="text-[var(--label-text-color)]">Email</p>
        <FxInput className="w-full" variant="primary" size="md" />
        <p className="text-[var(--label-text-color)] mt-3">Password</p>
        <FxInput
          className="w-full"
          type="password"
          variant="primary"
          size="md"
        />

        <FxButton
          className="w-full mt-5 active:scale-[0.98]"
          variant="glassy"
          size="md"
        >
          <p className="font-medium">Continue</p>
        </FxButton>
      </>

      <FxSeparator orientation="horizontal" gap="xl">
        <p className="text-[var(--label-text-color)] bg-[var(--background)] pl-2 pr-2">
          Or
        </p>
      </FxSeparator>

      <>
        <FxButton
          className="w-full active:scale-[0.98]"
          variant="glassy"
          size="md"
        >
          <p className="font-medium">Login with Google</p>
        </FxButton>
        <div className="flex justify-center items-center gap-3 mt-3">
          <FxButton
            className="w-full active:scale-[0.98]"
            variant="glassy"
            size="md"
          >
            <p className="font-medium">Login with Github</p>
          </FxButton>
          <FxButton
            className="w-full active:scale-[0.98]"
            variant="glassy"
            size="md"
          >
            <p className="font-medium">Login with Discord</p>
          </FxButton>
        </div>
      </>

      <p className="text-[var(--label-text-color)] text-[14px] mt-8">
        By signing in, you agree to our{" "}
        <Link href={""} className="text-[var(--link-color)] hover:underline">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link href={""} className="text-[var(--link-color)] hover:underline">
          Privacy Policy.
        </Link>
      </p>
    </div>
  );
}
