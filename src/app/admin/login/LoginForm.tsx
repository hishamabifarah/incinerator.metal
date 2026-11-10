"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
export default function LoginForm() {
  const [password, setPassword] = useState(""); const [error, setError] = useState(""); const [busy, setBusy] = useState(false); const router = useRouter();
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setBusy(true); setError("");
    try {
      const response = await fetch("/api/admin/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ password }) });
      const result = await response.json(); if (!response.ok) throw new Error(result.error || "Login failed.");
      router.replace("/admin"); router.refresh();
    } catch (err) { setError(err instanceof Error ? err.message : "Unable to log in."); }
    finally { setBusy(false); }
  }
  return <form className="admin-login-form" onSubmit={submit}><label htmlFor="admin-password">ADMIN PASSWORD</label><input id="admin-password" type="password" autoComplete="current-password" value={password} onChange={(event) => setPassword(event.target.value)} required />{error ? <p className="admin-error" role="alert">{error}</p> : null}<button className="button button-primary" type="submit" disabled={busy}>{busy ? "Checking…" : "Enter dashboard"}</button></form>;
}
