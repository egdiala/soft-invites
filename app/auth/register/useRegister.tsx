"use client"

import { z } from "zod"
import { Icon } from "@iconify/react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { BaseButton, InputField, PasswordInput } from "@/app/_components/core"
import { submitRegisterForm } from "@/app/actions/auth/registerForm"

const registerFormSchema = z.object({
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

export type RegisterFormData = z.infer<typeof registerFormSchema>

export const RegisterForm = () => {

    const { register, handleSubmit, formState: { errors, isValid } } = useForm<RegisterFormData>({
        resolver: zodResolver(registerFormSchema),
        mode: "onChange",
    })

    return (
        <form onSubmit={handleSubmit(submitRegisterForm)} className="grid gap-6 w-full border border-neutral-80 p-6 rounded-xl glass-variant">
            <InputField label="Email Address" type="text" error={errors.email?.message} {...register("email")} />
            <PasswordInput label="Password" error={errors.password?.message} {...register("password")} showPassword />
            <div className="grid gap-4">
                <BaseButton theme="primary" type="submit" disabled={!isValid} block>Register</BaseButton>
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
        </form>
    )
}