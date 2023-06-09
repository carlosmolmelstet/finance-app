import { createContext, useContext, useEffect, useState } from "react";

import { useRouter } from "next/router";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import { COOKIE } from "@/utils/cookie.helper";

interface User {
  id: string;
  name: string;
  email: string;
  avatar_url: string;
}

interface Account {
  token: string;
  user: User;
}

interface AuthContextData {
  account: Account;
  login: (data: Account) => Promise<void>;
  singOut: () => Promise<void>;
  isLoading: boolean;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext({} as AuthContextData);

export function AuthContextProvider({ children }: AuthProviderProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [account, setAccount] = useState<Account>({} as Account);
  const router = useRouter();

  useEffect(() => {
    const cookies = parseCookies();
    if (cookies[COOKIE.TOKEN] && cookies[COOKIE.USER]) {
      setAccount({
        token: JSON.parse(cookies[COOKIE.TOKEN]),
        user: JSON.parse(cookies[COOKIE.USER]),
      });
      setIsLoading(false);
    }
  }, [router.asPath]);

  async function login(data: Account) {
    setAccount(data);
    setCookie(null, COOKIE.TOKEN, JSON.stringify(data.token), {
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days,
    });
    setCookie(null, COOKIE.USER, JSON.stringify(data.user), {
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days,
    });
    router.push("/dashboard");
  }

  async function singOut() {
    router.push("/auth/login");
    setAccount({} as Account);
    destroyCookie(null, COOKIE.TOKEN);
    destroyCookie(null, COOKIE.USER);
  }

  return (
    <AuthContext.Provider value={{ account, isLoading, login, singOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
