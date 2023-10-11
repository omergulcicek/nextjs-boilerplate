import Head from "next/head"
import { Inter } from "next/font/google"

import "./globals.css"

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
        className="flex min-h-screen flex-col"
        //className={inter.className}
        suppressHydrationWarning
      >
        <header>header</header>
        <main className="flex-1">{children}</main>
        <footer>footer</footer>
      </body>
    </html>
  )
}
