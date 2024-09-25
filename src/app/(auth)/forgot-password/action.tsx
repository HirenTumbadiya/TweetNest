"use server";

import prisma from "@/lib/prisma";
// import { sendPasswordResetEmail } from "@/lib/email";
import { hash } from "@node-rs/argon2";
import { generateIdFromEntropySize } from "lucia";
import { redirect } from "next/navigation";
import crypto from "crypto";

// Function to handle forgot password
export async function forgotPassword(email: string): Promise<{ error: string }> {
  try {
    // Find user by email
    const user = await prisma.user.findFirst({
      where: { email },
    });

    if (!user) {
      return { error: "User not found" };
    }

    // Generate reset token and expiration (hashed version stored)
    const resetToken = crypto.randomBytes(32).toString("hex");
    const resetTokenHash = crypto.createHash("sha256").update(resetToken).digest("hex");
    const resetTokenExpiration = Date.now() + 3600000; // 1 hour from now

    // Update user with reset token and expiration
    // await prisma.user.update({
    //   where: { email },
    //   data: {
    //     resetToken: resetTokenHash,
    //     resetTokenExpiration,
    //   },
    // });

    // Send reset email with link to frontend's reset password page
    // const resetUrl = `https://your-app-url.com/reset-password?token=${resetToken}&email=${email}`;
    // await sendPasswordResetEmail(user.email, resetUrl);

    return { error: "" }; // No error
  } catch (error) {
    console.error(error);
    return { error: "Something went wrong. Please try again." };
  }
}
