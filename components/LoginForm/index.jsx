"use client";
import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import { useRouter } from "next/navigation";
import { login } from "@/lib/firebase";
import { getAuth } from "firebase/auth";
import Cookies from "js-cookie";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      const auth = getAuth();
      const user = auth.currentUser;
      Cookies.set("user", JSON.stringify(user));
      router.push("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form
      className="w-full flex flex-col gap-4 bg-transparent "
      onSubmit={handleSubmit}
    >
      <Input
        type="email"
        placeholder="Email address"
        value={email}
        onChange={handleEmail}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePassword}
      />
      <Button type={"submit"} title={"Login to your account"} />
      {error && (
        <p className="text-[#FC4747] text-xs font-light leading-normal">
          {error}
        </p>
      )}
    </form>
  );
}

export default LoginForm;
