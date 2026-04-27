import { Card, CardContent } from "@/components/ui/card"
import { FEATURES } from "@/lib/constants"

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            모든 것이 준비되어 있습니다
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            프로덕션 레디한 컴포넌트와 레이아웃으로 즉시 개발을 시작하세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature) => {
            const Icon = feature.icon
            return (
              <Card key={feature.title}>
                <CardContent className="p-6">
                  <div className="mb-4 size-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
