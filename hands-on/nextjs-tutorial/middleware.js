export function middleware(request) {
    return Response.redirect(new URL("/", request.url));
}

export const config = {
    matcher: ["/about/:path*"],
};
