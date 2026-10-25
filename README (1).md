# Vidyapath — Education Website Starter

A responsive static website starter with a professional homepage, searchable sample categories, a marks-percentage calculator, and an in-browser study checklist.

## Important feature status
- Working now: responsive layout, resource search, percentage calculator, temporary checklist.
- Demo only: login/signup dialogs. They do not authenticate users and do not collect passwords.
- Not included yet: secure admin panel, database-backed notes, uploads, saved accounts, moderation, or role permissions. These require a backend and security rules. Do not publish a client-side-only admin panel as if it were secure.

## Preview
Open `index.html` in a browser.

## Publish for free with GitHub Pages
1. Create/sign in to a GitHub account.
2. Create a **public** repository, for example `vidyapath-site`.
3. Upload all files in this folder to the repository root (make sure `index.html` is at the root).
4. Open repository **Settings → Pages**.
5. Under build/deployment, select **Deploy from a branch**, choose `main` and `/(root)`, then Save.
6. Wait for the published URL shown in Settings → Pages. It will look like `https://YOUR-USERNAME.github.io/vidyapath-site/`.
7. Test it on a phone and desktop.

GitHub Pages is static hosting. Use it for a learning-resource site, not for processing passwords, private data, payments, or as a backend for a commercial SaaS.

## Prepare Google Search
1. Replace `YOUR-SITE-URL` in `sitemap.xml` and `robots.txt` with the exact published URL. For a project URL, preserve the `/vidyapath-site/` path in the homepage URL.
2. Add real, original, useful educational content. Replace sample categories with real subject pages and accurate notes.
3. Open Google Search Console: https://search.google.com/search-console/
4. Add a **URL prefix** property using the exact published HTTPS URL.
5. Complete the ownership verification method Google offers for that URL. If using a GitHub Pages project URL and HTML-file verification isn't convenient, use an available HTML tag or other supported verification method.
6. In Search Console, open **Sitemaps** and submit the correct sitemap URL. For a project site this will be `https://YOUR-USERNAME.github.io/vidyapath-site/sitemap.xml`.
7. Use **URL Inspection** on the homepage and select **Request indexing** if available.
8. Check the Pages/Indexing report and fix any errors. Indexing may take days or weeks and is not guaranteed.

## Login, signup and admin panel: safe next stage
Use a backend such as Supabase for authentication and database. Create tables for subjects, resources and user profiles; enable Row Level Security; allow public read access only for published resources; restrict create/update/delete actions to an admin role using server-validated policies. Never put a service-role key in browser JavaScript. Keep secrets private. Test permissions before launch.

Supabase free-plan quotas and policies can change; check its current official pricing/docs before relying on it for a public production site.

## Before launch checklist
- Choose a final name and check social/domain availability.
- Replace placeholder/sample content and write original notes.
- Add accurate About, Contact and Privacy pages.
- Check mobile layout, links, spelling, accessibility and page speed.
- Only upload content you own or have permission to publish.
- Do not claim guaranteed Google ranking.
