import Loader from "./components/layout/loader";
import Layout from "./components/layout/layout";
import React from "react";
import { Unauthorised } from "@/app/components/layout/unauthorised";

export default function Home() {
  return <Unauthorised>chirp chirp</Unauthorised>;
}
