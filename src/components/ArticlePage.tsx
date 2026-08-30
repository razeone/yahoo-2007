import { useEffect } from 'react'
import type { Article } from '../data/articles'
import './ArticlePage.css'

interface ArticlePageProps {
  article: Article
}

/**
 * Renderiza una de las páginas ficticias enlazadas desde los resultados.
 * La estructura es común; cada sitio cambia de aspecto con `theme`.
 */
export function ArticlePage({ article }: ArticlePageProps) {
  const { site, theme } = article

  useEffect(() => {
    document.title = `${article.title} - ${site.name}`
  }, [article.title, site.name])

  return (
    <div className={`article-site article-site--${theme}`}>
      <div className="article-frame">
        <header className="site-band">
          <div className="site-id">
            <a className="site-name" href="#inicio">
              {site.name}
            </a>
            <span className="site-tagline">{site.tagline}</span>
          </div>
          <nav className="site-nav" aria-label={`Menú de ${site.name}`}>
            {site.nav.map((item) => (
              <a key={item} href={`#${item.toLowerCase().replaceAll(' ', '-')}`}>
                {item}
              </a>
            ))}
          </nav>
        </header>

        <div className="site-body">
          <main id="view-content" className="article-main" tabIndex={-1}>
            {article.kicker ? <p className="kicker">{article.kicker}</p> : null}
            <h1>{article.title}</h1>
            <p className="byline">
              {article.byline} · {article.date}
            </p>
            <p className="lead">{article.lead}</p>

            {article.sections.map((section, index) => (
              <section key={section.heading ?? index}>
                {section.heading ? <h2>{section.heading}</h2> : null}
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </section>
            ))}

            {article.pullQuote ? (
              <blockquote className="pull-quote">{article.pullQuote}</blockquote>
            ) : null}

            {article.factBox ? (
              <div className="fact-box">
                <h3>{article.factBox.title}</h3>
                <ul>
                  {article.factBox.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {article.comments ? (
              <section className="comments">
                <h2>Comentarios</h2>
                {article.comments.map((comment) => (
                  <div className="comment" key={comment.author + comment.date}>
                    <p className="comment-meta">
                      <strong>{comment.author}</strong> — {comment.date}
                    </p>
                    <p className="comment-text">{comment.text}</p>
                  </div>
                ))}
                <p className="comment-form-note">
                  <a href="#comentar">Deja tu comentario</a> (los mensajes se
                  revisan antes de publicarse)
                </p>
              </section>
            ) : null}
          </main>

          <aside className="article-aside">
            <h2>{article.sidebar.title}</h2>
            <ul>
              {article.sidebar.links.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replaceAll(' ', '-')}`}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            <div className="aside-box">
              <p className="aside-box-title">Suscríbete</p>
              <p>Recibe las novedades de {site.name} en tu correo.</p>
              <form
                className="aside-form"
                onSubmit={(event) => event.preventDefault()}
              >
                <input
                  type="text"
                  aria-label="Tu correo electrónico"
                  placeholder="tu@correo.es"
                />
                <button type="submit">Enviar</button>
              </form>
            </div>
          </aside>
        </div>

        <footer className="site-foot">
          <p>{article.footerNote}</p>
          <p className="site-foot-url">http://{article.url}</p>
        </footer>
      </div>
    </div>
  )
}
