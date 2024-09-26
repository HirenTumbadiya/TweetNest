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
    const resetUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/reset-password?token=${resetToken}&id=${user.id}`;

    // Prepare the email body
    const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
      <h2 style="color: #333;">Password Reset Request</h2>
      <p style="color: #555;">
        You requested to reset your password. If you did not make this request, you can safely ignore this email.
      </p>
      <p style="color: #555;">
        To reset your password, click the button below:
      </p>
      <div style="text-align: center; margin: 30px 0;">
        <a href="${resetUrl}" style="background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; display: inline-block;">
          Reset Password
        </a>
      </div>
      <p style="color: #555;">
        Or, copy and paste this URL into your browser: <br />
        <a href="${resetUrl}" style="color: #007bff;">${resetUrl}</a>
      </p>
      <p style="color: #555;">
        This link will expire in 1 hour.
      </p>
      <hr style="margin-top: 40px;"/>
      <p style="color: #aaa; font-size: 12px; text-align: center;">
        &copy; ${new Date().getFullYear()} TweetNest. All rights reserved.
      </p>
    </div>
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
