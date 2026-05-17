import Icon from "@/components/ui/icon"

const advantages = [
  { icon: "Clock", text: "Работаем круглосуточно" },
  { icon: "Zap", text: "Подача машины в течение часа" },
  { icon: "CreditCard", text: "Наличный и безналичный расчёт (без НДС и с НДС)" },
  { icon: "Star", text: "Для постоянных клиентов — особые условия" },
  { icon: "Users", text: "Грузчики и погрузочная техника" },
  { icon: "Camera", text: "Оценим стоимость по фото и видео" },
]

const fleet = [
  { icon: "Container", label: "Контейнеры", desc: "8, 10, 20, 27, 36 м³ — большое количество" },
  { icon: "Truck", label: "Самосвалы", desc: "12–32 м³. ЗИЛы, КАМАЗы" },
  { icon: "Construction", label: "Экскаватор-погрузчик", desc: "Для сложных объектов" },
  { icon: "Package", label: "Газель", desc: "До 2 т — в мешках, с погрузкой" },
]

export function AdvantagesSection() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Преимущества */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-orbitron">Почему выбирают нас</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Вывозим мусор в пределах города и за ним — быстро, честно, с документами
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {advantages.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-white/5 border border-orange-500/20 rounded-xl p-5 hover:border-orange-500/50 transition-colors duration-200"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                <Icon name={item.icon} size={20} className="text-orange-500" fallback="CheckCircle" />
              </div>
              <p className="text-white text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Автопарк */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-4xl font-bold text-white mb-3 font-orbitron">Наш автопарк</h3>
          <p className="text-gray-400">Личная техника — не перекупщики</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {fleet.map((item, i) => (
            <div
              key={i}
              className="bg-white/5 border border-orange-500/20 rounded-xl p-6 text-center hover:border-orange-500/50 transition-colors duration-200"
            >
              <div className="w-14 h-14 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={item.icon} size={28} className="text-orange-500" fallback="Truck" />
              </div>
              <h4 className="text-white font-bold text-lg mb-2">{item.label}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Доп. услуги */}
        <div className="mt-12 p-6 bg-orange-500/10 border border-orange-500/30 rounded-2xl text-center">
          <p className="text-white text-base md:text-lg leading-relaxed">
            Также выполняем <span className="text-orange-400 font-semibold">разборку мебели</span>,{" "}
            <span className="text-orange-400 font-semibold">снос обваленных домов</span> и{" "}
            <span className="text-orange-400 font-semibold">дополнительные строительные работы</span>.
            Предоставляем все необходимые документы.
          </p>
        </div>

      </div>
    </section>
  )
}
