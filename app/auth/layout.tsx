import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Soft Invites - Auth",
  description: "Authentication page for Soft Invites",
};

export const viewport: Viewport = {
  themeColor: "#0D9488"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="ellipse-1" />
        <div className="ellipse-2" />
        <div className="ellipse-3" />
        {children}
      </body>
    </html>
  );
}
