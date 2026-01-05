import Link from "next/link";

const nav = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/transactions", label: "Bank Transactions" },
  { href: "/invoices", label: "Invoices" },
  { href: "/matches", label: "Matching" },
  { href: "/settings", label: "Settings" },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen grid grid-cols-[260px_1fr]">
      <aside className="border-r p-4">
        <div className="font-semibold text-lg">Finance Recon Portal</div>
        <div className="text-xs text-gray-500 mt-1">UI shell only</div>

        <nav className="mt-6 flex flex-col gap-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded px-3 py-2 hover:bg-gray-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      <main className="p-6">
        <header className="flex items-center justify-between mb-6">
          <div className="text-sm text-gray-500">Workspace</div>
          <div className="flex gap-2">
            <Link className="rounded border px-3 py-2 text-sm hover:bg-gray-50" href="/login">
              Logout (fake)
            </Link>
          </div>
        </header>

        <section className="rounded border p-6 bg-white">{children}</section>
      </main>
    </div>
  );
}
