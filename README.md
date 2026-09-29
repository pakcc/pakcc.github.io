# Passing Through — A Private Space-Time Archive

A multi-page static website. Open `index.html` in a browser to explore it locally; no build step or installation is required. Keep the whole folder together when publishing.

## Where to edit

| Content | Files |
| --- | --- |
| Homepage and category entrances | `index.html` |
| Places and interactive map | `places.html`, `map.html` |
| Paris, Prague, and Berlin samples | `place-paris.html`, `place-prague.html`, `place-berlin.html` |
| Short fragments | `fragments.html`, `fragment-001.html` through `fragment-003.html` |
| Music | `music.html`, `music-mianmian.html` |
| Anime and art | `art.html`, `art-cowboy-bebop.html` |
| Books and collections | `words.html`, `words-unwritten.html`, `collections.html`, `collection-ticket.html` |
| Blog and sample essays | `blog.html`, `blog-between-stations.html`, `blog-what-we-keep.html` |
| Current chapter, timeline, and about | `now.html`, `timeline.html`, `about.html` |
| Colors, layout, and cover effects | `styles.css` |
| Clock and random memory button | `site.js` |
| Illustrations and photos | `assets/` |

The sample places, objects, dates, and blog essays are marked as demo content. They do not claim to document real experiences. Replace the sample text with your own writing; update the corresponding category card and homepage summary too.

Each page has a large illustrated cover. To change one, replace its `page-cover` image path in the HTML and update the `og:image` path in the page head. Update descriptive `alt` text for content images. Cover images use empty alt text because the nearby heading already names the page.

The Spike Spiegel image is original fan art. The music page uses original illustration and commentary, with no lyrics or album artwork. Fonts, scripts, and images are local, and the site makes no analytics or tracking requests.

## Publish with GitHub Pages

Push this folder to the `main` branch of `pakcc/pakcc.github.io`. The repository's Pages source is already set to **Deploy from a branch → main → / (root)**, so each push publishes the updated static site automatically. The `.nojekyll` file keeps the files as-is during publishing.

The site is available at `https://pakcc.github.io/` after the latest deployment completes.
