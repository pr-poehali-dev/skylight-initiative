import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

const features = [
  {
    title: "Строительный мусор",
    description: "Вывоз строительного мусора, отходов ремонта, бетона, кирпича — в мешках или насыпью.",
    icon: "HardHat",
    badge: "Строительство",
  },
  {
    title: "Старая мебель и хлам",
    description: "Заберём диван, холодильник, шкаф, хлам из гаража или дачи — быстро и без лишних вопросов.",
    icon: "Sofa",
    badge: "Мебель",
  },
  {
    title: "Грузчики в комплекте",
    description: "Спуск с любого этажа, погрузка в машину — работаем быстро и аккуратно.",
    icon: "Users",
    badge: "Грузчики",
  },
  {
    title: "Газель, ЗИЛ, КАМАЗ",
    description: "Подберём машину нужного объёма под ваши задачи — от небольшого вывоза до крупного объёма.",
    icon: "Truck",
    badge: "Транспорт",
  },
  {
    title: "Доставка песка и щебня",
    description: "Привезём строительные материалы — песок, щебень — в нужном количестве прямо на объект.",
    icon: "Package",
    badge: "Материалы",
  },
  {
    title: "Работаем по Луганску",
    description: "Обслуживаем квартиры, офисы, гаражи, дачи и строительные объекты по всему Луганску.",
    icon: "MapPin",
    badge: "Луганск",
  },
]

export function FeaturesSection() {
  return (
    <section id="services" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Наши услуги</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Вывоз любого мусора и отходов — подберём машину и команду под вашу задачу
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Icon name={feature.icon} size={32} className="text-orange-500" fallback="Package" />
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}