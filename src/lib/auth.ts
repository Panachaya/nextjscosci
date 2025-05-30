import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import db from "@/db"; 
import { account, session, user, verification } from "@/db/schema";
export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "mysql",
        schema:{user,account,session,verification},
        usePlural:false
    }),
    emailAndPassword:{
        enabled:true,
        autoSignIn:false,
        requireEmailVerification:false,
        minPasswordLength: 6
    }
})