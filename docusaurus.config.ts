import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "sakiko",
  tagline: "A cross-platform, scalable chatbot framework",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://togawa-dev.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "togawa-dev", // Usually your GitHub org/user name.
  projectName: "@togawa-dev/sakiko", // Usually your repo name.

  onBrokenLinks: "log",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "cn",
    locales: ["cn"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/togawa-dev/togawa-dev.github.io/tree/main/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Togawa Dev",
      logo: {
        alt: "My Site Logo",
        src: "img/saki.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "sakiko",
          label: "Sakiko",
          position: "left",
        },
        {
          type: "docSidebar",
          sidebarId: "progressive",
          position: "left",
          label: "渐进式指南",
        },
        {
          type: "dropdown",
          label: "Sakiko 生态",
          position: "right",
          items: [
            {
              type: "docSidebar",
              sidebarId: "uika",
              label: "Uika",
            },
            {
              type: "docSidebar",
              sidebarId: "umiri",
              label: "Umiri",
            },
            {
              type: "docSidebar",
              sidebarId: "mutsumi",
              label: "Mutsumi",
            },
          ],
        },
        {
          href: "https://github.com/togawa-dev/sakiko",
          label: "Github",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "渐进式指南",
              to: "/docs/progressive",
            },
            {
              label: "社区内容目录",
              to: "/docs/community",
            },
            {
              label: "Umiri",
              to: "/docs/umiri",
            },
            {
              label: "Uika",
              to: "/docs/uika",
            },
            {
              label: "Mutsumi",
              to: "/docs/mutsumi",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Issue",
              href: "https://github.com/togawa-dev/sakiko/issues",
            },
            {
              label: "Discussions",
              href: "https://github.com/togawa-dev/sakiko/discussions",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/togawa-dev/sakiko",
            },
            {
              label: "Orgainzation",
              href: "https://github.com/togawa-dev",
            },
          ],
        },
      ],
      copyright: `残りの人生、わたくしに下さいと。<br><br>Copyright © ${new Date().getFullYear()} The Sakiko Project. All rights reserved. <br>Built with <a href="https://docusaurus.io"><img src="/img/docusaurus.svg" alt="Docusaurus" style="height:1.2em;vertical-align:text-bottom;" /> Docusaurus</a> & ♥️`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["bash"],
    },
  } satisfies Preset.ThemeConfig,

  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
};

export default config;
