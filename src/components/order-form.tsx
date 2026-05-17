import { useState } from "react"
import Icon from "@/components/ui/icon"

const SERVICES = [
  "Квартирный переезд",
  "Офисный переезд",
  "Вывоз строительного мусора",
  "Вывоз старой мебели",
  "Доставка мебели",
  "Перевозка бытовой техники",
  "Транспортировка пианино / сейфа",
  "Доставка стройматериалов",
  "Газель (грузоперевозка)",
  "Другое",
]

const API_URL = "https://functions.poehali.dev/fbe4becf-527c-4a5b-ab4b-7fb64d5a5ea2"

export function OrderForm() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [service, setService] = useState("")
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")
    if (!phone) { setError("Укажите номер телефона"); return }
    setLoading(true)
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, service }),
      })
      if (res.ok) {
        setSent(true)
      } else {
        setError("Ошибка отправки. Попробуйте ещё раз.")
      }
    } catch {
      setError("Нет соединения. Попробуйте ещё раз.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="order" className="py-20 bg-zinc-900">
      <div className="max-w-2xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 font-orbitron">
            Оставить заявку
          </h2>
          <p className="text-gray-400">Перезвоним в течение 15 минут и уточним детали</p>
        </div>

        <div className="bg-white/5 border border-orange-500/25 rounded-2xl p-8">
          {sent ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="CheckCircle2" size={36} className="text-orange-500" />
              </div>
              <h3 className="text-white text-2xl font-bold mb-2">Заявка принята!</h3>
              <p className="text-gray-400">Мы перезвоним вам в ближайшее время.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="block text-gray-400 text-sm mb-2">Ваше имя</label>
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Как к вам обращаться?"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Телефон <span className="text-orange-500">*</span></label>
                <input
                  type="tel"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  placeholder="+7 (___) ___-__-__"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Тип услуги</label>
                <select
                  value={service}
                  onChange={e => setService(e.target.value)}
                  className="w-full bg-zinc-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors appearance-none cursor-pointer"
                >
                  <option value="">— Выберите услугу —</option>
                  {SERVICES.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              {error && (
                <p className="text-red-400 text-sm">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white font-bold rounded-xl py-4 text-lg transition-colors duration-200 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <Icon name="Loader2" size={20} className="animate-spin" />
                ) : (
                  <Icon name="Send" size={20} />
                )}
                {loading ? "Отправляем..." : "Отправить заявку"}
              </button>

              <p className="text-gray-500 text-xs text-center">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
