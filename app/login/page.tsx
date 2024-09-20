import LoginForm from "@/app/ui/login-form";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="flex flex-row flex-wrap items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col p-4 ">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 ">
          <div className="w-32 text-white md:w-36">Logo</div>
        </div>
        <LoginForm />
        <div className="self-start w-full mt-3">
          <Link
            href="/"
            className="flex items-center w-full justify-around rounded-lg bg-green-400 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <ArrowLeftIcon className="w-5 md:w-6" />
            <span>Home page</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
