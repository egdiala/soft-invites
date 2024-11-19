"use server";

import { RegisterFormData } from "@/app/auth/register/useRegister";

export async function submitRegisterForm(formData: RegisterFormData) {
    console.log(formData);
}