import { NextResponse, NextRequest } from 'next/server';
export async function middleware(req, ev) {
    const { pathname } = req.nextUrl;
    if (pathname === '/') {
        const url = req.nextUrl.clone();
        url.pathname = '/getting-started/home';
        return NextResponse.rewrite(url);
    }
    return NextResponse.next();
}
