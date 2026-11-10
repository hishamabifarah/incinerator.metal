import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "../../../lib/admin-auth";
import LoginForm from "./LoginForm";

export default async function LoginContent() {
  if (await isAdminAuthenticated()) {
    redirect("/admin");
  }

  return (
    <main className="admin-shell admin-login-shell">
      <div className="admin-panel admin-login-panel">
        <p className="eyebrow">INCINERATOR / PRIVATE AREA</p>

        <h1>
          Admin access<span>.</span>
        </h1>

        <p className="admin-muted">
          Visitor analytics. Private dashboard.
        </p>

        <LoginForm />

        <a className="admin-back" href="/">
          ← Back to the archive
        </a>
      </div>
    </main>
  );
}