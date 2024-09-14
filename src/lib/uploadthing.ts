import { AppFileRouter } from "@/app/api/uploadthings/core";
import { generateReactHelpers } from "@uploadthing/react";

export const { useUploadThing, uploadFiles } =
  generateReactHelpers<AppFileRouter>();
