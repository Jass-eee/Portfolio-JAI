import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jasmeet Kaur — UI/UX & Product Designer",
  description: "Portfolio of Jasmeet Kaur: product design, conversion UX, mobile experiences, AI workflows and design operations.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
