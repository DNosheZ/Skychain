import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

async function fetchRegister(username: string, email: string, password: string) {
    const res = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({ username, email, password }),
        headers: {
            "Content-Type": "application/json",
        },
    });
    return res;
}

export const useRegister = () => {
    const router = useRouter();
    return useMutation({
        mutationFn: (user: { username: string; email: string; password: string }) => fetchRegister(user.username, user.email, user.password),
        onSuccess: () => {
            router.push("/login");
        }
    })
}