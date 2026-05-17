import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-orange-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-orbitron text-2xl font-bold text-white mb-4">
              Вывоз<span className="text-orange-500">Луганск</span>
            </h2>
            <p className="font-space-mono text-gray-300 mb-6 max-w-md">
              Вывоз строительного мусора, старой мебели и хлама в Луганске. Газель, ЗИЛ, КАМАЗ. Грузчики в комплекте.
            </p>
            <div className="flex flex-col space-y-2">
              <a href="tel:+" className="flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors duration-200">
                <Phone size={16} />
                <span className="font-space-mono text-sm">Позвонить нам</span>
              </a>
              <a href="mailto:" className="flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors duration-200">
                <Mail size={16} />
                <span className="font-space-mono text-sm">Написать на почту</span>
              </a>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin size={16} />
                <span className="font-space-mono text-sm">Луганск</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="font-space-mono text-gray-400 hover:text-orange-500 transition-colors duration-200"
                >
                  Строительный мусор
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="font-space-mono text-gray-400 hover:text-orange-500 transition-colors duration-200"
                >
                  Старая мебель
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="font-space-mono text-gray-400 hover:text-orange-500 transition-colors duration-200"
                >
                  Вывоз с грузчиками
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="font-space-mono text-gray-400 hover:text-orange-500 transition-colors duration-200"
                >
                  Доставка песка и щебня
                </a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li>
                <a href="#howwework" className="font-space-mono text-gray-400 hover:text-orange-500 transition-colors duration-200">
                  Как мы работаем
                </a>
              </li>
              <li>
                <a href="#faq" className="font-space-mono text-gray-400 hover:text-orange-500 transition-colors duration-200">
                  Частые вопросы
                </a>
              </li>
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-orange-500 transition-colors duration-200">
                  Контакты
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-orange-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-space-mono text-gray-400 text-sm">© 2025 ВывозЛуганск. Все права защищены.</p>
            <p className="font-space-mono text-gray-500 text-sm mt-4 md:mt-0">Луганск — работаем без выходных</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
