import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Soft Invites - Auth",
  description: "Authentication page for Soft Invites",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased overflow-hidden">
        <div className="ellipse-1" />
        <div className="ellipse-2" />
        <div className="ellipse-3" />
        {children}
      </body>
    </html>
  );
}
