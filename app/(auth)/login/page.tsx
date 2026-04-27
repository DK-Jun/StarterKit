import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { LoginForm } from "@/components/forms/login-form"

export const metadata: Metadata = {
  title: "로그인",
  robots: { index: false },
}

export default function LoginPage() {
  return (
    <Card>
      <CardHeader className="space-y-4 text-center">
        <Link href="/" className="inline-block font-bold text-lg">
          StarterKit
        </Link>
        <div className="space-y-2">
          <CardTitle>다시 오셨군요</CardTitle>
          <CardDescription>이메일로 로그인하세요</CardDescription>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <LoginForm />

        <div className="relative">
          <Separator className="my-4" />
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 text-center text-xs text-muted-foreground bg-card px-2">
            또는
          </div>
        </div>

        <Button variant="outline" className="w-full">
          Google로 계속하기
        </Button>
      </CardContent>

      <CardFooter className="flex justify-center text-sm">
        <span className="text-muted-foreground">계정이 없으신가요?</span>
        <Link href="/register" className="ml-1 font-medium underline hover:text-foreground">
          회원가입
        </Link>
      </CardFooter>
    </Card>
  )
}
