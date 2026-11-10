import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "../../lib/admin-auth";
import AdminDashboard from "./AdminDashboard";

export const metadata: Metadata = { title: "Visitor analytics | Incinerator Metal", robots: { index: false, follow: false } };
export default async function AdminPage() { if (!(await isAdminAuthenticated())) redirect("/admin/login"); return <AdminDashboard />; }
