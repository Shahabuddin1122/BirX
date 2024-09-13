import {sessionStatus} from "@/utils/session";
import {NextRequest, NextResponse} from "next/server";

const staticRoutes = ['/admin-dashboard', '/add-product', '/orders', '/view-product'];
const dynamicRoutes = ['/edit-product/', '/order/'];

export default function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    const isStaticProtected = staticRoutes.includes(pathname);

    const isDynamicProtected = dynamicRoutes.some(route => pathname.startsWith(route));

    if (!sessionStatus && (isStaticProtected || isDynamicProtected)) {
        const absoluteURL = new URL('/', req.nextUrl.origin);
        return NextResponse.redirect(absoluteURL.toString());
    }

    return NextResponse.next();
}
