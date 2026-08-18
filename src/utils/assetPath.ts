/**
 * Prefix a public-folder path with Vite's base URL.
 * Vercel / local: BASE_URL is "/"
 * GitHub Pages: BASE_URL is "/tyler-portfolio/"
 *
 * Do not use this for React Router paths such as /projects/:slug.
 */
export function assetPath(path: string): string {
  if (!path || /^(https?:)?\/\//i.test(path) || path.startsWith("data:")) {
    return path
  }

  const base = import.meta.env.BASE_URL
  return `${base}${path.replace(/^\//, "")}`
}
