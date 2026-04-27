---
name: Recurring Issues
description: 이 프로젝트에서 반복 발견되는 코드 이슈 및 패턴
type: feedback
---

## ESLint 에러 (현재 미수정)

1. `dashboard-header.tsx` — `<a href="/">` 사용 (`@next/next/no-html-link-for-pages` 위반). `<Link>` 컴포넌트로 교체 필요.
2. `theme-toggle.tsx`, `use-mobile.ts` — `useEffect` 내 `setState` 직접 호출 (`react-hooks/set-state-in-effect` 경고). 패턴 자체는 기능적으로 동작하지만 React 19 엄격 모드에서 cascading render 위험.

## 코드 중복 패턴

- `<Icon ... />` 동적 렌더링: `Icons[name as keyof typeof Icons] as React.ElementType` 패턴이 `sidebar-nav.tsx`와 `features-section.tsx`에서 중복 사용. 공통 유틸 함수 추출 권장.
- `catch (error) {}` 블록에서 `error` 변수 미사용 (login-form, register-form). `catch (_error)` 또는 `catch` 처리 강화 필요.
- 대시보드 페이지들(dashboard, analytics)에서 `<Badge>` 색상 하드코딩 패턴 반복 (`text-emerald-600 bg-emerald-50 dark:bg-emerald-950`). 재사용 컴포넌트 추출 권장.
- Sidebar와 DashboardHeader에서 유저 드롭다운 메뉴 구조 중복.

## 보안 주의사항

- `settings/page.tsx`의 알림 설정에서 네이티브 `<input type="checkbox">` 사용 (ShadcnUI `Checkbox` 컴포넌트와 혼용). 일관성 위반.
- 폼 처리에서 실제 인증 로직 없음 (demo stub). 향후 서버 액션 또는 API 라우트 연결 시 CSRF 방어 고려 필요.

**Why:** 첫 전체 리뷰(2026-04-27)에서 발견된 패턴.
**How to apply:** 후속 리뷰 시 동일 이슈가 해소되었는지 먼저 확인.
