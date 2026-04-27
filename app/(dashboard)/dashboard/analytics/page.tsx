import type { Metadata } from "next"
import { BarChart3, TrendingUp, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendBadge } from "@/components/ui/trend-badge"

export const metadata: Metadata = {
  title: "분석",
}

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">분석</h1>
        <p className="text-muted-foreground">
          실시간 분석 데이터를 확인하세요.
        </p>
      </div>

      {/* 분석 차트 카드들 */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              방문자 수
            </CardTitle>
            <Users className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">45,231</p>
            <p className="text-xs text-muted-foreground mt-1">
              <TrendBadge value="+20.1%" /> 지난 달 대비
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              페이지 뷰
            </CardTitle>
            <BarChart3 className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">89,421</p>
            <p className="text-xs text-muted-foreground mt-1">
              <TrendBadge value="+15.3%" /> 지난 주 대비
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              전환율
            </CardTitle>
            <TrendingUp className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">3.24%</p>
            <p className="text-xs text-muted-foreground mt-1">
              <TrendBadge value="-4.3%" positive={false} /> 지난 달 대비
            </p>
          </CardContent>
        </Card>
      </div>

      {/* 상세 분석 섹션 */}
      <Card>
        <CardHeader>
          <CardTitle>일일 방문자 추이</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center bg-muted/40 rounded-lg">
            <p className="text-muted-foreground">차트 영역 (향후 구현 예정)</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
