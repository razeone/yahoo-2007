import { footerLinks } from '../data/content'

export function Footer() {
  return (
    <footer className="site-footer">
      <nav aria-label="Información de Yahoo">
        {footerLinks.map((link) => (
          <a key={link} href={`#${link.toLowerCase().replaceAll(' ', '-')}`}>
            {link}
          </a>
        ))}
      </nav>
      <p>Copyright © 2007 Yahoo! Todos los derechos reservados.</p>
    </footer>
  )
}