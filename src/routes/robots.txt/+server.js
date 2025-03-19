export const prerender = true;

export function GET() {
    const content = `User-agent: *
Disallow:
Sitemap: https://horvitz.ru/sitemap.xml`;

    return new Response(content, { headers: { "Content-Type": "text/plain" } });
}
