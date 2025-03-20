/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:npg_fJ3xkFId2mXc@ep-plain-surf-a5bzzrjd-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require',
    }
  };