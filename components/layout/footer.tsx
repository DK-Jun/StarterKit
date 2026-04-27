import Link from "next/link"
import { GitBranch } from "lucide-react"
import { SITE_NAME } from "@/lib/constants"

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-4 py-12">
        {/* 상단: 로고+소개 / 링크 컬럼들 */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 mb-8">
          {/* 브랜드 */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="font-bold text-lg">
              {SITE_NAME}
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              빠르게 웹 개발을 시작하세요.
            </p>
          </div>

          {/* 제품 링크 */}
          <div>
            <h3 className="font-semibold text-sm mb-3">제품</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/#features" className="hover:text-foreground transition-colors">
                  기능
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-foreground transition-colors">
                  대시보드
                </Link>
              </li>
              <li>
                <Link href="/docs" className="hover:text-foreground transition-colors">
                  문서
                </Link>
              </li>
            </ul>
          </div>

          {/* 기타 링크 */}
          <div>
            <h3 className="font-semibold text-sm mb-3">지원</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/docs" className="hover:text-foreground transition-colors">
                  가이드
                </Link>
              </li>
              <li>
                <Link href="/#features" className="hover:text-foreground transition-colors">
                  기능 소개
                </Link>
              </li>
              <li>
                <Link href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
                  GitHub
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* 하단: 저작권 + SNS */}
        <div className="border-t pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <span>© 2025 {SITE_NAME}. All rights reserved.</span>
          <div className="flex gap-4">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition-colors"
            >
              <GitBranch className="size-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
