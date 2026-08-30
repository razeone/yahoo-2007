import { brand } from '../data/brand'
import { footerLinks } from '../data/content'

export function Footer() {
  return (
    <footer className="site-footer">
      <nav aria-label={`Información de ${brand.name}`}>
        {footerLinks.map((link) => (
          <a key={link} href={`#${link.toLowerCase().replaceAll(' ', '-')}`}>
            {link}
          </a>
        ))}
      </nav>
      <p>
        Copyright © {brand.copyrightYear} {brand.name}. Todos los derechos
        reservados.
      </p>
    </footer>
  )
}
