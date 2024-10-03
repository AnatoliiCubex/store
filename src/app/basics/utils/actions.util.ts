"use server";

import { signIn } from "~/auth";

export const login = async (formData: FormData) => {
  const action = formData.get("action");

  await signIn(action as string, { redirectTo: "/" });
};

export const logout = async () => {
  console.log("logout");
};
