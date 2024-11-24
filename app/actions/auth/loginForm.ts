"use server"

// import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

import { createClient } from "@/app/utils/supabase/server";

import type { LoginFormData } from "@/app/auth/login/useLogin";
import { headers } from "next/headers";


export async function submitLoginForm(formData: LoginFormData) {
    const supabase = await createClient()

    const { error } = await supabase.auth.signInWithPassword(formData)
    
    if (error) {
        console.log(error.message)
    } else {
        redirect("/")
    }

    // revalidatePath('/auth', 'layout')
    // redirect('/login')
}


export async function loginWithGoogle() {
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