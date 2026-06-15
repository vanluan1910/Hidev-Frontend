import { useState } from 'react'
import type { AccordionSection } from '../types/productDetail'

export function ProductAccordion({ sections }: { sections: AccordionSection[] }) {
  const [openId, setOpenId] = useState<string | null>(null)

  function toggle(id: string) {
    setOpenId((current) => (current === id ? null : id))
  }

  return (
    <div className="mt-stack-lg border-t border-outline-variant">
      {sections.map((section) => {
        const isOpen = openId === section.id
        return (
          <div key={section.id} className="border-b border-outline-variant">
            <button
              type="button"
              className="w-full py-6 flex justify-between items-center group"
              onClick={() => toggle(section.id)}
              aria-expanded={isOpen}
            >
              <span className="font-label-caps text-label-caps">{section.title}</span>
              <span
                className="material-symbols-outlined text-secondary group-hover:text-primary transition-transform"
                style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
              >
                expand_more
              </span>
            </button>
            {isOpen ? (
              <div className="pb-6 font-body-sm text-secondary space-y-2">
                {section.body.map((line, index) => (
                  <p key={index}>• {line}</p>
                ))}
              </div>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}
