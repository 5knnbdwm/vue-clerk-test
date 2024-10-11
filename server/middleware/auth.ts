// server/middleware/auth.ts
import { getAuth } from "#clerk";
// import { clerkClient, getAuth } from "#clerk";

export default defineEventHandler(async (event) => {
  if (event.node.req.url?.startsWith("/api")) {
    const publicRoutes = ["/api/public", "/api/another-public-route"];

    if (publicRoutes.includes(event.node.req.url || "")) {
      return;
    }

    console.log("middleware getAuth:", getAuth(event)); // returns `undefined`
    // const { userId } = getAuth(event);

    // if (!userId) {
    //   throw createError({
    //     statusCode: 401,
    //   });
    // }

    // event.context.userId = userId;
  }
});
