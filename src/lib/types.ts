import { Prisma } from "@prisma/client";

//  The `satisfies` keyword ensures that `postDataInclude` matches the `Prisma.PostInclude` type definition.
//  It helps with type checking, ensuring that `postDataInclude` conforms to the expected structure for including related user data in a Prisma query.

export const postDataInclude = {
  user: {
    select: {
      username: true,
      displayName: true,
      avatarUrl: true,
    },
  },
} satisfies Prisma.PostInclude;

export type PostData = Prisma.PostGetPayload<{
  include: typeof postDataInclude;
}>;
