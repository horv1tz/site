export const prerender = true;

export function GET() {
    return new Response(null, {
        status: 302,
        headers: {
            'Location': 'https://docs.horvitz.ru/' // замените '/target-url' на нужный путь
        }
    });
}

