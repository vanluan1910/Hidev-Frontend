import { editorialImage } from '../data/homeData'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

export function EditorialSection() {
  const textRef = useRevealOnScroll<HTMLDivElement>()
  const imageRef = useRevealOnScroll<HTMLDivElement>()

  return (
    <section className="relative py-section-gap bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto px-container-padding flex flex-col md:flex-row items-center gap-section-gap relative z-10">
        <div ref={textRef} className="w-full md:w-1/2 reveal-left">
          <span className="font-label-caps text-label-caps text-secondary tracking-widest mb-stack-sm block uppercase">
            Chuyên đề
          </span>
          <h2 className="font-display-lg text-[48px] leading-tight mb-stack-md text-primary">
            Tối Giản Như Một Tuyên Ngôn
          </h2>
          <p className="font-body-lg text-on-surface-variant mb-stack-lg leading-relaxed">
            Giữa thời đại ồn ào, chúng tôi chọn sự rõ ràng. Chuyên đề của chúng tôi khám phá điểm giao thoa giữa kiến trúc
            tối giản và những tấm vải mềm mại, tìm thấy vẻ đẹp trong sự tương phản giữa hình khối và công năng.
          </p>
          <button
            type="button"
            className="border border-primary text-primary font-label-caps text-label-caps px-stack-lg py-stack-md hover:bg-primary hover:text-white transition-all"
          >
            Đọc câu chuyện
          </button>
        </div>
        <div ref={imageRef} className="w-full md:w-1/2 reveal-right">
          <div className="relative">
            <img
              alt="Hình ảnh chuyên đề"
              className="w-full aspect-[4/5] object-cover grayscale brightness-95"
              src={editorialImage}
            />
            <div className="absolute -bottom-8 -left-8 bg-white p-stack-lg hidden lg:block shadow-sm">
              <p className="font-label-caps text-label-caps text-primary uppercase">Xu hướng tuần này</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/50 skew-x-12 -z-0" />
    </section>
  )
}
