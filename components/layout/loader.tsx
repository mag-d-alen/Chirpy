"use client";
import { useSession } from "next-auth/react";
import SvgPathLoader from "./loaderAnimation";
type LoaderProps = {
  children: React.ReactNode;
};
const Loader: React.FC<LoaderProps> = ({ children }) => {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return (
      <div className="flex">
        <SvgPathLoader />

      </div>
    );
  }
  if (status === "unauthenticated" || session === null) {
    return <div className="flex">You need to log in first</div>;
  }
  return <div>{children}</div>;
};
export default Loader;
