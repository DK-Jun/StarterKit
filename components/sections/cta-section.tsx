import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <h2 className="text-3xl md:text-5xl font-bold">
          지금 바로 시작하세요
        </h2>
        <p className="mt-4 text-xl text-primary-foreground/80">
          무료로 시작하고, 확장은 나중에.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/register">무료로 시작하기</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 hover:bg-primary-foreground/10"
            asChild
          >
            <Link href="/dashboard">대시보드 보기</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
