import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcrypt";
import db from "../../../database/db";

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();
        const userFound = await db.user.findUnique({
            where: {
                email: data.email,
            },
        });
        if (userFound) {
            return NextResponse.json(
                {
                    message: "Email already exists",
                },
                {
                    status: 400,
                }
            );
        }
        const usernameFound = await db.user.findUnique({
            where: {
                username: data.username,
            },
        });
        if (usernameFound) {
            return NextResponse.json(
                {
                    message: "Username already exists",
                },
                {
                    status: 400,
                }
            );
        }
        const hashedPassword = await bcrypt.hash(data.password, 10);
        const newUser = await db.user.create({
            data: {
                username: data.username,
                email: data.email,
                password: hashedPassword,
            },
        });
        const { password: _, ...user } = newUser;
        void _;
        return NextResponse.json(user);
    } catch (e: unknown) {
        let errorMessage = "Error desconocido";
        if (e instanceof Error) {
            errorMessage = e.message;
        }
        return NextResponse.json(
            { message: errorMessage },
            { status: 500 }
        );
    }
}
