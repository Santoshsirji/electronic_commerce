

//** An array of routes that are accessible to the public. These routes do not require authentication. @type { String[]}  */


export const publicRoutes = [
    "/",
    "/sofas",
    `/sofas/:sofaId`
];

//** An array of routes that are  accessible to authenticated users only. These routes require authentication in order to access them. @type { String[]} */

export const authRoutes = [
    "/auth/login",
    "/auth/register",
    "/auth/error"
];

//** The prefix for APi authentication routes.  Routes that start with this prefix are used for API authentication purposes @type { String } */*/
export const apiAuthPrefix = "/api/auth";

//**
 // The default redirect path after logging in 
 // @type { String}
// */
export const DEFAULT_LOGIN_REDIRECT = "/settings"