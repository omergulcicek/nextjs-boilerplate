import "./globals.css"

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
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
