import { storyImage, storyParagraphs } from '../data/aboutData'
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll'

export function BrandStory() {
  const textRef = useFadeInOnScroll<HTMLDivElement>()
  const imageRef = useFadeInOnScroll<HTMLDivElement>()

  return (
    <section className="py-section-gap px-container-padding max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-stack-lg items-center">
      <div ref={textRef} className="reveal-left lg:col-span-5 order-2 lg:order-1">
        <h2 className="font-headline-md text-headline-md mb-stack-lg text-primary">Câu Chuyện Thương Hiệu</h2>
        <div className="space-y-stack-md text-on-surface-variant font-body-lg">
          {storyParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-stack-lg pt-stack-md border-t border-outline-variant w-1/3">
          <span className="font-label-caps text-label-caps text-secondary italic">Est. in Sài Gòn</span>
        </div>
      </div>
      <div ref={imageRef} className="reveal-right lg:col-span-7 order-1 lg:order-2 px-stack-lg">
        <div className="relative aspect-[4/5] bg-surface-container overflow-hidden">
          <img
            alt="Brand Narrative Image"
            className="w-full h-full object-cover grayscale-[20%] transition-transform duration-700 hover:scale-105"
            src={storyImage}
          />
        </div>
      </div>
    </section>
  )
}
