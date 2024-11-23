import { useMutation } from "@tanstack/react-query";
import { submitRegisterForm } from "@/app/actions/auth/registerForm";

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