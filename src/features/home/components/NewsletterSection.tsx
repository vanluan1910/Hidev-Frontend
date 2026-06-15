import type { FormEvent } from 'react'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

export function NewsletterSection() {
  const ref = useRevealOnScroll<HTMLElement>()

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <section ref={ref} className="py-section-gap border-t border-outline-variant reveal-left">
      <div className="max-w-2xl mx-auto px-container-padding text-center">
        <h2 className="font-headline-md text-display-lg text-primary mb-stack-sm">Cộng Đồng Aura</h2>
        <p className="font-body-md text-secondary mb-stack-lg">
          Nhận lời mời độc quyền tham dự các buổi giới thiệu riêng tư và ưu tiên tiếp cận bộ sưu tập mới.
        </p>
        <form className="flex flex-col sm:flex-row gap-stack-md" onSubmit={handleSubmit}>
          <input
            className="flex-1 bg-transparent border-b border-outline focus:border-primary outline-none py-stack-sm px-unit font-label-caps text-label-caps placeholder:text-outline-variant transition-colors"
            placeholder="ĐỊA CHỈ EMAIL CỦA BẠN"
            type="email"
          />
          <button
            type="submit"
            className="bg-primary text-white font-label-caps text-label-caps px-stack-lg py-stack-md hover:opacity-80 transition-opacity uppercase shrink-0"
          >
            Đăng ký
          </button>
        </form>
      </div>
    </section>
  )
}
