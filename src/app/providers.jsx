"use client";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";
export const NextAuthProvider = ({ children }) => {
  return <SessionProvider><RecoilRoot>{children}</RecoilRoot></SessionProvider>;
};
