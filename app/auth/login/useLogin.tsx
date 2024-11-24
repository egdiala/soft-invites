"use client"

import { z } from "zod"
import Link from "next/link"
import { Icon } from "@iconify/react"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useLogin } from "@/app/services/mutations/useAuth"
import { loginWithGoogle } from "@/app/actions/auth/loginForm"
import { BaseButton, InputField, PasswordInput } from "@/app/_components/core"

const loginFormSchema = z.object({
    email: z.string().email("Please provide a valid email address"),
    password: z
        .string()
        .min(8, "Password must be at least 8 characters long")
        .refine((val) => /[a-z]/.test(val), "Password must contain at least one lowercase letter")
        .refine((val) => /[A-Z]/.test(val), "Password must contain at least one uppercase letter")
        .refine((val) => /\d/.test(val), "Password must contain at least one number")
        .refine(
            (val) => /[@$!%*?&-]/.test(val),
            "Password must contain at least one special character (@, $, !, %, *, ?, &)"
        ),
})

export type LoginFormData = z.infer<typeof loginFormSchema>

export const LoginForm = () => {

    const { mutate, isPending } = useLogin()

    const { register, handleSubmit, formState: { errors }, control } = useForm<LoginFormData>({
        resolver: zodResolver(loginFormSchema),
        mode: "onSubmit",
    })

    return (
        <form onSubmit={handleSubmit((values) => mutate(values))} className="grid gap-6 w-full border border-neutral-80 p-6 rounded-xl glass-variant">
            <InputField label="Email Address" type="text" error={errors.email?.message} {...register("email")} />
            <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ field }) => <PasswordInput label="Password" actionLabel={<Link href="/auth/forgot-password" className="action-label">Forgot Password</Link>} error={errors.password?.message} {...field} showPassword />}
            />
            <div className="grid gap-4">
                <BaseButton theme="primary" type="submit" disabled={isPending} loading={isPending} block>Sign in</BaseButton>
                <div className="flex items-center gap-1 px-11">
                    <hr className="flex-1 border-neutral-80" />
                    <span className="font-semibold text-[0.625rem] text-neutral-base">OR</span>
                    <hr className="flex-1 border-neutral-80" />
                </div>
                <BaseButton theme="secondary" type="button" onClick={loginWithGoogle} block>
                    <Icon icon="simple-icons:google" className="size-5" />
                    Continue with Google
                </BaseButton>
            </div>
        </form>
    )
}