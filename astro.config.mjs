// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

// @type-check enabled!
// VSCode and other TypeScript-enabled text editors will provide auto-completion,
// helpful tooltips, and warnings if your exported object is invalid.
// You can disable this by removing "@ts-check" and `@type` comments below.

// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  // Comment out "renderers: []" to enable Astro's default component support.
  buildOptions: {
    site: "http://piero-vic.github.io/",
    sitemap: true,
    pageUrlFormat: "directory",
  },
  renderers: ["@astrojs/renderer-react"],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
  markdownOptions: {
    render: [
      "@astrojs/markdown-remark",
      {
        syntaxHighlight: "shiki",
        shikiConfig: {
          theme: "material-palenight",
          langs: [],
          wrap: false,
        },
      },
    ],
  },
});
