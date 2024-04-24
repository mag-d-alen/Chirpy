"use client";
import { signIn, signOut } from "next-auth/react";
import React from "react";
import Button from "./button/button";
type ProviderButtonProps = {
  id?: string;
  name?: string;
};
const ProviderButton: React.FC<ProviderButtonProps> = ({ id, name }) => {
  return (
    <Button
      variant="primary"
      onClick={() => {
        id ? signIn(id, { callbackUrl: "/" }) : signOut({ callbackUrl: "/" });
      }}>
      {id ? `Sign in with ${name}` : "Sign out"}
    </Button>
  );
};
export default ProviderButton;
