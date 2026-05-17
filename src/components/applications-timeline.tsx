import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Позвоните или напишите",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Опишите задачу — сколько мусора, откуда забрать, нужны ли грузчики. Мы подберём подходящую машину и
            назовём точную стоимость без скрытых доплат.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-orange-400 text-sm">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              Бесплатная консультация
            </div>
            <div className="flex items-center gap-3 text-orange-400 text-sm">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              Расчёт цены на месте или по фото
            </div>
            <div className="flex items-center gap-3 text-orange-400 text-sm">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              Работаем без выходных
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Приедем в удобное время",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Согласуем время и приедем со своей командой. Грузчики аккуратно спустят вещи с этажей и загрузят
            машину — вам ничего делать не нужно.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-orange-400 text-sm">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              Опытные грузчики в команде
            </div>
            <div className="flex items-center gap-3 text-orange-400 text-sm">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              Спуск с любого этажа
            </div>
            <div className="flex items-center gap-3 text-orange-400 text-sm">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              Газель, ЗИЛ или КАМАЗ на выбор
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Забираем и вывозим",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Грузим мусор, строительные отходы, мебель или хлам — и вывозим на утилизацию. После нашей работы
            остаётся чисто. Оплата по факту выполненной работы.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-orange-400 text-sm">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              Строительный мусор, хлам, мебель
            </div>
            <div className="flex items-center gap-3 text-orange-400 text-sm">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              Оплата после выполнения работы
            </div>
            <div className="flex items-center gap-3 text-orange-400 text-sm">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              Оставляем чистоту после себя
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="howwework" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Как мы работаем</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Три простых шага — и ваша территория чиста. Работаем быстро, без лишних формальностей.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}
