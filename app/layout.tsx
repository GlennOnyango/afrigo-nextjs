import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "./i18n-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import i18n from "./i18n";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Afrigo Solutions",
  description: "YOUR TRUSTED EXECUTION DESK IN KENYA",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth.api.getSession({ headers: await headers() });
  return (
    <html lang={i18n.language === "cn" ? "zh" : "en"}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <I18nProvider>
          <Navbar isAuthenticated={!!session?.user} />
          <div className="min-h-screen">{children}</div>

          <Footer />
          <Toaster
            toastOptions={{
              classNames: {
                toast: "!bg-gray-200",
                title: "!text-black font-bold",
                description: "!text-black",
              },
            }}
          />
        </I18nProvider>
      </body>
    </html>
  );
}
