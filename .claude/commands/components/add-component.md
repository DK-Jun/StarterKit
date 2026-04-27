컴포넌트 생성: $ARGUMENTS
컴포넌트 이름과 타입을 입력받아서, 프로젝트 컨벤션에 맞는 shadcn/ui 스타일의 React 컴포넌트를 생성해주세요.

## 인자 형식
- `컴포넌트명`: PascalCase로 입력 (예: Button, CardHeader, LoginForm)
- `--type`: 컴포넌트 타입 (예: ui, form, layout) - 기본값: ui
- `--with-variants`: CVA variants 포함 여부 (기본값: true)

## 생성 규칙
1. **파일 경로**: components/{type}/{컴포넌트명}.tsx
2. **구조**:
   - TypeScript Props 인터페이스 정의
   - CVA (class-variance-authority)를 이용한 variants
   - Tailwind CSS를 이용한 스타일링
   - React.forwardRef 사용 (UI 컴포넌트)
   - 한국어 주석 포함

3. **스타일 가이드**:
   - 2칸 들여쓰기
   - camelCase 함수/변수명
   - PascalCase 컴포넌트명
   - clsx와 tailwind-merge 활용

4. **예시 variants**:
   - Button: primary, secondary, destructive, outline, ghost
   - Card: default, bordered
   - Input: sm, md, lg

생성 후 components/index.ts 파일이 있으면 export 추가도 해주세요.
