import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
type UnauthorisedProps = {
  children: React.ReactNode;
};
export async function Unauthorised({ children }: UnauthorisedProps) {
  const session = await getServerSession(authOptions);
  return (
    <>
      {session ? children : <div>Seems that you have not logged in yet...</div>}
    </>
  );
}
