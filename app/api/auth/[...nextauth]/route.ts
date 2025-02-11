import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from "bcrypt";
import db from "../../../database/db";

const authOptions = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID || '',
            clientSecret: process.env.GOOGLE_SECRET || '',
        }),
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "example@example.com" },
                password: { label: "Password", type: "password", placeholder: "********" },
            },
            async authorize(credentials) {
                const userFound = await db.user.findUnique({
                    where: {
                        email: credentials?.email
                    }
                })
                if (!userFound) throw new Error('Invalid Login. No user found.')
                const isValidPassword = await bcrypt.compare(credentials?.password || '', userFound?.password);
                if (!isValidPassword) {
                    throw new Error('Invalid login credentials');
                }
                return {
                    id: String(userFound.id),
                    name: userFound.username,
                    email: userFound.email,
                };
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) token.id = user.id;
            return token;
        }
    },
    secret: process.env.NEXT_PUBLIC_SECRET,
    theme: {
        colorScheme: "light",
        brandColor: "#0862cc",
        logo: "/SkyChain.jpg",
    },
    pages: {
        signIn: '/auth/login',
    },
    session: {
        strategy: 'jwt',
        maxAge: 3 * 24 * 60 * 60
    }
})

export { authOptions as GET, authOptions as POST }