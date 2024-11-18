import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { BaseButton, InputField, PasswordInput } from "@/app/_components/core";

export default function LoginPage() {
    return (
        <div className="flex items-center justify-center h-screen p-5">
            <div className="grid gap-6 justify-items-center max-w-[28.3125rem] w-full">
                <Image
                    src="/soft_invites.svg"
                    alt="Soft Invites logo"
                    width={80}
                    height={80}
                    priority
                />
                <h1 className="font-bold text-2xl md:text-3xl text-neutral-20">Sign in to your account</h1>
                <div className="grid gap-4 w-full">
                    <div className="grid gap-6 w-full border border-neutral-80 p-6 rounded-xl glass-variant">
                        <InputField label="Email Address" type="text" />
                        <PasswordInput label="Password" actionLabel={<Link href="/auth/forgot-password" className="action-label">Forgot Password</Link>} showPassword />
                        <div className="grid gap-4">
                            <BaseButton theme="primary" type="button" block>Sign in</BaseButton>
                            <div className="flex items-center gap-1 px-11">
                                <hr className="flex-1 border-neutral-80" />
                                <span className="font-semibold text-[0.625rem] text-neutral-base">OR</span>
                                <hr className="flex-1 border-neutral-80" />
                            </div>
                            <BaseButton theme="secondary" type="button" block>
                                <Icon icon="simple-icons:google" className="size-5" />
                                Continue with Google
                            </BaseButton>
                        </div>
                    </div>
                    <div className="flex justify-center w-full border border-neutral-80 py-4 rounded-xl glass-variant">
                        <span className="text-neutral-40 text-sm font-normal">I am new here?</span> &nbsp; <Link className="cursor-pointer font-semibold text-teal text-sm" href="/auth/register">Get started</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
