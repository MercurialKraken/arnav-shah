# Outstanding: og:image and og:url

Working note. Not published: `tasks/` sits outside `docs/` and is never served. This
exists because anything inside `docs/` is public, so a TODO comment could not go in the
HTML itself.

Open Graph and Twitter meta were added to all six pages. Two tags were deliberately left
out, both blocked on a decision rather than on effort.

## 1. `og:image` — blocked on a design pass

Not added. There is no preview image yet and a fabricated one would be worse than none.

Because there is no image, `twitter:card` is set to `summary` rather than
`summary_large_image`. `summary_large_image` renders as a broken or empty panel when no
image resolves. **If an image is added later, change the card type to
`summary_large_image` at the same time.** The two settings go together.

What is needed:
- One image, 1200x630 (1.91:1), under about 1 MB, PNG or JPG.
- It must come from the design system: `--paper` `#F3EDE1` ground, `--ink` `#16130F`
  type, at most one `--accent` `#8C2F23` element. Newsreader for any lettering.
- Absolute URL required. Relative paths do not work in Open Graph; scrapers do not
  resolve them against the page. So this is blocked on the same unknown as `og:url`.
- Suggested source of truth: the favicon mark at `docs/assets/favicon.svg` already
  establishes the monogram (serif A over an oxblood rule). A wide version of that plus
  the wordmark would be consistent, and would not invent a brand device.

Tags to add to all six pages once the image exists:

```html
<meta property="og:image" content="https://<final-host>/assets/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="...">
<meta name="twitter:image" content="https://<final-host>/assets/og-image.png">
```

## 2. `og:url` — blocked on the final GitHub Pages URL

Not added. `og:url` requires an absolute URL and the deployed host is not decided yet.
Guessing at `arnavshah.github.io/...` or inventing a custom domain would ship a wrong
canonical URL, which is worse than omitting the tag: scrapers fall back to the requested
URL when `og:url` is absent, which is correct behaviour by default.

Once the host is known, add to each page:

```html
<meta property="og:url" content="https://<final-host>/<page>.html">
```

Per page: `index.html` (use the bare directory URL), `projects.html`, `writing.html`,
`resume.html`, `writing/cabin-42.html`, `writing/what-about-bob.html`.

## Already done, for reference

Present on all six pages: `og:type` (`website`, or `article` on the two story pages),
`og:site_name`, `og:title`, `og:description`, `twitter:card`, `twitter:title`,
`twitter:description`. Titles and descriptions reuse each page's existing `<title>` and
`<meta name="description">` verbatim, so no new prose was written and nothing
characterises the creative writing beyond the teasers Arnav already wrote.
