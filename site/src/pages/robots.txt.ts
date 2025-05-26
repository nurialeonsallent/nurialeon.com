import type { APIRoute } from 'astro';

const robotsTxt = `
User-agent: *
Sitemap: ${new URL('sitemap-index.xml', import.meta.env.SITE).href}
Allow: /
Disallow: /_astro/hero.*.webp$
`.trim();

export const GET: APIRoute = () => {
    return new Response(robotsTxt, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
        },
    });
};
