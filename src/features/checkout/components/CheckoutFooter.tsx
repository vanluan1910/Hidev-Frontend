const footerLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Shipping', href: '#' },
  { label: 'Contact', href: '#' },
]

export function CheckoutFooter() {
  return (
    <footer className="w-full px-container-padding py-stack-lg flex flex-col md:flex-row justify-between items-center gap-stack-md border-t border-outline-variant mt-section-gap bg-surface">
      <div className="font-display-lg-mobile text-display-lg-mobile text-primary">Aura de Soie</div>
      <div className="flex gap-stack-md font-label-caps text-label-caps text-on-surface-variant">
        {footerLinks.map((link) => (
          <a key={link.label} className="hover:text-primary transition-colors" href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
      <div className="font-body-sm text-body-sm text-on-surface-variant">© 2024 Aura de Soie. All rights reserved.</div>
    </footer>
  )
}
