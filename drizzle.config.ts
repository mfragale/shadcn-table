import { env } from "@/env.js";
import type { Config } from "drizzle-kit";

import { databasePrefix } from "@/lib/constants";

export default {
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  out: "./drizzle",
  strict: true,
  verbose: true,
  dbCredentials: {
    password: env.DB_PASSWORD,
    user: env.DB_USER,
    database: env.DB_NAME,
    host: env.DB_HOST,
    ssl: false,
  },
  tablesFilter: [`${databasePrefix}_*`],
} satisfies Config;
