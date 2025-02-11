export { default } from "next-auth/middleware"

export const config = { matcher: ["/data/:path*", "/settings/:path*", "/api/:path*"] }