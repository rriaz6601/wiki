import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://ranariaz.duckdns.org",
  base: "/wiki",
  integrations: [tailwind()],
});
