import type { Metadata } from "next";
import { Suspense } from "react";
import AdminContent from "./AdminContent";

export const metadata: Metadata = {
  title: "Visitor analytics | Incinerator Metal",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return (
    <Suspense fallback={<div>Loading analytics dashboard...</div>}>
      <AdminContent />
    </Suspense>
  );
}