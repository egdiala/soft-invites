"use server"

// import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

import { createClient } from "@/app/utils/supabase/server";

import type { RegisterFormData } from "@/app/auth/register/useRegister";
import { User } from "@supabase/supabase-js";
import { headers } from "next/headers";


export async function submitRegisterForm(formData: RegisterFormData) {
    const supabase = await createClient()

    const { error, data } = await supabase.auth.signUp(formData)
    
    if (error) {
        redirect(`/auth/register?user_email=${(data?.user as User | null)?.email}`)
    }

    // revalidatePath('/auth', 'layout')
    // redirect('/login')
}


export async function registerWithGoogle() {
    const supabase = await createClient()
    const origin = (await headers()).get("origin")

    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
            queryParams: {
                access_type: 'offline',
                prompt: 'consent',
            },
            redirectTo: `${origin}/auth/callback`,
        }
    })
    
    if (error) {
        console.error(error)
    } else {
        redirect(data.url)
    }

    // revalidatePath('/auth', 'layout')
    // redirect('/login')
}