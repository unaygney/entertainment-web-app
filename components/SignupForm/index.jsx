"use client";
import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import { useRouter } from "next/navigation";
import { createUser } from "@/lib/firebase";

function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const checkPasswordsMatch = () => {
    if (password !== rePassword) {
      setError("Passwords do not match");
      return false;
    }
    setError("");
    return true;
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleRePassword = (e) => {
    setRePassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!checkPasswordsMatch()) {
      return;
    }

    try {
      await createUser(email, password);
      router.push("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form className="w-full flex flex-col gap-4 " onSubmit={handleSubmit}>
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
      <Input
        type="password"
        placeholder="Password"
        value={rePassword}
        onChange={handleRePassword}
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

export default SignupForm;
