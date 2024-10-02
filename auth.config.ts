import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      console.log(123);
      const isLoggedIn = !!auth?.user;
      const isOnExample = nextUrl.pathname.startsWith("/example");
      if (isOnExample) {
        return isLoggedIn ? true : false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/example", nextUrl));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
