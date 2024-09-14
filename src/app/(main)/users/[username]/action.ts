"use server";

import { validateRequest } from "@/auth";
import prisma from "@/lib/prisma";
import { getUserDataSelect } from "@/lib/types";
import {
  UpdateUserProfileValues,
  uploadUserProfileSchema,
} from "@/lib/validation";

export async function updateUserProfile(values: UpdateUserProfileValues) {
  const validatedValues = uploadUserProfileSchema.parse(values);

  const { user } = await validateRequest();

  if (!user) throw new Error("Unauthenticated");

  const updatedUser = await prisma.user.update({
    where: { id: user.id },
    data: validatedValues,
    select: getUserDataSelect(user.id),
  });
}
