export const prerender = true;

export function GET() {
    const urls = [
        { loc: "https://horvitz.ru/", priority: 1.0 }
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${urls.map(url => `
            <url>
                <loc>${url.loc}</loc>
                <priority>${url.priority}</priority>
            </url>
        `).join('')}
    </urlset>`;

    return new Response(xml, { headers: { "Content-Type": "application/xml" } });
}
