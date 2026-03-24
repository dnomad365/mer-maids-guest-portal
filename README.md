# Mer-Maids Guest Concierge Hub

Next.js 16 + Tailwind 4 front-end that powers the QR portal for Mer-Maids guests. The home page showcases upsells (Kayaks on Demand, mid-stay refresh, trash valet, local experiences) and a live property feed pulled from `src/lib/properties.ts`.

## Stack
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 preview layer + custom gradients in `src/app/globals.css`
- **Package manager:** pnpm (lockfile committed)

## Local development
```bash
pnpm install
pnpm dev
```
The dev server runs on http://localhost:3000. Update `src/app/page.tsx` or the data in `src/lib/properties.ts`; Next.js will hot-reload.

## Linting & build
```bash
pnpm lint
pnpm build
```
Linting is required before merges. The production build uses Next.js Turbopack + static prerendering.

## Deployment
- Repo: https://github.com/dnomad365/mer-maids-guest-portal
- Vercel project: `dnomad365s-projects/mer-maids-guest-portal`
- Production URL: https://mer-maids-guest-portal.vercel.app
- Preview deployments are created for every branch push. Merging to `master` promotes to production automatically via the Vercel GitHub App.

To trigger a redeploy manually:
```bash
pnpm dlx vercel deploy --prod --token $VERCEL_TOKEN
```
(Only needed if a hotfix must ship before a Git push.)
