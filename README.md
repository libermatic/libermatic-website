# libermatic.

Marketing site for **libermatic** - fast, unbreakable web systems. Built with [Astro 7](https://astro.build) and [Tailwind CSS 4.x](https://tailwindcss.com), statically generated with zero client-side framework bloat.

## Tech Stack

- **Astro 7** - static site generation, content collections
- **Tailwind CSS 4.x** - via the Vite plugin
- **TypeScript** - strict mode (`astro check`)
- **Prettier** - formatting with `prettier-plugin-astro` and `prettier-plugin-tailwindcss`
- **Node.js** >= 22.23.4

## Project Structure

Pages in `src/pages/` map 1:1 to routes. Project case studies live in `src/content/projects/` and are typed by the collection schema in `src/content.config.ts`.

## Getting Started

```sh
npm install
```

## Development

Start the dev server in background mode:

```sh
npm run dev
```

## Commands

All commands are run from the root of the project:

| Command              | Action                                              |
| :------------------- | :-------------------------------------------------- |
| `npm install`        | Installs dependencies                               |
| `npm run dev`        | Starts local dev server at `localhost:4321`         |
| `npm run check`      | Type-checks the project with `astro check`          |
| `npm run format`     | Formats `src/` and `public/` with Prettier          |
| `npm run format:check` | Verifies formatting without writing               |
| `npm run build`      | Builds the production site to `./dist/`             |
| `npm run preview`    | Previews the production build locally               |
| `npm run astro ...`  | Run Astro CLI commands (`astro add`, `astro sync`)  |

## Workflow

Before every commit, the code must pass:

```sh
npm run check
npm run format
npm run build
```

See [`AGENTS.md`](./AGENTS.md) for the full agent instructions and links to the git/development workflow docs.
