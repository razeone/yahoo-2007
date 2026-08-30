import type { FormEvent } from 'react'
import { brand, brandFullName, logoSrc } from '../data/brand'

interface SiteHeaderProps {
  query: string
  resultsMode: boolean
  onQueryChange: (query: string) => void
  onSearch: (query: string) => void
  onHome: () => void
}

export function SiteHeader({
  query,
  resultsMode,
  onQueryChange,
  onSearch,
  onHome,
}: SiteHeaderProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    onSearch(query)
  }

  return (
    <header className={`masthead${resultsMode ? ' masthead--results' : ''}`}>
      <div className="brand-area">
        <a
          className="brand-link"
          href="/"
          aria-label={`${brandFullName}, página principal`}
          onClick={(event) => {
            event.preventDefault()
            onHome()
          }}
        >
          <img src={logoSrc} alt={brand.name} width="235" height="50" />
        </a>
        <nav className="utility-links" aria-label={`Cuenta de ${brand.name}`}>
          <a href="#mi-portal">Mi {brand.name}</a>
          <a href="#mi-correo">Mi correo</a>
        </nav>
      </div>

      <form className="search-form" role="search" onSubmit={handleSubmit}>
        <label className="search-label" htmlFor="search-query">
          Buscar en la Web
        </label>
        <div className="search-controls">
          <input
            id="search-query"
            name="q"
            type="search"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            autoComplete="off"
          />
          <button type="submit">Buscar en la Web</button>
        </div>
        <div className="search-options" aria-hidden="true">
          Web&nbsp;&nbsp; Imágenes&nbsp;&nbsp; Noticias&nbsp;&nbsp; Vídeo
        </div>
      </form>
    </header>
  )
}
