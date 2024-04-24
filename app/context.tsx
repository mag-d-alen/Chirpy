import { createContext } from "react";
import {User } from "next-auth";

export const SessionContext = createContext({} as User);
