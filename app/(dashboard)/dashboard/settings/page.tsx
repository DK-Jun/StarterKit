import type { Metadata } from "next"
import { Bell, Lock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "설정",
}

export default function SettingsPage() {
  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">설정</h1>
        <p className="text-muted-foreground">
          계정 설정을 관리하세요.
        </p>
      </div>

      {/* 프로필 설정 */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <User className="size-5" />
            <div>
              <CardTitle>프로필</CardTitle>
              <CardDescription>
                프로필 정보를 수정할 수 있습니다.
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <Separator />
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">이름</Label>
              <Input
                id="name"
                placeholder="홍길동"
                defaultValue="사용자"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">이메일</Label>
              <Input
                id="email"
                type="email"
                placeholder="user@example.com"
                defaultValue="user@example.com"
              />
            </div>
            <Button>저장</Button>
          </div>
        </CardContent>
      </Card>

      {/* 보안 설정 */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Lock className="size-5" />
            <div>
              <CardTitle>보안</CardTitle>
              <CardDescription>
                보안 설정을 관리하세요.
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <Separator />
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">새 비밀번호</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password-confirm">
                비밀번호 확인
              </Label>
              <Input
                id="password-confirm"
                type="password"
                placeholder="••••••••"
              />
            </div>
            <Button>비밀번호 변경</Button>
          </div>
        </CardContent>
      </Card>

      {/* 알림 설정 */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Bell className="size-5" />
            <div>
              <CardTitle>알림</CardTitle>
              <CardDescription>
                알림 설정을 관리하세요.
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <Separator />
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="email-notify">이메일 알림</Label>
              <input
                id="email-notify"
                type="checkbox"
                defaultChecked
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="sms-notify">SMS 알림</Label>
              <input
                id="sms-notify"
                type="checkbox"
              />
            </div>
            <Button>저장</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
