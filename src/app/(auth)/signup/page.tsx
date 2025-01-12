import FxButton from '@/components/ui/fxbutton'
import { svg_auth_discord, svg_auth_github, svg_auth_google } from '@/components/ui/fxicons'
import FxInput from '@/components/ui/fxinput'
import FxSeparator from '@/components/ui/fxseparator'
import Link from 'next/link'
import React from 'react'

export default function SignUpPage(){
  return (
    <div className=" w-full mt-5">
      <h3 className='mb-5 font-medium text-[16px]'>
        Already have an account? <Link href="/login" className="text-[var(--link-color)] hover:underline">Log in</Link>
      </h3>
      <>
        <p className="text-[var(--label-text-color)]">Email</p>
        <FxInput
          className="w-full"
          variant="primary"
          size="md"
          placeholder="youremail@gmail.com"
        />
        <p className="text-[var(--label-text-color)] mt-3">Password</p>
        <FxInput
          className="w-full"
          type="password"
          variant="primary"
          size="md"
          placeholder="********"
        />

        <FxButton
          className="w-full mt-5 active:scale-[0.98]"
          variant="glassy"
          size="md"
        >
          <p className="font-medium">Create Account</p>
        </FxButton>
      </>

      <FxSeparator orientation="horizontal" gap="xl">
        <p className="text-[var(--label-text-color)] bg-[var(--background)] pl-2 pr-2">
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
  )
}


