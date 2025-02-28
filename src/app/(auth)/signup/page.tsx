"use client"

import { useReactForm } from "@/app/hooks";
import { FxButton, FxInput, FxSeparator } from "@/components/ui";
import { DiscordIcon, GithubIcon, GoogleIcon } from "@/components/ui/icons";
import { userZodSchema } from "@/zod/user/user.zod";
import Link from "next/link";
import React from "react";
import { z } from "zod";

export default function SignUpPage() {

  const { register, handleSubmit, errors } = useReactForm({ ZOD_SCHEMA: userZodSchema })

  const onSubmit = (data: z.infer<typeof userZodSchema>) => {
    console.log(data.fname);
    console.log(data.lname);
    console.log(data.email);
  }

  return (
    <div className="w-full mt-5 ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="fx-flex-between-ic gap-3">
          <div>
            <p className="text-[var(--label-text-color)]">First Name</p>
            <FxInput
              className="w-full"
              variant="primary"
              size="md"
              placeholder="Jhon"
              radius="primary"
              {...register("fname")}
              required
            />
            {errors.fname && <p>{errors.fname.message}</p>}
          </div>
          <div>
            <p className="text-[var(--label-text-color)]">Last Name</p>
            <FxInput
              className="w-full"
              variant="primary"
              size="md"
              placeholder="Doe"
              radius="primary"
              {...register("lname")}
            />

            {errors.lname && <p>{errors.lname.message}</p>}
          </div>

        </div>
        <p className="text-[var(--label-text-color)] mt-3">Email</p>
        <FxInput
          className="w-full"
          variant="primary"
          size="md"
          placeholder="youremail@gmail.com"
          radius="primary"
          {...register("email")}
          required
        />
        {errors.email && <p>{errors.email.message}</p>}

        <FxButton
          className="w-full mt-5"
          variant="primary"
          size="md"
          radius="primary"
          type="submit"
        >
          <p className="font-medium">Continue</p>
        </FxButton>
      </form>

      <FxSeparator orientation="horizontal" gap="xl">
        <p className="text-[var(--label-text-color)] bg-[var(--background)] pl-2 pr-2">
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
            className="w-full flex justify-center items-center gap-2"
            variant="secondary"
            size="md"
            radius="primary"
          >
            <p className="font-medium fx-label-color">Github</p>
            <GithubIcon />
          </FxButton>
          <FxButton
            className="w-full flex justify-center items-center gap-2"
            variant="secondary"
            size="md"
            radius="primary"
          >
            <p className="font-medium fx-label-color">Discord</p>
            <DiscordIcon width={25} height={25} color="var(--primary-color)" />
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
