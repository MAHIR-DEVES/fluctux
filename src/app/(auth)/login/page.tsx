"use client";
import FxButton from "@/components/ui/fxbutton";
import FxInput from "@/components/ui/fxinput";
import FxSeparator from "@/components/ui/fxseparator";
import { DiscordIcon } from "@/components/ui/icons/discord-icon";
import { GithubIcon } from "@/components/ui/icons/github-icon";
import { GoogleIcon } from "@/components/ui/icons/google-icon";
import Link from "next/link";
import React from "react";

export default function LoginPage() {
  return (
    <div className=" w-full mt-5">
      <>
        <p className="fx-label-color">Email</p>
        <FxInput
          className="w-full"
          variant="primary"
          size="md"
          placeholder="youremail@gmail.com"
          radius="primary"
        />
        <p className="fx-label-color mt-3">Password</p>
        <FxInput
          className="w-full"
          type="password"
          variant="primary"
          size="md"
          placeholder="********"
          radius="primary"
        />
        <div className="mt-1">
          <Link href={""} className="fx-link-color hover:underline text-[14px]">Forget Password?</Link>

        </div>

        <FxButton
          className="w-full mt-5"
          variant="primary"
          size="md"
          radius="primary"
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
          className="w-full  flex justify-center items-center gap-2"
          variant="secondary"
          size="md"
          radius="primary"
        >
          <p className="font-medium fx-label-color">Google</p>
          <GoogleIcon />
        </FxButton>
        <div className="flex justify-center items-center gap-3 mt-3">
          <FxButton
            className="w-full  flex justify-center items-center gap-2"
            variant="secondary"
            size="md"
            radius="primary"
          >
            <p className="font-medium fx-label-color">Github</p>
            <GithubIcon />
          </FxButton>
          <FxButton
            className="w-full  flex justify-center items-center gap-2"
            variant="secondary"
            size="md"
            radius="primary"
          >
            <p className="font-medium fx-label-color">Discord</p>
            <DiscordIcon width={25} height={25} />
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
