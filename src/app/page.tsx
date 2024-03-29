import Image from "next/image";
import Link from "next/link";

import { Button } from "@/ui/button";
import { Separator } from "@/ui/separator";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8">
      <Image
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        loading="lazy"
      />

      <nav className="flex h-5 items-center space-x-1 text-sm">
        <Link
          href="https://github.com/omergulcicek/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="link">@omergulcicek</Button>
        </Link>

        <Separator orientation="vertical" />

        <Link
          href="https://github.com/omergulcicek/nextjs-boilerplate/tree/main"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="link">nextjs-boilerplate</Button>
        </Link>
      </nav>
    </main>
  );
}
