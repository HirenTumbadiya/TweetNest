"use server";

import { validateRequest } from "@/auth";
import prisma from "@/lib/prisma";
import { getUserDataSelect } from "@/lib/types";
import {
  UpdateUserProfileValues,
  uploadUserProfileSchema,
} from "@/lib/validation";

export async function updateUserProfile(values: UpdateUserProfileValues) {
  // Validate the incoming values
  const validatedValues = uploadUserProfileSchema.parse(values);

  // Validate the request and get the user
  const { user } = await validateRequest();

  if (!user) throw new Error("Unauthenticated");

  // Update the user's profile in the database
  const updatedUser = await prisma.user.update({
    where: { id: user.id },
    data: validatedValues,
    select: getUserDataSelect(user.id),
  });

  // Return the updated user object
  return updatedUser;
}
