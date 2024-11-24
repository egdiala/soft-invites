import { useMutation } from "@tanstack/react-query";
import { submitRegisterForm } from "@/app/actions/auth/registerForm";
import { submitLoginForm } from "@/app/actions/auth/loginForm";

export const useRegister = (fn?: () => void) => {
    return useMutation({
        mutationFn: submitRegisterForm,
        onSuccess: () => {
            fn?.();
        },
        onError: (err) => {
            console.error(err)
        },
    });
}

export const useLogin = (fn?: () => void) => {
    return useMutation({
        mutationFn: submitLoginForm,
        onSuccess: () => {
            fn?.();
        },
        onError: (err) => {
            console.error(err)
        },
    });
}