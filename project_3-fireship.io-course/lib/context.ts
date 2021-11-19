import { createContext } from "react";
import { User } from "@firebase/auth";

export const UserContext = createContext({ user: null as User, userName: null as string });