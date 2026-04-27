import type { Metadata } from "next"
import { BookOpen, Code, Zap } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "문서",
  description: "StarterKit 문서 및 가이드",
}

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        {/* 헤더 */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
          >
            ← 홈으로 돌아가기
          </Link>
          <h1 className="text-4xl font-bold tracking-tight mb-4">문서</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            StarterKit을 시작하기 위한 완전한 가이드입니다.
          </p>
        </div>

        {/* 문서 섹션 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* 시작하기 */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Zap className="size-5 text-primary" />
                <CardTitle>시작하기</CardTitle>
              </div>
              <CardDescription>
                StarterKit을 설치하고 실행하세요.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3 text-sm">
                <p className="font-medium">포함 내용:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ 설치 방법</li>
                  <li>✓ 프로젝트 구조</li>
                  <li>✓ 환경 설정</li>
                  <li>✓ 첫 실행</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* 개발 가이드 */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Code className="size-5 text-primary" />
                <CardTitle>개발 가이드</CardTitle>
              </div>
              <CardDescription>
                컴포넌트와 기능을 활용하세요.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3 text-sm">
                <p className="font-medium">포함 내용:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ 컴포넌트 사용법</li>
                  <li>✓ 레이아웃 구조</li>
                  <li>✓ 폼 검증</li>
                  <li>✓ 라우팅</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* API 문서 */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="size-5 text-primary" />
                <CardTitle>API</CardTitle>
              </div>
              <CardDescription>
                API 레퍼런스를 확인하세요.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3 text-sm">
                <p className="font-medium">포함 내용:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ 함수 레퍼런스</li>
                  <li>✓ 타입 정의</li>
                  <li>✓ 상수</li>
                  <li>✓ 유틸리티</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 상세 문서 */}
        <div className="max-w-3xl">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>시작하기</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">1. 설치</h3>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  <code>npm install</code>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">2. 개발 서버 실행</h3>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  <code>npm run dev</code>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">3. 브라우저 열기</h3>
                <p className="text-sm text-muted-foreground">
                  http://localhost:3000 에서 애플리케이션을 확인하세요.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>기술 스택</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold">프론트엔드</p>
                  <ul className="text-muted-foreground space-y-1 mt-2">
                    <li>• Next.js 16</li>
                    <li>• React 19</li>
                    <li>• TypeScript</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">스타일링 & UI</p>
                  <ul className="text-muted-foreground space-y-1 mt-2">
                    <li>• TailwindCSS v4</li>
                    <li>• ShadcnUI v4</li>
                    <li>• Radix UI</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">폼 & 검증</p>
                  <ul className="text-muted-foreground space-y-1 mt-2">
                    <li>• react-hook-form</li>
                    <li>• zod</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">유틸리티</p>
                  <ul className="text-muted-foreground space-y-1 mt-2">
                    <li>• next-themes</li>
                    <li>• lucide-react</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 도움말 */}
        <div className="mt-12 bg-muted/40 p-8 rounded-lg text-center">
          <h3 className="text-lg font-semibold mb-2">더 많은 도움이 필요하신가요?</h3>
          <p className="text-muted-foreground mb-4">
            문제가 있거나 추가 정보가 필요하면 홈페이지로 돌아가세요.
          </p>
          <Button asChild>
            <Link href="/">홈으로 돌아가기</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
