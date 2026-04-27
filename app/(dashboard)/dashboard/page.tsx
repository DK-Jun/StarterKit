import type { Metadata } from "next"
import {
  Activity,
  CreditCard,
  DollarSign,
  FileText,
  HelpCircle,
  UserPlus,
  Users,
} from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendBadge } from "@/components/ui/trend-badge"

export const metadata: Metadata = {
  title: "대시보드",
}

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">대시보드</h1>
        <p className="text-muted-foreground">
          오늘의 현황을 확인하세요.
        </p>
      </div>

      {/* 요약 카드 4개 */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              총 사용자
            </CardTitle>
            <Users className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">12,345</p>
            <p className="text-xs text-muted-foreground mt-1">
              <TrendBadge value="+12%" /> 지난달 대비
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              월 매출
            </CardTitle>
            <DollarSign className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">₩2,350,000</p>
            <p className="text-xs text-muted-foreground mt-1">
              <TrendBadge value="+8.2%" /> 지난달 대비
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              이번 달 신규 가입
            </CardTitle>
            <UserPlus className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">573</p>
            <p className="text-xs text-muted-foreground mt-1">
              <TrendBadge value="+3.1%" /> 지난 주 대비
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              활성 사용자
            </CardTitle>
            <Activity className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">89</p>
            <p className="text-xs text-muted-foreground mt-1">
              <TrendBadge value="-2.5%" positive={false} /> 지난 주 대비
            </p>
          </CardContent>
        </Card>
      </div>

      {/* 하단 2열 */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-7">
        {/* 최근 활동 */}
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>최근 활동</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { id: 1, name: "김철수", action: "계정 생성", time: "2시간 전" },
                { id: 2, name: "이영미", action: "프로필 업데이트", time: "4시간 전" },
                { id: 3, name: "박민준", action: "구독 시작", time: "1일 전" },
                { id: 4, name: "정수진", action: "결제 완료", time: "2일 전" },
                { id: 5, name: "이한솔", action: "피드백 제출", time: "3일 전" },
              ].map((activity) => (
                <div key={activity.id} className="flex gap-3 items-start">
                  <Avatar className="size-8 shrink-0">
                    <AvatarFallback>
                      {activity.name.slice(0, 1)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{activity.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {activity.action}
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground shrink-0">
                    {activity.time}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 빠른 작업 */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>빠른 작업</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                className="h-20 flex-col gap-2"
              >
                <UserPlus className="size-5" />
                <span className="text-xs text-center">사용자 초대</span>
              </Button>
              <Button
                variant="outline"
                className="h-20 flex-col gap-2"
              >
                <FileText className="size-5" />
                <span className="text-xs text-center">보고서 생성</span>
              </Button>
              <Button
                variant="outline"
                className="h-20 flex-col gap-2"
              >
                <CreditCard className="size-5" />
                <span className="text-xs text-center">결제 설정</span>
              </Button>
              <Button
                variant="outline"
                className="h-20 flex-col gap-2"
              >
                <HelpCircle className="size-5" />
                <span className="text-xs text-center">지원 요청</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
