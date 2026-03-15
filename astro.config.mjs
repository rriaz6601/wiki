import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://wiki-ranariaz.duckdns.org",
  integrations: [tailwind()],
});
