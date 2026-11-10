import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dan Christopher Saldariega | Software Engineer",
  description:
    "Software Engineer building reliable, maintainable web applications with React, TypeScript, Node.js, and .NET.",
  metadataBase: new URL("https://dsaldariega.github.io/my-portfolio/"),
  openGraph: {
    title: "Dan Christopher Saldariega | Software Engineer",
    description:
      "Software Engineer focused on React, TypeScript, Node.js, and reliable software delivery.",
    url: "https://dsaldariega.github.io/my-portfolio/",
    siteName: "Dan Christopher Saldariega",
    type: "website",
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
