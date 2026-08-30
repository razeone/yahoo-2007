/**
 * Single source of truth for the fictional portal's identity.
 *
 * The page recreates the *era* (2007 Spanish web portal), not any real
 * company. Everything brand-specific lives here so the name can be swapped
 * in one place if the production wants a different one.
 */
export const brand = {
  name: 'Vistazú',
  region: 'España',
  domain: 'vistazu.es',
  tagline: 'Todo de un vistazo',
  copyrightYear: 2007,
} as const

export const brandFullName = `${brand.name} ${brand.region}`

/** Respects the Vite base path so the logo also resolves on GitHub Pages. */
export const logoSrc = `${import.meta.env.BASE_URL}logo.svg`
