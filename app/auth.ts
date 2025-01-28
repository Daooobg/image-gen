import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import Database from "better-sqlite3";

export const auth = betterAuth({
    database: new Database("./app.db"),
    emailAndPassword: {
        enabled: true,
    },
    plugins: [nextCookies()],
});
