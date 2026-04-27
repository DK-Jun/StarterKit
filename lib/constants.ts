import { LayoutDashboard, BarChart3, Users, Settings, Zap, Shield, Smartphone, Moon, Layers, Rocket } from "lucide-react"

export const SITE_NAME = "StarterKit"
export const SITE_DESCRIPTION = "Next.js 16 + TailwindCSS v4 + ShadcnUI v4 모던 스타터킷"
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"

// 마케팅 네비게이션
export const NAV_LINKS = [
  { label: "기능", href: "/#features" },
  { label: "대시보드", href: "/dashboard" },
] as const

// 대시보드 사이드바
export const SIDEBAR_LINKS = [
  { label: "개요", href: "/dashboard", icon: LayoutDashboard },
  { label: "분석", href: "/dashboard/analytics", icon: BarChart3 },
  { label: "사용자", href: "/dashboard/users", icon: Users },
  { label: "설정", href: "/dashboard/settings", icon: Settings },
] as const

// 실제 존재하는 대시보드 경로
export const DASHBOARD_ROUTES = {
  MAIN: "/dashboard",
  ANALYTICS: "/dashboard/analytics",
  USERS: "/dashboard/users",
  SETTINGS: "/dashboard/settings",
} as const

// 랜딩 Features 데이터 (6개)
export const FEATURES = [
  {
    title: "빠른 성능",
    description: "App Router + RSC로 최적화된 로딩",
    icon: Zap,
  },
  {
    title: "타입 안전",
    description: "TypeScript로 런타임 오류 사전 방지",
    icon: Shield,
  },
  {
    title: "반응형",
    description: "모바일부터 데스크탑까지 완벽 대응",
    icon: Smartphone,
  },
  {
    title: "다크모드",
    description: "시스템 테마 감지 및 수동 전환 지원",
    icon: Moon,
  },
  {
    title: "컴포넌트",
    description: "ShadcnUI v4 + Radix UI 접근성 보장",
    icon: Layers,
  },
  {
    title: "즉시 배포",
    description: "Vercel 최적화 설정으로 원클릭 배포",
    icon: Rocket,
  },
] as const

export type SidebarLink = (typeof SIDEBAR_LINKS)[number]
export type Feature = (typeof FEATURES)[number]
