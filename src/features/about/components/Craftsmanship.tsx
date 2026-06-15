import { craftItems } from '../data/aboutData'
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll'

export function Craftsmanship() {
  const ref = useFadeInOnScroll<HTMLElement>()

  return (
    <section ref={ref} className="reveal-left bg-surface-container-low py-section-gap">
      <div className="px-container-padding max-w-7xl mx-auto">
        <div className="mb-section-gap text-center max-w-2xl mx-auto">
          <h2 className="font-headline-md text-[40px] mb-stack-md">Nghệ Thuật Thủ Công</h2>
          <p className="font-body-md text-on-secondary-container">
            Sự tỉ mỉ trong từng chi tiết là tôn chỉ duy nhất giúp Aura de Soie tạo nên những tuyệt tác vượt thời gian.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
          {craftItems.map((item, index) => (
            <div key={item.id} className={`group ${index > 0 ? 'mt-stack-lg md:mt-0' : ''}`}>
              <div className="overflow-hidden mb-stack-md">
                <img
                  alt={item.imageAlt}
                  className="w-full aspect-[16/9] object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                  src={item.image}
                />
              </div>
              <h3 className="font-headline-sm text-headline-sm mb-stack-sm uppercase tracking-wider">{item.title}</h3>
              <p className="font-body-sm text-on-surface-variant max-w-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
