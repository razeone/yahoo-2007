import { useEffect, useState } from 'react'
import { ArticlePage } from './components/ArticlePage'
import { HomePage } from './components/HomePage'
import { SearchResults } from './components/SearchResults'
import { SiteHeader } from './components/SiteHeader'
import { articleBySlug } from './data/articles'
import { brand, brandFullName } from './data/brand'
import './App.css'

const getParam = (name: string) =>
  new URLSearchParams(window.location.search).get(name) ?? ''

function App() {
  const [query, setQuery] = useState(() => getParam('q'))
  const [searchText, setSearchText] = useState(query)
  const [slug, setSlug] = useState(() => getParam('a'))
  const [visited, setVisited] = useState<ReadonlySet<string>>(new Set())

  const article = slug ? articleBySlug.get(slug) : undefined

  useEffect(() => {
    const handlePopState = () => {
      const nextQuery = getParam('q')
      setQuery(nextQuery)
      setSearchText(nextQuery)
      setSlug(getParam('a'))
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  useEffect(() => {
    // La página de destino pone su propio título; aquí sólo el del portal.
    if (!article) {
      document.title = query ? `${query} - Buscador ${brand.name}` : brandFullName
    }
    document.getElementById('view-content')?.focus({ preventScroll: true })
    window.scrollTo(0, 0)
  }, [query, article])

  function navigate(nextQuery: string, nextSlug: string) {
    const url = new URL(window.location.href)

    for (const [key, value] of [
      ['q', nextQuery],
      ['a', nextSlug],
    ]) {
      if (value) url.searchParams.set(key, value)
      else url.searchParams.delete(key)
    }

    window.history.pushState({}, '', url)
    setQuery(nextQuery)
    setSearchText(nextQuery)
    setSlug(nextSlug)
  }

  function handleSearch(value: string) {
    const nextQuery = value.trim()

    if (!nextQuery) return

    navigate(nextQuery, '')
  }

  function handleHome() {
    navigate('', '')
  }

  function handleOpenArticle(nextSlug: string) {
    setVisited((current) => new Set(current).add(nextSlug))
    navigate(query, nextSlug)
  }

  if (article) {
    return <ArticlePage article={article} />
  }

  return (
    <div className={`site-shell${query ? ' site-shell--results' : ''}`}>
      <SiteHeader
        query={searchText}
        resultsMode={Boolean(query)}
        onQueryChange={setSearchText}
        onSearch={handleSearch}
        onHome={handleHome}
      />
      {query ? (
        <SearchResults
          query={query}
          visited={visited}
          onSearch={handleSearch}
          onOpenArticle={handleOpenArticle}
        />
      ) : (
        <HomePage />
      )}
    </div>
  )
}

export default App
