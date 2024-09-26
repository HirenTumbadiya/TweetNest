import { Metadata } from "next";
import Link from "next/link";
import SignUpForm from "./SignUpForm";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default function Page() {
  return (
    <main className="flex h-screen items-center justify-center p-5">
      <div className="shadow-2xl flex h-full max-h-[40rem] w-full max-w-[30rem] rounded-2xl overflow-hidden bg-card">
        <div className="w-full space-y-10 overflow-auto p-10">
          <div className="space-y-1 text-center">
            <h1 className="text-3xl font-bold">Sign up to TweetNest</h1>
            <p>
              A place where even <span className="italic">you</span> can find a friend
            </p>
          </div>
          <div className="space-y-5">
            <SignUpForm />
            <Link href="/login" className="block text-center hover:underline">Already have an account? Log in</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
