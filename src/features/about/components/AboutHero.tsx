import { heroImage } from '../data/aboutData'

export function AboutHero() {
  return (
    <section className="relative h-[921px] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img alt="Heritage of Refinement" className="w-full h-full object-cover editorial-reveal" src={heroImage} />
        <div className="absolute inset-0 bg-black/5" />
      </div>
      <div className="relative z-10 text-center px-container-padding max-w-4xl about-fade-in visible">
        <p className="font-label-caps text-label-caps tracking-[0.2em] mb-stack-md text-primary opacity-70">SINCE 1994</p>
        <h1 className="font-display-lg text-[64px] md:text-[80px] leading-none mb-stack-lg italic">
          Di Sản Của Sự Tinh Tế
        </h1>
        <div className="w-24 h-[1px] bg-primary mx-auto opacity-40" />
      </div>
    </section>
  )
}
