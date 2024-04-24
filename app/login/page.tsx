import { getProviders } from "next-auth/react";
import Image from "next/image";
import "../../app/globals.css";
import ProviderButton from "../components/providerButton";
import React from "react";
import Header from "@/app/components/layout/header";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Login() {
  const session = await getServerSession(authOptions);
  try {
    const providers = await getProviders();
    return (
      <>
        <div className="h-1/3 flex flex-col gap-2 items-center mb-16">
          <Header>
            {session
              ? `You are logged in as ${session.user?.name} `
              : "Welcome to Chirpy"}
          </Header>
          <Image
            src="/logo.png"
            alt="logo"
            className="object-cover inline-flex w-12 h-10"
            width={100}
            height={100}
          />
        </div>
        {session ? (
          <ProviderButton />
        ) : (
          providers &&
          Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <ProviderButton id={provider.id} name={provider.name} />
            </div>
          ))
        )}
      </>
    );
  } catch (error) {
    return <>Error</>;
  }
}
