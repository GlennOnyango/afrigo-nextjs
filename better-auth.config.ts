import { defineConfig } from "better-auth";

export default defineConfig({
  // Update these values as needed for your project
  adapter: "prisma",
  providers: [
    // Example: { id: "google", clientId: "...", clientSecret: "..." }
  ],
  // Add any other Better Auth config options here
});
