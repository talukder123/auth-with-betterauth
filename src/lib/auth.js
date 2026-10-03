import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

import { Resend } from 'resend';

const client = new MongoClient(process.env.BETTET_AUTH_MONGODB_URL);
const db = client.db("game-hub-db");

const resend = new Resend(process.env.RESEND_API_KEY);

export const auth = betterAuth({
    emailAndPassword: {
        enabled: true,
        requireEmailVerification: true,
    },


    socialProviders: {
        google: {
            clientId: process.env.BETTER_GOOGLE_CLIENT_ID,
            clientSecret: process.env.BETTER_GOOGLE_CLIENT_SECRET,
        },
    },
    emailVerification: {
        sendVerificationEmail: async ({ user, url, token }, request) => {
            void resend.emails.send({
                from: 'Acme <onboarding@resend.dev>',
                to: user.email,
                subject: 'Verify your email',
               html: `<h2>Click the link to verify your email: ${url}</h2>`
            });
        },
        sendOnSignIn: true,
        autoSignInAfterVerification:true,
        expiresIn: 60*10
    },
    database: mongodbAdapter(db, {
        client,
    }),
});