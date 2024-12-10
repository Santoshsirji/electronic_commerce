import { NextResponse } from "next/server";
import { getVerificationTokenByToken, deleteVerificationToken } from "@/data/verification-token";
import { db } from "@/lib/db";
import { error } from "console";

export  async function POST(req: Request) {
    const { token } = await req.json();

    if(!token || typeof token !== 'string') {
        return NextResponse.json({error: "Invalid token", status: 400})
    }

    const verificationToken = await getVerificationTokenByToken(token);

    if(!verificationToken) {
        return NextResponse.json({error: "Invalid or expired token", status: 400});
    }

    const user = await db.user.update({
        where: {email: verificationToken.email},
        data: { emailVerified: new Date()},
    });

    await deleteVerificationToken(token);

    return NextResponse.json({success: "Email verified successfully", status: 200});

}