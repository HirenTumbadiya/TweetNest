"use client";

import LoadingButton from "@/components/LoadingButton";
import { PasswordInput } from "@/components/passwordInput";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { resetPassword } from "./action";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/router";

const resetPasswordSchema = z.object({
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export default function ResetPasswordForm() {
  const [error, setError] = useState<string>();

  const [isPending, startTransition] = useTransition();
  const router = useRouter(); // For reading query params
  const { token, id } = router.query; // Get token and user ID from URL query

  const form = useForm<any>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
    },
  });

  async function onSubmit(values: any) {
    if (!token || !id) {
      setError("Invalid reset link.");
      return;
    }

    // Use startTransition to handle async actions smoothly
    startTransition(async () => {
      const result = await resetPassword(
        id as string,
        token as string,
        values.password,
      );

      if (result.error) {
        setError(result.error);
      } else {
        // Handle successful password reset, e.g., redirect to login page
        router.push("/login?resetSuccess=true");
      }
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        {error && <p className="text-center text-destructive">{error}</p>}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput placeholder="Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <LoadingButton loading={isPending} type="submit" className="w-full">
          Log in
        </LoadingButton>
      </form>
    </Form>
  );
}
