import { coreValues } from '../data/aboutData'
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll'

export function CoreValues() {
  const ref = useFadeInOnScroll<HTMLElement>()

  return (
    <section ref={ref} className="reveal-right py-section-gap px-container-padding max-w-7xl mx-auto">
      <h2 className="font-headline-md text-headline-md text-center mb-stack-lg">Giá Trị Cốt Lõi</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-outline-variant pt-stack-lg">
        {coreValues.map((value) => (
          <div key={value.id} className="text-center md:text-left">
            <span className="material-symbols-outlined text-[40px] text-primary mb-stack-md">{value.icon}</span>
            <h4 className="font-label-caps text-label-caps mb-stack-sm">{value.title}</h4>
            <p className="font-body-sm text-on-surface-variant">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
