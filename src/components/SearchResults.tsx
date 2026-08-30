import { relatedQueries, searchResults } from '../data/content'
import { Footer } from './Footer'

interface SearchResultsProps {
  query: string
  visited: ReadonlySet<string>
  onSearch: (query: string) => void
  onOpenArticle: (slug: string) => void
}

const articleHref = (query: string, slug: string) =>
  `/?${new URLSearchParams({ q: query, a: slug }).toString()}`

export function SearchResults({
  query,
  visited,
  onSearch,
  onOpenArticle,
}: SearchResultsProps) {
  return (
    <>
      <nav className="results-tabs" aria-label="Tipos de búsqueda">
        <a className="active" href="#web">Web</a>
        <a href="#imagenes">Imágenes</a>
        <a href="#video">Vídeo</a>
        <a href="#noticias">Noticias</a>
        <a href="#compras">Compras</a>
        <a href="#mas">Más</a>
      </nav>

      <main id="view-content" className="results-page" tabIndex={-1}>
        <section className="results-main" aria-labelledby="results-heading">
          <h1 id="results-heading">
            Resultados de búsqueda para <strong>{query}</strong>
          </h1>
          <p className="result-count">
            Resultados 1 - 5 de aproximadamente 2.340
          </p>

          <ol className="result-list">
            {searchResults.map((result) => (
              <li key={result.slug}>
                <a
                  className={`result-title${
                    visited.has(result.slug) ? ' result-title--visited' : ''
                  }`}
                  href={articleHref(query, result.slug)}
                  onClick={(event) => {
                    event.preventDefault()
                    onOpenArticle(result.slug)
                  }}
                >
                  {result.title}
                </a>
                <p>{result.snippet}</p>
                <cite>{result.url}</cite>
                <span className="result-actions">
                  {' '}
                  - <a href="#cache">En caché</a> -{' '}
                  <a href="#similares">Páginas similares</a>
                </span>
              </li>
            ))}
          </ol>
        </section>

        <aside className="related-searches">
          <h2>Búsquedas relacionadas</h2>
          <ul>
            {relatedQueries.map((relatedQuery) => (
              <li key={relatedQuery}>
                <a
                  href={`/?q=${encodeURIComponent(relatedQuery)}`}
                  onClick={(event) => {
                    event.preventDefault()
                    onSearch(relatedQuery)
                  }}
                >
                  {relatedQuery}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </main>
      <Footer />
    </>
  )
}
