"use client"

import { Menu } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet"
import { NAV_LINKS, SITE_NAME } from "@/lib/constants"

export function MobileNav() {
  return (
    <Sheet>
      <Button variant="ghost" size="icon" asChild className="md:hidden">
        <SheetTrigger asChild>
          <button className="md:hidden">
            <Menu className="size-5" />
            <span className="sr-only">메뉴 열기</span>
          </button>
        </SheetTrigger>
      </Button>

      <SheetContent side="left" className="w-72 p-0">
        <SheetHeader className="border-b px-6 py-4">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg">
            <span>{SITE_NAME}</span>
          </Link>
        </SheetHeader>

        <nav className="space-y-1 px-3 py-4">
          {NAV_LINKS.map((link) => (
            <SheetClose key={link.href} asChild>
              <Link
                href={link.href}
                className="block rounded-lg px-3 py-2 text-sm text-foreground hover:bg-accent transition-colors"
              >
                {link.label}
              </Link>
            </SheetClose>
          ))}
        </nav>

        <div className="border-t space-y-2 p-4">
          <Button variant="ghost" className="w-full justify-start" asChild>
            <SheetClose asChild>
              <Link href="/login">로그인</Link>
            </SheetClose>
          </Button>
          <Button className="w-full" asChild>
            <SheetClose asChild>
              <Link href="/register">시작하기</Link>
            </SheetClose>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
