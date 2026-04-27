"use client"

import Link from "next/link"
import { Menu, LogOut, Settings, User } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme/theme-toggle"
import { SidebarNav } from "./sidebar-nav"
import { SITE_NAME } from "@/lib/constants"

export function DashboardHeader() {
  return (
    <header className="flex h-16 items-center gap-4 border-b bg-background px-6 shrink-0">
      {/* 모바일 사이드바 트리거 */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="size-5" />
            <span className="sr-only">사이드바 열기</span>
          </Button>
        </SheetTrigger>

        <SheetContent side="left" className="w-64 p-0">
          <SheetHeader className="border-b px-6 py-4">
            <SheetClose asChild>
              <Link href="/" className="flex items-center gap-2 font-bold text-lg">
                {SITE_NAME}
              </Link>
            </SheetClose>
          </SheetHeader>
          <SidebarNav />
        </SheetContent>
      </Sheet>

      {/* 스페이서 */}
      <div className="flex-1" />

      {/* 우측 */}
      <ThemeToggle />

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative size-9 rounded-full p-0">
            <Avatar className="size-9">
              <AvatarFallback>사</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>
            <User className="size-4 mr-2" />
            프로필
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="size-4 mr-2" />
            설정
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-destructive focus:text-destructive">
            <LogOut className="size-4 mr-2" />
            로그아웃
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  )
}
