import Link from "next/link"
import { SidebarNav } from "./sidebar-nav"
import { UserDropdown } from "./user-dropdown"
import { SITE_NAME } from "@/lib/constants"

export function Sidebar() {
  return (
    <aside className="flex h-screen w-64 flex-col border-r bg-sidebar shrink-0">
      {/* 헤더 */}
      <div className="flex h-16 items-center border-b px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          {SITE_NAME}
        </Link>
      </div>

      {/* 네비게이션 */}
      <SidebarNav />

      {/* 유저 영역 */}
      <div className="border-t p-3">
        <UserDropdown variant="sidebar" />
      </div>
    </aside>
  )
}
