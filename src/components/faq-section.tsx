import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Какой мусор вы вывозите?",
      answer:
        "Вывозим строительный мусор (бетон, кирпич, плитка, штукатурка), бытовой мусор, старую мебель (диваны, шкафы, кровати), бытовую технику (холодильники, стиралки), хлам из гаражей, дач и квартир, а также грунт. Работаем с мешками и насыпью.",
    },
    {
      question: "Сколько стоит вывоз?",
      answer:
        "Цена зависит от объёма и типа мусора, а также от необходимости грузчиков. Позвоните нам — назовём точную стоимость после описания задачи. Без скрытых доплат.",
    },
    {
      question: "Есть ли у вас грузчики?",
      answer:
        "Да, предоставляем услуги грузчиков: спуск мусора с любого этажа, погрузка в машину. Это удобно, если вы не можете самостоятельно вынести вещи на улицу.",
    },
    {
      question: "Как быстро приедете?",
      answer:
        "Стараемся приезжать в день обращения или на следующий день — в зависимости от загруженности. Уточните при звонке, и мы согласуем удобное для вас время.",
    },
    {
      question: "Вы привозите песок и щебень?",
      answer:
        "Да, помимо вывоза мусора мы занимаемся доставкой строительных материалов — песка и щебня. Уточните нужный объём при заказе.",
    },
    {
      question: "Работаете в выходные?",
      answer:
        "Да, работаем без выходных. Звоните в любой день — поможем согласовать удобное время для вывоза.",
    },
  ]

  return (
    <section id="faq" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на популярные вопросы о вывозе мусора и работе нашей службы в Луганске.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-orange-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-orange-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
