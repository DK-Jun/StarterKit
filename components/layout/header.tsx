import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme/theme-toggle"
import { MobileNav } from "./mobile-nav"
import { NAV_LINKS, SITE_NAME } from "@/lib/constants"

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* 로고 */}
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          {SITE_NAME}
        </Link>

        {/* 데스크탑 네비 */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* 우측 액션 */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" asChild className="hidden md:inline-flex">
            <Link href="/login">로그인</Link>
          </Button>
          <Button asChild className="hidden md:inline-flex">
            <Link href="/register">시작하기</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
