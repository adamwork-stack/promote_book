# SEO Implementation Notes for Life Punch Website

## Already Implemented in index.html

1. **Meta tags**
   - `meta description` – concise, keyword-rich summary
   - `meta keywords` – relevant terms
   - `meta author` – Doug James Hood
   - Open Graph tags for social sharing (`og:title`, `og:description`, `og:image`, `og:type`)

2. **Semantic HTML**
   - `<main>`, `<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`
   - Headings hierarchy (h1 → h2 → h3)
   - `aria-label` on navigation and key sections

3. **Accessibility**
   - Skip-to-content link
   - Descriptive image `alt` text
   - ARIA attributes for interactive elements

## Additional SEO Ideas to Implement

### 1. **Structured Data (JSON-LD)**
Add schema.org `Book` markup to the `<head>`:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Book",
  "name": "Life Punch",
  "author": {
    "@type": "Person",
    "name": "Doug James Hood"
  },
  "description": "Holding On to God and Helping Each Other When Life Hits Hard...",
  "image": "https://yoursite.com/cover.png"
}
</script>
```

### 2. **Sitemap**
Create `sitemap.xml` and submit to Google Search Console.

### 3. **robots.txt**
Add a `robots.txt` file to control crawling.

### 4. **Canonical URL**
Add `<link rel="canonical" href="https://yoursite.com/">` when you have a live domain.

### 5. **Page Speed**
- Optimize `cover.png` (compress, use WebP where possible)
- Consider lazy-loading images below the fold
- Minify CSS and JS for production

### 6. **Content**
- Add a dedicated blog or “Stories” section for ongoing content
- Use long-tail phrases: “Christian books about community,” “faith-based real-life stories”
- Encourage reviews and testimonials with names/locations

### 7. **Local SEO**
If Doug speaks at events, add location-based keywords and an events section.
