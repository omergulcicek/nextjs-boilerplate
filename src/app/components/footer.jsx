import Link from "next/link"

import { Container } from "@/components"

export default function Footer() {
  return (
    <>
      <footer className="sticky top-0 z-50 w-full border-t border-neutral-900/10 bg-white">
        <Container size="lg">
          <p className="text-sm text-slate-500 my-6">
            <span>© 2023</span>{" "}
            <Link
              href="https://omergulcicek.com/"
              rel="noopener noreferrer"
              target="_blank"
              className="text-sm leading-6 cursor-pointer py-1 hover:text-black transition-colors"
            >
              Ömer Gülçiçek
            </Link>
          </p>
        </Container>
      </footer>
    </>
  )
}
