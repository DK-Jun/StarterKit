import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RegisterForm } from "@/components/forms/register-form"

export const metadata: Metadata = {
  title: "회원가입",
  robots: { index: false },
}

export default function RegisterPage() {
  return (
    <Card>
      <CardHeader className="space-y-4 text-center">
        <Link href="/" className="inline-block font-bold text-lg">
          StarterKit
        </Link>
        <div className="space-y-2">
          <CardTitle>계정 만들기</CardTitle>
          <CardDescription>아래 정보를 입력해주세요</CardDescription>
        </div>
      </CardHeader>

      <CardContent>
        <RegisterForm />
      </CardContent>

      <CardFooter className="flex justify-center text-sm">
        <span className="text-muted-foreground">이미 계정이 있으신가요?</span>
        <Link href="/login" className="ml-1 font-medium underline hover:text-foreground">
          로그인
        </Link>
      </CardFooter>
    </Card>
  )
}
