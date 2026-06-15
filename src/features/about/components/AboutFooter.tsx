const exploreLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
]

const clientCareLinks = [
  { label: 'Shipping & Returns', href: '#' },
  { label: 'Contact Us', href: '#' },
]

export function AboutFooter() {
  return (
    <footer className="bg-surface border-t border-outline-variant py-section-gap px-container-padding">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-stack-lg">
        <div className="space-y-stack-md">
          <div className="font-headline-sm text-headline-sm text-on-surface">Aura de Soie</div>
          <p className="text-secondary font-body-sm max-w-xs">
            Nơi những giấc mơ lụa là được dệt nên bằng sự đam mê và tâm hồn của nghệ nhân.
          </p>
        </div>
        <div className="flex flex-col gap-stack-sm">
          <span className="font-label-caps text-label-caps text-on-surface mb-stack-sm">Explore</span>
          {exploreLinks.map((link) => (
            <a key={link.label} className="text-on-secondary-container font-body-sm hover:text-primary transition-colors" href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-stack-sm">
          <span className="font-label-caps text-label-caps text-on-surface mb-stack-sm">Client Care</span>
          {clientCareLinks.map((link) => (
            <a key={link.label} className="text-on-secondary-container font-body-sm hover:text-primary transition-colors" href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-stack-sm">
          <span className="font-label-caps text-label-caps text-on-surface mb-stack-sm">Follow Us</span>
          <div className="flex gap-stack-md">
            <a className="text-on-secondary-container hover:text-primary transition-colors" href="#" aria-label="Website">
              <span className="material-symbols-outlined">public</span>
            </a>
            <a className="text-on-secondary-container hover:text-primary transition-colors" href="#" aria-label="Instagram">
              <span className="material-symbols-outlined">camera</span>
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-stack-lg pt-stack-lg border-t border-outline-variant flex justify-between items-center text-secondary font-body-sm">
        <p>© 2024 Aura de Soie. All rights reserved.</p>
        <div className="flex gap-stack-md items-center">
          <span className="material-symbols-outlined text-[16px]">language</span>
          <span>Vietnam / Vietnamese</span>
        </div>
      </div>
    </footer>
  )
}
