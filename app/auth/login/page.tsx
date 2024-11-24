import Link from "next/link";
import Image from "next/image";
import { LoginForm } from "./useLogin";

export default function LoginPage() {
    return (
        <div className="flex items-center justify-center h-dvh p-5">
            <div className="grid gap-6 justify-items-center max-w-[28.3125rem] w-full">
                <Image
                    src="/soft_invites.svg"
                    alt="Soft Invites logo"
                    className="size-14 md:size-20"
                    width={80}
                    height={80}
                    priority
                />
                <h1 className="font-bold text-2xl md:text-3xl text-neutral-20">Sign in to your account</h1>
                <div className="grid gap-4 w-full">
                    <LoginForm />
                    <div className="flex justify-center w-full border border-neutral-80 py-4 rounded-xl glass-variant">
                        <span className="text-neutral-40 text-sm font-normal">I am new here?</span> &nbsp; <Link className="cursor-pointer font-semibold text-teal text-sm" href="/auth/register">Get started</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
