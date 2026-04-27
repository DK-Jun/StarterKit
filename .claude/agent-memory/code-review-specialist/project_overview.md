---
name: Project Overview
description: claude-nextjs-starters 프로젝트 기술 스택 및 구조 요약
type: project
---

Next.js 16.2.4 + React 19.2.4 + TailwindCSS v4 + ShadcnUI v4 스타터킷.

**기술 스택**
- Next.js 16 App Router (route groups: `(auth)`, `(dashboard)`, `(marketing)`)
- React 19, TypeScript strict mode
- TailwindCSS v4 (`@import "tailwindcss"` 방식, `@theme inline` 블록 사용)
- ShadcnUI v4 (`radix-nova` 스타일, `radix-ui` 직접 의존)
- Zod v4, react-hook-form v7, @hookform/resolvers v5
- next-themes v0.4.6, sonner v2, lucide-react v1.11

**파일 구조 규칙**
- `app/` — Next.js App Router 페이지 및 레이아웃
- `components/forms/`, `components/layout/`, `components/sections/`, `components/theme/`, `components/ui/`
- `lib/` — utils.ts, constants.ts, validations.ts
- `hooks/` — use-mobile.ts

**Why:** 초기 설정 없이 즉시 기능 개발 가능한 스타터킷 목적.
**How to apply:** 리뷰 시 이 스택 버전 기준으로 API 호환성 판단 (특히 Next.js 16, Zod v4 breaking changes).
