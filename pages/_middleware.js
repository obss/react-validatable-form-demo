import { NextResponse, NextRequest } from 'next/server';
import { prefix } from '../utils/prefix';

export async function middleware(req, ev) {
    const { pathname } = req.nextUrl;
    if (!pathname || pathname === `/${prefix}`) {
        const url = req.nextUrl.clone();
        const newPrefix = prefix ? `/${prefix}` : '';
        url.pathname = `${newPrefix}/getting-started/home`;
        return NextResponse.rewrite(url);
    }
    return NextResponse.next();
}
