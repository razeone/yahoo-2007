import { serviceColumns } from '../data/content'
import { Footer } from './Footer'

export function HomePage() {
  return (
    <>
      <main id="view-content" className="home-page" tabIndex={-1}>
        <aside className="browser-notice">
          <h1>¿Por qué perderte algo?</h1>
          <p>
            Actualiza tu navegador para disfrutar de una experiencia de Yahoo!
            más rápida y segura.
          </p>
          <p className="browser-links">
            <a href="#internet-explorer">Internet Explorer 7</a>
            <a href="#firefox">Firefox 2</a>
            <a href="#safari">Safari 2</a>
            <a href="#opera">Opera 9</a>
          </p>
        </aside>

        <section className="services" aria-label="Servicios de Yahoo">
          <div className="service-grid">
            {serviceColumns.map((column, columnIndex) => (
              <div className="service-column" key={columnIndex}>
                {column.map((service) => (
                  <a
                    key={service}
                    href={`#${service.toLowerCase().replaceAll(' ', '-')}`}
                  >
                    {service}
                  </a>
                ))}
              </div>
            ))}
          </div>
          <a className="all-services" href="#todos-los-servicios">
            Todos los servicios de Yahoo!
          </a>
        </section>
      </main>
      <Footer />
    </>
  )
}