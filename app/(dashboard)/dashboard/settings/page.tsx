"use client"

import { useState } from "react"
import { Bell, Lock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { toast } from "sonner"

export default function SettingsPage() {
  const [profileData, setProfileData] = useState({ name: "사용자", email: "user@example.com" })
  const [passwordData, setPasswordData] = useState({ password: "", passwordConfirm: "" })
  const [notifications, setNotifications] = useState({ email: true, sms: false })
  const [isLoading, setIsLoading] = useState(false)

  const handleProfileSave = async () => {
    setIsLoading(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 500))
      toast.success("프로필이 저장되었습니다.")
    } catch {
      toast.error("저장에 실패했습니다.")
    } finally {
      setIsLoading(false)
    }
  }

  const handlePasswordChange = async () => {
    if (passwordData.password !== passwordData.passwordConfirm) {
      toast.error("비밀번호가 일치하지 않습니다.")
      return
    }
    if (!passwordData.password) {
      toast.error("비밀번호를 입력해주세요.")
      return
    }

    setIsLoading(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 500))
      setPasswordData({ password: "", passwordConfirm: "" })
      toast.success("비밀번호가 변경되었습니다.")
    } catch {
      toast.error("비밀번호 변경에 실패했습니다.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleNotificationSave = async () => {
    setIsLoading(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 500))
      toast.success("알림 설정이 저장되었습니다.")
    } catch {
      toast.error("저장에 실패했습니다.")
    } finally {
      setIsLoading(false)
    }
  }
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
                value={profileData.name}
                onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">이메일</Label>
              <Input
                id="email"
                type="email"
                placeholder="user@example.com"
                value={profileData.email}
                onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
              />
            </div>
            <Button onClick={handleProfileSave} disabled={isLoading}>
              {isLoading ? "저장 중..." : "저장"}
            </Button>
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
                value={passwordData.password}
                onChange={(e) => setPasswordData({ ...passwordData, password: e.target.value })}
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
                value={passwordData.passwordConfirm}
                onChange={(e) => setPasswordData({ ...passwordData, passwordConfirm: e.target.value })}
              />
            </div>
            <Button onClick={handlePasswordChange} disabled={isLoading}>
              {isLoading ? "변경 중..." : "비밀번호 변경"}
            </Button>
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
              <Checkbox
                id="email-notify"
                checked={notifications.email}
                onCheckedChange={(checked) => setNotifications({ ...notifications, email: !!checked })}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="sms-notify">SMS 알림</Label>
              <Checkbox
                id="sms-notify"
                checked={notifications.sms}
                onCheckedChange={(checked) => setNotifications({ ...notifications, sms: !!checked })}
              />
            </div>
            <Button onClick={handleNotificationSave} disabled={isLoading}>
              {isLoading ? "저장 중..." : "저장"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
