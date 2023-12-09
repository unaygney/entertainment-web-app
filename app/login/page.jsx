import React from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Link from "next/link";
export const metadata = {
  title: "Login Page",
  description: "Entertainment Web App Login Page ",
};

function Login() {
  return (
    <main className="w-screen h-screen bg-[#10141E] px-6 py-12 flex flex-col items-center justify-center">
      <div className="w-full max-w-[400px] p-8  bg-[#161D2F] flex flex-col gap-10 rounded-[20px]">
        <h1 className="text-white text-4xl font-light tracking-[0.5px] leading-normal ">
          Login
        </h1>
        <form className="w-full flex flex-col gap-4 ">
          <Input text="email" placeholder="Email address" />
          <Input text="password" placeholder="Password" />
          <Button type={"submit"} title={"Login to your account"} />
        </form>
        <Link
          className="text-[15px] font-light leading-normal text-white text-center "
          href={"/signup"}
        >
          Don't have an account?
          <span className="text-[#FC4747] ml-2 ">Sign Up</span>
        </Link>
      </div>
    </main>
  );
}

export default Login;
