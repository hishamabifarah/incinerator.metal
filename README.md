This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Festival and concert photo galleries

Festival and concert archive entries can include an optional `images` array in `src/data/archive.ts`. The gallery is rendered on the detail page after the entry content and before **Keep digging**. Entries without photos do not show an empty gallery.

Store photos in a folder named after the archive entry, for example:

```text
public/images/festivals/hellfest-2014/01.jpg
public/images/festivals/hellfest-2014/02.jpg
public/images/concerts/<concert-entry-id>/01.jpg
```

Then add the photos to the matching item:

```ts
images: [
  {
    src: "/images/festivals/hellfest-2014/01.jpg",
    alt: "Band performing on the main stage",
    caption: "Band Name",
  },
  {
    src: "/images/festivals/hellfest-2014/02.jpg",
    alt: "The festival grounds at sunset",
    caption: "Festival grounds at sunset",
  },
],
```

Use the band's name as the caption for live-performance photos. For crowd, stage, festival atmosphere, venue, and location photos, use a short descriptive caption. The gallery displays eight photos per page and opens a keyboard-navigable lightbox when a photo is selected.
