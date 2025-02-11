import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

export default function LoginButton() {
    const { data: session } = useSession();
    if (session) {
        return (
            <>
                <a href="#" onClick={() => signOut()} className="gap-x-2 flex flex-row bg-[#EC2912] py-2 px-5 justify-center items-center rounded-lg font-bold">
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
                        <path d="M15 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                        <path d="M21 12h-13l3 -3" />
                        <path d="M11 15l-3 -3" />
                    </svg>
                    Sign out
                </a>
                {session.user?.image ?
                    <Image src={session.user?.image || ''} alt="user" className="rounded-full" width="50" height="50" /> :
                    <span className="flex justify-center items-center bg-white text-[#0F0F46] rounded-full w-[50px] h-[50px] text-3xl">{session.user?.name?.split('')[0].toLocaleUpperCase()}</span>}
            </>
        )
    }
    return (
        <a href="/login" className="gap-x-2 flex flex-row bg-[#EC2912] py-2 px-5 justify-center items-center rounded-lg font-bold">
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
            Login
        </a>
    )
}