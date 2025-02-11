'use client';
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { useRegister } from "../hooks/useRegister";

export default function Page() {
    const { data: session /*status*/ } = useSession();
    const signUp = useRegister();
    const {
        register,
        handleSubmit,
        formState: { },
    } = useForm();
    const router = useRouter();
    useEffect(() => {
        if (session) {
            router.push("/");
        }
    }, [session, router]);
    const handleSignUp = handleSubmit(async (formData) => {
        try {
            console.log(formData);
            if (formData.password !== formData.confirmPassword) throw new Error("Passwords passwords don't match");
            signUp.mutate({ username: formData.username, email: formData.email, password: formData.password });
        } catch (error) {
            console.error("Sign up failed:", error);
            toast.error("Sign up failed, please try again.");
        }
    });
    return (
        <div className="w-screen h-screen flex flex-col justify-start items-center m-0 p-0 dark:bg-blue1_m3">
            <section className="flex flex-row justify-center items-center h-auto w-1/2 rounded-lg overflow-hidden shadow-[0px_0px_5px_0px_rgba(0,0,0,0.3)] mt-32">
                <div className="m-0 p-0 h-full w-1/2 bg-[#0F0F46] text-white flex flex-col justify-center items-center">
                    <Image src='/SkyChain.jpg' alt="Google logo" width={250} height={150} />
                    <h1 className="font-bold text-4xl mb-4 text-center">Welcome to Sign Up</h1>
                    <h2 className="font-bold text-xl mb-6">Do you have an account?</h2>
                    <a href='login' className="gap-x-2 flex flex-row bg-[#EC2912] py-2 px-5 justify-center items-center rounded-lg font-bold">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M9 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2" />
                            <path d="M3 12h13l-3 -3" />
                            <path d="M13 15l3 -3" />
                        </svg>
                        Sign In
                    </a>
                </div>
                <div className="flex flex-col justify-center items-center h-full w-1/2 p-5 dark:bg-blue1_m2">
                    <h1 className="flex flex-row w-full h-auto text-4xl font-bold mb-8 justify-center items-center dark:text-white">Sign Up</h1>
                    <form className="flex flex-col justify-center items-center h-auto w-full text-lg font-semibold text-[#7a8188] gap-y-4">
                        <label className="flex flex-col justify-center items-start h-auto w-full dark:text-blue3_1">Username:
                            <input className="flex flex-row w-full h-auto py-3 px-4 bg-[#f2f2f2] rounded-xl text-black" type="text" placeholder="username"
                                {...register("username", {
                                    required: {
                                        value: true,
                                        message: "Username is required",
                                    },
                                })} />
                        </label>
                        <label className="flex flex-col justify-center items-start h-auto w-full dark:text-blue3_1">Email:
                            <input className="flex flex-row w-full h-auto py-3 px-4 bg-[#f2f2f2] rounded-xl text-black" type="text" placeholder="user@email.com"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is required",
                                    },
                                })} />
                        </label>
                        <label className="flex flex-col justify-center items-start h-auto w-full dark:text-blue3_1">Password:
                            <input className="flex flex-row w-full h-auto py-3 px-4 bg-[#f2f2f2] rounded-xl text-black" type="password" placeholder="******"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is required",
                                    },
                                })} />
                        </label>
                        <label className="flex flex-col justify-center items-start h-auto w-full dark:text-blue3_1">Confirm Password:
                            <input className="flex flex-row w-full h-auto py-3 px-4 bg-[#f2f2f2] rounded-xl text-black" type="password" placeholder="******"
                                {...register("confirmPassword", {
                                    required: {
                                        value: true,
                                        message: "Confirm Password is required",
                                    },
                                })} />
                        </label>
                        <button onClick={handleSignUp} type="submit" className="gap-x-2 flex flex-row bg-[#EC2912] py-2 px-5 justify-center items-center rounded-lg font-bold text-white mt-8 cursor-pointer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M21 17.85h-18c0 -4.05 1.421 -4.05 3.79 -4.05c5.21 0 1.21 -4.59 1.21 -6.8a4 4 0 1 1 8 0c0 2.21 -4 6.8 1.21 6.8c2.369 0 3.79 0 3.79 4.05z" />
                                <path d="M5 21h14" />
                            </svg>
                            Sign Up
                        </button>
                    </form>
                </div>
            </section>
        </div>
    )
}