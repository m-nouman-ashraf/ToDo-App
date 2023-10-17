"use client";
import { redirect } from "next/navigation";
import { useUser } from "@clerk/nextjs";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoaded, isSignedIn, user } = useUser();
  console.log("user", user);
  console.log("isSignedIn", isSignedIn);
  if (isSignedIn) {
    redirect("/dashboard");
  } else {
    redirect("/login");
  }
  return <>{children}</>;
}
