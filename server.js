import dotenv from "dotenv";
dotenv.config({ path: ".env" });

import express from "express";
import cors from "cors";
import { Resend } from "resend";

const app = express();

app.use(cors());
app.use(express.json());

// ✅ FIRST check after config
console.log("Loaded key:", process.env.RESEND_API_KEY ? "YES" : "NO");

// ✅ THEN validate
if (!process.env.RESEND_API_KEY) {
  console.error("❌ RESEND_API_KEY is missing. Check your .env file.");
  process.exit(1);
}

const resend = new Resend(process.env.RESEND_API_KEY);