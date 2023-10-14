import Head from "next/head"
import { Inter } from "next/font/google"

import { Header, Footer } from "@/components"
import { cn } from "@/utils"
import "@/tailwindcss"

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  metadataBase: new URL("https://github.com/omergulcicek/nextjs-boilerplate"),
  robots: {
    index: true,
    follow: true,
  },
  title: "Next.js 13 Boilerplate",
  description: "Next.js 13 Boilerplate",
  themeColor: "#ffffff",
  alternates: {
    canonical: "/",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body
        className={cn(inter.className, "flex min-h-screen flex-col")}
        suppressHydrationWarning
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
