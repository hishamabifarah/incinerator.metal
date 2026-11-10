import type { Metadata } from "next";
import { Suspense } from "react";
import LoginContent from "./LoginContent";

export const metadata: Metadata = {
  title: "Admin login | Incinerator Metal",
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  return (
    <Suspense fallback={<main className="admin-shell admin-login-shell" />}>
      <LoginContent />
    </Suspense>
  );
}