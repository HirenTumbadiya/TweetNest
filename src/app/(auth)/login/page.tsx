import { Metadata } from "next";
import LoginForm from "./LoginForm";
import Link from "next/link";
import GoogleSignInButton from "./google/GoogleSignInButton";

export const metadata: Metadata = {
  title: "Login",
};

export default function Page() {
  return (
    <main className="flex h-screen items-center justify-center p-5">
      <div className="shadow-2xl flex h-full max-h-[40rem] w-full max-w-[30rem] rounded-2xl overflow-hidden bg-card">
        <div className="w-full space-y-10 overflow-auto p-10">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold text-center">
              Login to TweetNest
            </h1>
            <div className="space-y-5">
              <GoogleSignInButton />
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-muted" />
                <span>OR</span>
                <div className="h-px flex-1 bg-muted" />
              </div>
              <LoginForm />
              <div className="flex justify-between">
                <Link
                  href="/forgot-password"
                  className="block text-center hover:underline"
                >
                  Forgot password?
                </Link>
                <Link
                  href="/signup"
                  className="block text-center hover:underline"
                >
                  Don&apos;t have an account? Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
