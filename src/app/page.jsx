import Link from "next/link"

import Button from "@/components/button"

export default function Page() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
      <Link href="/about">Go "About" page</Link>
      <Button />
    </>
  )
}
