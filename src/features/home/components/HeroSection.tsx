import { heroImage } from '../data/homeData'

export function HeroSection() {
  return (
    <section className="relative h-[921px] w-full overflow-hidden">
      <img
        alt="Thời trang cao cấp"
        className="absolute inset-0 w-full h-full object-cover"
        src={heroImage}
      />
      <div className="absolute inset-0 bg-black/10 flex items-center justify-center text-center">
        <div className="max-w-3xl px-container-padding">
          <h1 className="font-display-lg text-white mb-stack-md text-[64px] leading-tight tracking-tight">
            Nghệ Thuật Của Sự Tĩnh Lặng Tinh Tế
          </h1>
          <p className="font-body-lg text-white/90 mb-stack-lg max-w-xl mx-auto">
            Khám phá Bộ Sưu Tập Xuân Hè 2024 — bản hòa ca của sự tối giản, chất liệu và ánh sáng.
          </p>
          <button
            type="button"
            className="bg-primary text-white font-label-caps text-label-caps px-stack-lg py-stack-md hover:opacity-80 transition-opacity uppercase"
          >
            Khám phá ngay
          </button>
        </div>
      </div>
    </section>
  )
}
