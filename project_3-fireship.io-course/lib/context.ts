import { createContext, Dispatch, SetStateAction } from "react";
import type { User } from "@firebase/auth";

export const UserContext = createContext({
    user: null as User,
    userName: null as string,
    setUser: null as Dispatch<SetStateAction<User>>,
    setUserName: null as Dispatch<SetStateAction<string>>
});