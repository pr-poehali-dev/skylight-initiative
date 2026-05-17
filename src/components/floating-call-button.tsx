import { Phone } from "lucide-react"

const PHONES = [
  { label: "+7 959 597-26-94", href: "tel:+79595972694" },
  { label: "+7 959 149-13-87", href: "tel:+79591491387" },
]

export function FloatingCallButton() {
  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-2">
      {PHONES.map((phone) => (
        <a
          key={phone.href}
          href={phone.href}
          className="flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full shadow-lg transition-all duration-200 px-5 py-3 text-sm"
        >
          <Phone size={18} />
          {phone.label}
        </a>
      ))}
    </div>
  )
}
