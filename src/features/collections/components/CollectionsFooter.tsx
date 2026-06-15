const footerLinks = [
  { label: 'Sustainability', href: '#' },
  { label: 'Shipping & Returns', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Contact', href: '#' },
]

export function CollectionsFooter() {
  return (
    <footer className="w-full border-t border-outline-variant bg-surface">
      <div className="flex flex-col md:flex-row justify-between items-center px-container-padding py-section-gap w-full max-w-7xl mx-auto">
        <div className="mb-stack-lg md:mb-0">
          <span className="font-display-lg text-display-lg text-on-surface">Aura de Soie</span>
        </div>
        <div className="flex flex-wrap justify-center gap-stack-lg mb-stack-lg md:mb-0">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              className="font-body-sm text-body-sm text-on-secondary-container hover:text-primary transition-colors duration-200"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="font-body-sm text-body-sm text-on-secondary-container">
          © 2024 Aura de Soie. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
