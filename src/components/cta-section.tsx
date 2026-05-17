import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-orange-500/10 via-yellow-500/10 to-orange-500/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="slide-up">
          <h2 className="text-5xl font-bold text-foreground mb-6 font-sans text-balance">Нужно вывезти мусор?</h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
            Позвоните нам — расскажите задачу, и мы подберём машину нужного размера с грузчиками. Работаем быстро,
            по всему Луганску, без выходных.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-orange-500 text-white hover:bg-orange-600 pulse-button text-lg px-8 py-4"
            >
              Заказать вывоз
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white text-lg px-8 py-4 bg-transparent"
            >
              Узнать стоимость
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
