import Icon from "@/components/ui/icon"

const equipment = [
  "Мягкая обшивка стен кузова защищает мебель от царапин",
  "Такелажные ремни надёжно фиксируют крупногабаритные предметы",
  "Специальные стяжки для безопасной перевозки пианино и холодильников",
  "Упаковочные материалы всегда в наличии: стрейч-плёнка, картон, пузырчатая плёнка",
]

const services = [
  { icon: "Home", text: "Квартирные и офисные переезды «под ключ»" },
  { icon: "ShoppingCart", text: "Доставка мебели из магазинов и интернет-магазинов" },
  { icon: "Shield", text: "Перевозка бытовой техники с гарантией сохранности" },
  { icon: "Weight", text: "Транспортировка пианино, сейфов и тяжёлых вещей" },
  { icon: "HardHat", text: "Доставка строительных материалов на объекты" },
  { icon: "Trash2", text: "Вывоз строительного мусора и старой мебели" },
]

const guarantees = [
  { icon: "HandshakeIcon", label: "Без посредников", desc: "Работаем напрямую с клиентами" },
  { icon: "Clock", label: "Приезжаем вовремя", desc: "Соблюдаем договорённости" },
  { icon: "BadgeCheck", label: "Фиксированная цена", desc: "Никаких накруток на месте" },
  { icon: "Heart", label: "Бережный подход", desc: "Каждая вещь под особой заботой" },
]

export function GazelleSection() {
  return (
    <section className="py-20 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Заголовок */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 rounded-full px-4 py-1.5 mb-5">
            <span className="text-orange-400 text-sm font-semibold">Газель от 150 грн</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-orbitron">
            Грузоперевозки в Луганске
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Переезды и перевозка мебели — наша специализация. Мы не просто возим грузы —
            мы помогаем вам сохранить ваши вещи.
          </p>
        </div>

        {/* Оснащение газели */}
        <div className="bg-white/5 border border-orange-500/20 rounded-2xl p-8 mb-12">
          <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-3">
            <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
              <Icon name="Truck" size={18} className="text-orange-500" />
            </div>
            Газели специально оборудованы для перевозки мебели и техники
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {equipment.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <Icon name="CheckCircle2" size={18} className="text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Какие грузы перевозим */}
        <div className="mb-14">
          <h3 className="text-white font-bold text-2xl mb-8 text-center">Какие грузы перевозим</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-5 hover:border-orange-500/40 transition-colors duration-200"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <Icon name={item.icon} size={20} className="text-orange-500" fallback="Package" />
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Гарантии */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {guarantees.map((item, i) => (
            <div key={i} className="bg-orange-500/10 border border-orange-500/25 rounded-xl p-5 text-center">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name={item.icon} size={24} className="text-orange-500" fallback="Star" />
              </div>
              <p className="text-white font-bold text-sm mb-1">{item.label}</p>
              <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
