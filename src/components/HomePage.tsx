import { brand } from '../data/brand'
import { browserNoticeLinks, serviceColumns } from '../data/content'
import { Footer } from './Footer'

const toAnchor = (label: string) =>
  `#${label.toLowerCase().replaceAll(' ', '-')}`

export function HomePage() {
  return (
    <>
      <main id="view-content" className="home-page" tabIndex={-1}>
        <aside className="browser-notice">
          <h1>No te pierdas nada</h1>
          <p>
            Actualiza tu navegador para disfrutar de {brand.name} con más
            velocidad y seguridad.
          </p>
          <p className="browser-links">
            {browserNoticeLinks.map((link) => (
              <a key={link} href={toAnchor(link)}>
                {link}
              </a>
            ))}
          </p>
        </aside>

        <section className="services" aria-label={`Servicios de ${brand.name}`}>
          <div className="service-grid">
            {serviceColumns.map((column, columnIndex) => (
              <div className="service-column" key={columnIndex}>
                {column.map((service) => (
                  <a key={service} href={toAnchor(service)}>
                    {service}
                  </a>
                ))}
              </div>
            ))}
          </div>
          <a className="all-services" href="#todos-los-servicios">
            Todos los servicios de {brand.name}
          </a>
        </section>
      </main>
      <Footer />
    </>
  )
}
