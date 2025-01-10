"use client";
import FxButton from "@/components/ui/button";
import {
  svg_auth_discord,
  svg_auth_github,
  svg_auth_google,
} from "@/components/ui/icons";
import FxInput from "@/components/ui/input";
import FxSeparator from "@/components/ui/separator";
import Link from "next/link";
import React from "react";

export default function LoginPage() {
  return (
    <div className=" w-full mt-5">
      <div className="fixed top-8 right-8 flex justify-end items-center gap-2">
        <p className="text-[16px]">
          New <span className="fx-label-color">/</span>
        </p>
        <Link href={"/signup"}>
          <FxButton variant="secondary" size="sm" className="create-acc-btn">
            <p className="gradient-new-text font-medium">Create Account</p>
          </FxButton>
        </Link>
      </div>
      <>
        <p className="fx-label-color">Email</p>
        <FxInput
          className="w-full"
          variant="primary"
          size="md"
          placeholder="youremail@gmail.com"
        />
        <p className="fx-label-color mt-3">Password</p>
        <FxInput
          className="w-full"
          type="password"
          variant="primary"
          size="md"
          placeholder="********"
        />
        <div className="mt-1">
        <Link href={""} className="fx-link-color hover:underline text-[14px]">Forget Password?</Link>

        </div>

        <FxButton
          className="w-full mt-5 active:scale-[0.98]"
          variant="glassy"
          size="md"
        >
          <p className="font-medium">Continue</p>
        </FxButton>
      </>

      <FxSeparator orientation="horizontal" gap="xl">
        <p className="fx-label-color fx-primary-bg pl-2 pr-2">
          Or
        </p>
      </FxSeparator>

      <>
        <FxButton
          className="w-full active:scale-[0.98] flex justify-center items-center gap-2"
          variant="glassy"
          size="md"
        >
          <p className="font-medium">Google</p>
          {svg_auth_google}
        </FxButton>
        <div className="flex justify-center items-center gap-3 mt-3">
          <FxButton
            className="w-full active:scale-[0.98] flex justify-center items-center gap-2"
            variant="glassy"
            size="md"
          >
            <p className="font-medium">Github</p>
            {svg_auth_github}
          </FxButton>
          <FxButton
            className="w-full active:scale-[0.98] flex justify-center items-center gap-2"
            variant="glassy"
            size="md"
          >
            <p className="font-medium">Discord</p>
            {svg_auth_discord}
          </FxButton>
        </div>
      </>

      <p className="fx-label-color text-[14px] mt-8">
        By signing in, you agree to our{" "}
        <Link href={""} className="fx-link-color hover:underline">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link href={""} className="fx-link-color hover:underline">
          Privacy Policy.
        </Link>
      </p>
    </div>
  );
}
