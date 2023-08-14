import Model from "@/components/Model";
import "./globals.css";

export const metadata = {
  title: "Next.js + TypeScript Starter",
  description: "A starter for Next.js with TypeScript.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#f5f6f8]">
        {children}
        <Model />
      </body>
    </html>
  );
}
