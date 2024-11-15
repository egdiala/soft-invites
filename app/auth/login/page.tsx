import { InputField, PasswordInput } from "@/app/_components/core/Input";
import Image from "next/image";
import Link from "next/link";

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
                <h1 className="font-bold text-3xl text-neutral-20">Sign in to your account</h1>
                <div className="grid gap-4 w-full">
                    <div className="grid gap-6 w-full border border-neutral-80 p-6 rounded-xl glass-variant">
                        <InputField label="Email Address" type="text" />
                        <PasswordInput label="Password" actionLabel={<Link href="/auth/forgot-password" className="action-label">Forgot Password</Link>} />
                    </div>
                </div>
            </div>
        </div>
    )
}
