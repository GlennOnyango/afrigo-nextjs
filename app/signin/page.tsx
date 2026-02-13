"use client";
import { useState } from "react";
import { signIn } from "../actions";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const result = await signIn({ email, password });
    if (result?.success) {
      router.push("/admin");
    } else {
      setError(result?.error || "Sign in failed");
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded">
      <h1 className="text-2xl mb-4">Sign In</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full mb-2 p-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full mb-2 p-2 border rounded"
          required
        />
        {error && <div className="text-red-500 mb-2">{error}</div>}
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Sign In</button>
      </form>
    </div>
  );
}
