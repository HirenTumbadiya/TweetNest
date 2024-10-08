import Image from "next/image";
import Link from "next/link";
import Exclamation from "@/assets/Exclamation.png";
import { ChevronLeft } from "lucide-react";
import ResetPasswordForm from "./ResetPasswordForm";

const ForgotPasswordPage: React.FC = () => {
  return (
    <main className="flex h-screen items-center justify-center p-5">
      <div className="shadow-2xl flex h-full max-h-[20rem] w-full max-w-[30rem] rounded-2xl overflow-hidden bg-card">
        <div className="w-full space-y-10 overflow-auto p-10">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold text-center">Reset Password</h1>
            <div className="space-y-5">
              <ResetPasswordForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ForgotPasswordPage;
