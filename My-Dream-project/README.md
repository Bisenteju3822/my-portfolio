# DecideIt — AI Product Decision Platform

> Paste any Amazon/Flipkart URL → Get **Buy / Wait / Avoid** recommendation in seconds.
> **100% Free to run.** No paid APIs. No credit card needed.

## What It Does

- AI-powered **Buy / Wait / Avoid** recommendation with confidence score
- Review sentiment analysis — extracts pros, cons, and long-term issues
- **Fake review detection** using heuristics + AI
- Price history chart — know if today's price is actually a deal
- Caches results so repeat lookups are instant

## Free Services Used

| Service | Purpose | Link |
|---------|---------|------|
| Vercel | Hosting + serverless | vercel.com |
| Supabase | PostgreSQL database | supabase.com |
| Upstash | Redis cache | upstash.com |
| Groq | AI (Llama 3.3 70B) | console.groq.com |

---

## Setup (15 minutes)

### Step 1 — Create free accounts

1. **Supabase** — go to supabase.com → New Project → copy URL + anon key + service role key
2. **Upstash** — go to upstash.com → New Redis → copy REST URL + token
3. **Groq** — go to console.groq.com → API Keys → Create key

### Step 2 — Set up database

In your Supabase project, go to **SQL Editor** and run the contents of:
```
supabase/migrations/001_init.sql
```

### Step 3 — Configure environment

```bash
cp .env.local.example .env.local
# Edit .env.local with your keys from Step 1
```

### Step 4 — Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000, paste any Amazon product URL, and click Analyze.

---

## Deploy to Vercel (free)

```bash
npm install -g vercel
vercel
```

Then in Vercel Dashboard → your project → Settings → Environment Variables:
Add all the variables from your `.env.local` file.

The `vercel.json` already configures a daily cron job for price tracking.

---

## Project Structure

```
app/
  page.tsx              — Home (URL input)
  analysis/[id]/        — Analysis result page
  api/analyze/          — Main orchestration endpoint
  api/analysis/[id]/    — Fetch stored analysis
  api/cron/price-track/ — Daily price update cron
lib/
  scraper/              — Amazon + Flipkart scrapers
  ai/                   — Groq client, review analyzer, decision engine
  supabase.ts           — Database client
  redis.ts              — Cache client
components/
  DecisionBadge         — BUY/WAIT/AVOID verdict card
  ReviewAnalysis        — Pros/Cons/Long-term grid
  FakeReviewAlert       — Fake review warning banner
  PriceChart            — Price history line chart
  URLInput              — Homepage URL form
```
