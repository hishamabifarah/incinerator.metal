import type { Metadata } from "next";
import { Suspense } from "react";
import AdminContent from "./AdminContent";

export const metadata: Metadata = {
  title: "Admin | Incinerator Metal",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return (
    <Suspense fallback={<div className="admin-shell">Loading dashboard...</div>}>
      <AdminContent />
    </Suspense>
  );
}