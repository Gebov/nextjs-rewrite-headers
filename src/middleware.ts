import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
    if (request.nextUrl.pathname === '/rewrite') {
        const rewritten = NextResponse.rewrite(new URL('/showcase', "https://nextjs.org/"));
        // ok to set 'custom' header since it is not passed down from nextjs.org
        rewritten.headers.set("custom", "test");

        // doesn't work since it is passed down from nextjs.org
        rewritten.headers.set("server", "test");

        // doesn't work since it is passed down from nextjs.org
        rewritten.headers.set("cache-control", "public, max-age=60");

        return rewritten;
    }
}
