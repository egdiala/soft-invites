import Link from "next/link";
import Image from "next/image";
import { RegisterForm } from "./useRegister";

export default function RegisterPage() {
    return (
        <div className="flex items-center justify-center h-dvh p-5">
            <div className="grid gap-8 max-w-[28.3125rem] w-full">
                <div className="grid gap-6 justify-items-center w-full">
                    <Image
                        src="/soft_invites.svg"
                        alt="Soft Invites logo"
                        className="size-14 md:size-20"
                        width={80}
                        height={80}
                        priority
                    />
                    <h1 className="font-bold text-2xl md:text-3xl text-neutral-20 text-center">Event attendance management tool for everybody</h1>
                    <div className="grid gap-4 w-full">
                        <RegisterForm />
                        <div className="flex justify-center w-full border border-neutral-80 py-4 rounded-xl glass-variant">
                            <span className="text-neutral-40 text-sm font-normal">Already have an account?</span> &nbsp; <Link className="cursor-pointer font-semibold text-teal text-sm" href="/auth/login">Sign in</Link>
                        </div>
                    </div>
                </div>
                <p className="text-center font-normal text-sm text-neutral-40">By clicking “Register” above, you acknowledge that you have read and understood, and agree to SoftInvite’s <span className="font-medium text-teal">Terms and Privacy</span>.</p>
            </div>
        </div>
    )
}
