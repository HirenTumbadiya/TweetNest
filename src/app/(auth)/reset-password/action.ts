"use server";

import prisma from "@/lib/prisma";
import { hash, verify } from "@node-rs/argon2";

interface ResetPasswordResponse {
  error: string;
}

export async function resetPassword(
  userId: string,
  token: string,
  password: string,
): Promise<ResetPasswordResponse> {
  try {
    // Find the reset token in the database
    const resetToken = await prisma.passwordResetToken.findFirst({
      where: { userId, expiresAt: { gte: new Date() } },
    });

    if (!resetToken) {
      return { error: "Invalid or expired reset token." };
    }

    // Verify the token
    const isTokenValid = await verify(resetToken.token, token);
    if (!isTokenValid) {
      return { error: "Invalid reset token." };
    }

    // Hash the new password and update the user's password
    const hashedPassword = await hash(password);
    await prisma.user.update({
      where: { id: userId },
      data: { passwordHash: hashedPassword },
    });

    // Delete the used reset token
    await prisma.passwordResetToken.delete({
      where: { id: resetToken.id },
    });

    return { error: "" }; // Password reset was successful
  } catch (error) {
    console.error("Error resetting password:", error);
    return { error: "Something went wrong. Please try again later." };
  }
}
