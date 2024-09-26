import Image from "next/image";
import Link from "next/link";
import Exclamation from "@/assets/Exclamation.png";
import { ChevronLeft } from "lucide-react";
import ResetPasswordForm from "./ResetPasswordForm";

const ForgotPasswordPage: React.FC = () => {
  return (
    <main className="flex h-screen items-center justify-center p-5">
      <div className="shadow-2xl flex h-full max-h-[40rem] w-full max-w-[64rem] rounded-2xl overflow-hidden bg-card">
        <div className="w-full space-y-10 overflow-auto p-10">
          <div className="space-y-1">
            <div className="flex justify-center items-center pb-2">
              <Image
                src={Exclamation}
                width={100}
                height={100}
                alt="Exclamation Logo"
              />
            </div>
            <h1 className="text-3xl font-bold text-center">Reset Password</h1>
            <div className="space-y-5">
              <ResetPasswordForm />
              <div className="flex justify-center">
                <Link
                  href="/login"
                  className="flex items-center text-center hover:underline"
                >
                  <ChevronLeft className="animate-pulse" />
                  Back to Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ForgotPasswordPage;
