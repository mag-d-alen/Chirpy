"use client";
import { signIn } from "next-auth/react";
import React from "react";
type ProviderButtonProps = {
  id: string;
  name: string;
};
const ProviderButton: React.FC<ProviderButtonProps> = ({ id, name }) => {
  return (
    <button
      className="bg-red-500 rounded-3xl px-6 py-2 text-white hover:bg-red-700"
      onClick={() => signIn(id, { callbackUrl: "/" })}>
      Sign in with {name}
    </button>
  );
};
export default ProviderButton;
