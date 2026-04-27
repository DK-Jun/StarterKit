import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 py-32 text-center px-4">
      <p className="text-[120px] font-black leading-none text-muted-foreground/10 select-none">
        404
      </p>
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">페이지를 찾을 수 없습니다</h1>
        <p className="text-muted-foreground">
          요청하신 페이지가 존재하지 않거나 이동되었습니다.
        </p>
      </div>
      <Button asChild>
        <Link href="/">
          <ArrowLeft className="size-4 mr-2" />
          홈으로 돌아가기
        </Link>
      </Button>
    </div>
  )
}
