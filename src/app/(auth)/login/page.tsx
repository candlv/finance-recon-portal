import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Login</h1>
      <p className="text-sm text-gray-600">
        Fake login for Day 1. Real auth later.
      </p>

      <div className="space-y-2">
        <button className="w-full rounded bg-black text-white py-2">
          Continue (fake)
        </button>
        <Link className="block text-center text-sm underline" href="/dashboard">
          Skip to app
        </Link>
      </div>
    </div>
  );
}
