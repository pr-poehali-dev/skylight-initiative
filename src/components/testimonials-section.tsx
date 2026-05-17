import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Александр К.",
    role: "Ремонт квартиры, ул. Советская",
    initials: "АК",
    content:
      "Заказывал КамАЗ для вывоза строительного мусора после ремонта. Приехали вовремя, грузчики быстро всё загрузили — не пришлось даже выходить из квартиры. Цена адекватная.",
  },
  {
    name: "Ирина М.",
    role: "Расчистка гаража",
    initials: "ИМ",
    content:
      "Накопилось хлама за 10 лет. Позвонила, объяснила ситуацию — сразу назвали цену и приехали на следующий день. Гараж теперь пустой, очень довольна!",
  },
  {
    name: "Сергей Д.",
    role: "Вывоз старой мебели",
    initials: "СД",
    content:
      "Нужно было выкинуть диван, шкаф и холодильник. Подъехала Газель с двумя грузчиками — всё забрали за полчаса. Удобно и быстро, буду обращаться ещё.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Отзывы клиентов</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Жители Луганска уже доверяют нам расчистку своих объектов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback className="bg-orange-500 text-white font-bold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-orange-500">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
