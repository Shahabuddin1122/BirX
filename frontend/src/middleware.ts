import { NextRequest, NextResponse } from 'next/server';

const staticRoutes = ['/admin-dashboard', '/add-product', '/orders', '/view-product'];
const dynamicRoutes = ['/edit-product/', '/order/'];

export default function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    const isStaticProtected = staticRoutes.includes(pathname);
    const isDynamicProtected = dynamicRoutes.some(route => pathname.startsWith(route));

    // Get the session status from cookies (returns a string or undefined)
    const sessionStatus = req.cookies.get('sessionStatus')?.value;

    // Check if sessionStatus is "true"
    if (sessionStatus !== 'true' && (isStaticProtected || isDynamicProtected)) {
        const absoluteURL = new URL('/', req.nextUrl.origin);
        return NextResponse.redirect(absoluteURL.toString());
    }

    return NextResponse.next();
}
