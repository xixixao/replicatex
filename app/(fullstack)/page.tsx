"use client";

import { useMutationWithAuth } from "@convex-dev/convex-lucia-auth/react";
import { api } from "../../convex/_generated/api";
import { SignUpSignIn } from "@convex-dev/convex-lucia-auth/react";

export default function Home() {
  return (
    <>
      Hello world
      <AuthForm />
    </>
  );
}

export function AuthForm() {
  const signIn = useMutationWithAuth(api.auth.signIn);
  const signUp = useMutationWithAuth(api.auth.signUp);
  return <SignUpSignIn signIn={signIn} signUp={signUp} />;
}
