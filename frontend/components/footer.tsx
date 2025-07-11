import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="pb-4 px-4 text-center text-xs sm:text-sm bg-amber-50 backdrop-blur-sm text-gray-600 w-full">
      <p>
        No data is permanently stored on our servers.
        Read our <Link href="/privacy" className="underline hover:text-amber-600 font-medium transition-colors">Privacy Policy</Link>.
        We&apos;re{" "}
        <Link
          href="https://github.com/Sourav-sudow"
          className="underline hover:text-amber-600 font-medium transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-source
        </Link>{" "}
        ❤️! By{" "}
        <Link
          href="https://www.linkedin.com/in/sourav-kumar08/"
          className="underline hover:text-amber-600 font-medium transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          @Sourav-sudow
        </Link>{" "}
        &copy; {currentYear}
      </p>
    </footer>
  )
} 