import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const client = new MongoClient(process.env.BETTET_AUTH_MONGODB_URL);
const db = client.db("game-hub-db");

export const auth = betterAuth({
    emailAndPassword: {
        enabled: true,
    },


    socialProviders: {
        google: {
            clientId: process.env.BETTER_GOOGLE_CLIENT_ID,
            clientSecret: process.env.BETTER_GOOGLE_CLIENT_SECRET,
        },
    },
    database: mongodbAdapter(db, {
        client,
    }),
});