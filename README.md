# Coral FAQ Agent — Demo (frontend)

This is a minimal static frontend for the Internet-of-Agents hackathon. It shows a chat UI and currently runs in "mock" mode if no backend is present.

## How to deploy (quick)
1. Push this repo to GitHub (public).
2. Option A — GitHub Pages:
   - Settings → Pages → Source: `main` branch / root → Save.
   - Site will be available at `https://<your-github-username>.github.io/<repo-name>/`
3. Option B — Vercel:
   - Sign in at vercel.com, click "Import Git Repository", choose this repo, deploy.
   - Vercel auto-deploys on push and supports serverless functions under `/api`.
4. Next step: add a serverless function at `/api/message` that will forward the user message to a Coral agent (I will give exact code for that in Step 2).

