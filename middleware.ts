import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export default authMiddleware({
    publicRoutes: ["/"],
    ignoredRoutes: ["/api/(.*)"],
    afterAuth(auth, req, evt) {
        const { userId, isPublicRoute } = auth;

        if (!userId && !isPublicRoute) {
            return NextResponse.redirect(new URL("/", req.url));
        }

        if (userId && req.nextUrl.pathname === "/") {
            return NextResponse.redirect(new URL("/dashboard", req.url));
        }

        // Otherwise, proceed as normal
        return NextResponse.next();
    },
});

export const config = {
    matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
