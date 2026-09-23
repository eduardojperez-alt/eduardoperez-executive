# Adding a New Publication

This is the standard operating process for adding a new LinkedIn newsletter article to Eduardo Pérez Blandón's website.

The website uses a single publication dataset:

`src/data/publications.js`

Article cover images live in:

`public/images/insights/library/`

The Insights page automatically sorts articles by `publishedAt`, so a correctly added publication should appear in **Latest Insights** and in the full library without any additional page edits.

---

## 1. Standard workflow

Use this sequence every time a new LinkedIn article is published:

1. Publish the article on LinkedIn.
2. Wait for the LinkedIn newsletter notification email to arrive in Gmail.
3. Capture the following:
   - publication title
   - LinkedIn article URL
   - newsletter
   - publication date
   - article text or email preview
4. Create a short website description.
5. Assign 1–3 website topics.
6. Add the cover image to the website image library.
7. Add the new publication object to `src/data/publications.js`.
8. Run the site locally.
9. Review Home + `/insights`.
10. Commit and push to GitHub.

---

## 2. Required fields

Every normal article should use this structure:

```js
{
  id: "stable-short-slug",
  type: "article",
  newsletter: "BizPay Pulse",
  period: null,
  title: "Full publication title",
  description:
    "One concise sentence explaining the business implication or strategic question behind the article.",
  url: "https://www.linkedin.com/pulse/...",
  image:
    "/images/insights/library/YYYY-MM-DD-publication-slug.jpg",
  topics: [
    "Payments",
    "Financial Services"
  ],
  sourceTopic: null,
  publishedAt: "YYYY-MM-DD",
  sortOrder: 0,
  featured: false
}
```

### Newsletter values

Use exactly one of these:

```text
BizPay Pulse
Marketing & Tech Insights
```

Do not use shortened newsletter names inside the dataset.

---

## 3. Website topic taxonomy

Use only the existing website topics:

```text
Payments
Financial Services
AI
Customer Experience
Growth
Technology
```

Choose **1–3 topics** per publication.

The goal is not to tag every possible theme. Choose the themes a reader would genuinely use to find the article.

Examples:

- digital banking / fintech launch → `Financial Services`, `Technology`
- payments infrastructure → `Payments`, `Technology`
- AI-enabled banking → `AI`, `Financial Services`, `Technology`
- marketing measurement → `Customer Experience`, `Growth`, `Technology`
- creator economy / media strategy → `Growth`, `Customer Experience`

---

## 4. Description standard

The website description is **not** the LinkedIn introduction.

It should be a short editorial summary of approximately **20–35 words**, ideally one sentence.

### Good pattern

```text
How [company / market change] is reshaping [business model / customer behavior / competitive dynamic], and what it signals for [industry / region / growth].
```

### Example

```text
How Klar is extending business banking to Mexico’s millions of independent professionals and small-business owners, challenging a model built around incorporated companies.
```

Descriptions should:

- explain the strategic relevance
- sound analytical rather than promotional
- avoid repeating the headline
- avoid hashtags
- avoid "In this article..."
- avoid claims that are not supported by the article

---

## 5. Cover image naming

Preferred format:

```text
YYYY-MM-DD-short-article-slug.jpg
```

Example:

```text
2026-09-23-klar-mexico-business-blind-spot.jpg
```

Save covers in:

```text
public/images/insights/library/
```

Reference them in `publications.js` as:

```js
image: "/images/insights/library/2026-09-23-klar-mexico-business-blind-spot.jpg"
```

### Image rules

- Prefer the original publication cover.
- JPG is the website standard.
- PNG originals can be converted to JPG.
- Keep the original aspect ratio.
- Maximum practical width: about 1440 px.
- Do not use logos or source assets as a substitute for a cover unless intentionally designed as the cover.
- Do not use temporary LinkedIn-hosted image URLs.

---

## 6. ID convention

The `id` should be:

- unique
- lowercase
- stable
- short enough to remain readable
- based on the article title

Example:

```js
id: "klar-mexico-business-blind-spot"
```

Do not change an existing publication ID later unless necessary.

---

## 7. Publication date

Use:

```text
YYYY-MM-DD
```

Example:

```js
publishedAt: "2026-09-24"
```

Use the actual LinkedIn publication date when known.

Do not publish records with:

- unknown date
- `"No claro"`
- an estimated date that has not been confirmed

---

## 8. Where to add the record

Open:

```text
src/data/publications.js
```

Add the new object to the `publications` array.

The file already contains sorting logic, so the article does **not** need to be manually positioned as the first item.

`sortPublications()` will order it by `publishedAt`.

This also means the Home page's Latest Insights should update automatically through `latestInsights` / `latestThinking`.

---

## 9. Local validation

From the project root:

```bash
cd /Users/eduardoperez/Documents/eduardoperez-executive
npm run build
npm run preview
```

Open:

```text
http://localhost:4173/
http://localhost:4173/insights
```

Check:

### Home

- new article appears in Latest Insights if it is one of the 3 newest
- cover loads correctly
- title does not create an awkward card height
- description displays correctly
- article link opens LinkedIn

### Insights

- article appears first or in the correct date position
- correct newsletter badge
- correct date
- correct cover
- correct description
- article appears under relevant topic filters
- newsletter filter works
- search finds the title

### Mobile

Quickly check at approximately 390 px width:

- cover crop
- title wrapping
- description spacing
- badge/date layout

---

## 10. GitHub update

After local validation:

```bash
git status
git add .
git commit -m "Add latest insight: SHORT TITLE"
git push origin main
```

Example:

```bash
git commit -m "Add latest insight: Klar business banking"
```

Do not deploy to Netlify separately until the agreed deployment workflow is active.

---

# Tomorrow's Fast Workflow

For a normal new publication, Eduardo can simply tell ChatGPT:

```text
La publicación de hoy ya salió. Actualízala para la web.
```

When the LinkedIn newsletter email has arrived in Gmail, the intended workflow is:

1. Find the latest LinkedIn newsletter email.
2. Extract:
   - title
   - newsletter
   - publication URL
   - article date
   - article content / preview
3. Draft the website description.
4. Assign website topics.
5. Build the exact `publications.js` record.
6. Eduardo provides the cover image.
7. Convert/rename the cover if needed.
8. Produce the updated website files or patch.
9. Eduardo runs local build/preview.
10. Push to GitHub after review.

If Gmail has not received the LinkedIn email yet, provide the LinkedIn URL or paste the article text instead.

---

# Quick Intake Template

When manual input is needed, use:

```text
Title:
Newsletter:
Publication date:
LinkedIn URL:
Cover image:
```

Everything else — description, topics, ID, image filename and dataset entry — can be prepared from those inputs.

---

# Reports

Reports use the same dataset but with:

```js
type: "report"
```

and usually:

```js
period: "Q3 2026"
```

Reports should be added intentionally and are not part of the normal article workflow.

---

# Final checklist

Before committing, confirm:

- [ ] title is exact
- [ ] LinkedIn URL works
- [ ] publication date is confirmed
- [ ] newsletter is correct
- [ ] description is concise and strategic
- [ ] topics use the approved taxonomy
- [ ] image exists locally
- [ ] image path is correct
- [ ] Home loads
- [ ] Insights loads
- [ ] filters/search work
- [ ] mobile layout is acceptable
- [ ] `npm run build` succeeds
- [ ] changes committed to GitHub
