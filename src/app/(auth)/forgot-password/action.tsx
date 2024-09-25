"use server";

import prisma from "@/lib/prisma";
import { sendEmail } from "@/lib/email";
import { hash } from "@node-rs/argon2";
import crypto from "crypto";

interface ForgotPasswordResponse {
  error: string;
}

export async function forgotPassword(
  email: string,
): Promise<ForgotPasswordResponse> {
  try {
    // Find the user by email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return { error: "User with this email does not exist." };
    }

    // Generate a secure reset token
    const resetToken = crypto.randomBytes(32).toString("hex");
    const hashedToken = await hash(resetToken);

    // Save the reset token to the database
    await prisma.passwordResetToken.create({
      data: {
        userId: user.id,
        token: hashedToken,
        expiresAt: new Date(Date.now() + 60 * 60 * 1000), // 1-hour expiration
      },
    });

    // Construct the password reset URL
    const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL}/reset-password?token=${resetToken}&id=${user.id}`;

    // Prepare the email body
    const html = `
      <p>You requested a password reset</p>
      <p>Click this <a href="${resetUrl}">link</a> to reset your password</p>
    `;

    // Send the password reset email
    await sendEmail({
      to: email,
      subject: "Password Reset",
      html,
    });

    return { error: "" }; // Return success with no error
  } catch (error) {
    console.error("Error during forgot password process:", error);
    return { error: "Something went wrong. Please try again later." };
  }
}
