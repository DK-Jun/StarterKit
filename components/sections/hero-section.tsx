import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="py-24 md:py-32 lg:py-40">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <Badge variant="outline" className="mb-6">
          ✨ Next.js 16 + TailwindCSS v4
        </Badge>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          빠르게 시작하는
          <span className="text-primary block">모던 웹 개발</span>
        </h1>

        <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
          복잡한 초기 설정 없이, 프로덕션 레디 스타터킷으로 바로 기능 개발을
          시작하세요.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/dashboard">
              대시보드 보기<ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/login">시작하기</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
