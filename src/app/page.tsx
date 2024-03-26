import Image from "next/image";
import Link from "next/link";

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

      <nav>
        <Link
          href="https://github.com/omergulcicek/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          @omergulcicek
        </Link>

        <span> / </span>

        <Link
          href="https://github.com/omergulcicek/nextjs-boilerplate/tree/main"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          nextjs-boilerplate
        </Link>
      </nav>
    </main>
  );
}
