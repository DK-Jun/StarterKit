import type { Metadata } from "next"
import { Mail, Phone } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "사용자",
}

const users = [
  {
    id: 1,
    name: "김철수",
    email: "kim@example.com",
    phone: "010-1234-5678",
    status: "활성",
  },
  {
    id: 2,
    name: "이영미",
    email: "lee@example.com",
    phone: "010-2345-6789",
    status: "활성",
  },
  {
    id: 3,
    name: "박민준",
    email: "park@example.com",
    phone: "010-3456-7890",
    status: "대기",
  },
  {
    id: 4,
    name: "정수진",
    email: "jung@example.com",
    phone: "010-4567-8901",
    status: "활성",
  },
  {
    id: 5,
    name: "이한솔",
    email: "han@example.com",
    phone: "010-5678-9012",
    status: "비활성",
  },
]

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">사용자</h1>
          <p className="text-muted-foreground">
            전체 사용자를 관리하세요.
          </p>
        </div>
        <Button>새 사용자 추가</Button>
      </div>

      {/* 사용자 목록 */}
      <Card>
        <CardHeader>
          <CardTitle>사용자 목록</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {users.map((user, idx) => (
              <div key={user.id}>
                {idx > 0 && <Separator className="my-4" />}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarFallback>
                        {user.name.slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <p className="font-medium">{user.name}</p>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Mail className="size-3" />
                          {user.email}
                        </div>
                        <div className="flex items-center gap-1">
                          <Phone className="size-3" />
                          {user.phone}
                        </div>
                      </div>
                    </div>
                  </div>
                  <Badge
                    variant={user.status === "활성" ? "default" : "secondary"}
                  >
                    {user.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
