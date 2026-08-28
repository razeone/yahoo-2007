import { useEffect, useState } from 'react'
import { HomePage } from './components/HomePage'
import { SearchResults } from './components/SearchResults'
import { YahooHeader } from './components/YahooHeader'
import './App.css'

const getQuery = () => new URLSearchParams(window.location.search).get('q') ?? ''

function App() {
  const initialQuery = getQuery()
  const [query, setQuery] = useState(initialQuery)
  const [searchText, setSearchText] = useState(initialQuery)

  useEffect(() => {
    const handlePopState = () => {
      const nextQuery = getQuery()
      setQuery(nextQuery)
      setSearchText(nextQuery)
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  useEffect(() => {
    document.title = query ? `${query} - Yahoo! Search` : 'Yahoo! España'
    document.getElementById('view-content')?.focus({ preventScroll: true })
  }, [query])

  function handleSearch(value: string) {
    const nextQuery = value.trim()

    if (!nextQuery) return

    const url = new URL(window.location.href)
    url.searchParams.set('q', nextQuery)
    window.history.pushState({}, '', url)
    setQuery(nextQuery)
    setSearchText(nextQuery)
  }

  function handleHome() {
    const url = new URL(window.location.href)
    url.searchParams.delete('q')
    window.history.pushState({}, '', url)
    setQuery('')
    setSearchText('')
  }

  return (
    <div className={`site-shell${query ? ' site-shell--results' : ''}`}>
      <YahooHeader
        query={searchText}
        resultsMode={Boolean(query)}
        onQueryChange={setSearchText}
        onSearch={handleSearch}
        onHome={handleHome}
      />
      {query ? (
        <SearchResults query={query} onSearch={handleSearch} />
      ) : (
        <HomePage />
      )}
    </div>
  )
}

export default App
