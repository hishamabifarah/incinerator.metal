import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "../../lib/admin-auth";
import AdminDashboard from "./AdminDashboard";

export default async function AdminContent() {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login");
  }

  return <AdminDashboard />;
}