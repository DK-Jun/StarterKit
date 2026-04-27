"use client"

import { LogOut, Settings, User } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface UserDropdownProps {
  variant?: "button" | "sidebar"
}

export function UserDropdown({ variant = "button" }: UserDropdownProps) {
  if (variant === "sidebar") {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex w-full items-center gap-3 rounded-md px-2 py-2 hover:bg-sidebar-accent transition-colors text-left">
            <Avatar className="size-8">
              <AvatarFallback>사</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="truncate font-medium text-sm text-sidebar-foreground">
                사용자
              </p>
              <p className="truncate text-xs text-sidebar-foreground/60">
                user@example.com
              </p>
            </div>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="top" align="end" className="w-52">
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
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="relative size-9 rounded-full p-0 hover:bg-accent transition-colors">
          <Avatar className="size-9">
            <AvatarFallback>사</AvatarFallback>
          </Avatar>
        </button>
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
  )
}
