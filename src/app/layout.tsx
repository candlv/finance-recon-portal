import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Finance Recon Portal",
  description: "Bank ↔ Invoice matching portal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
