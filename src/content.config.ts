import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    featureOrder: z.int().optional(),
    featureSummary: z.string().optional(),
    category: z.string(),
    client: z.string(),
    year: z.int().optional(),
    stack: z.string(),
    stats: z
      .array(
        z.object({
          label: z.string(),
          value: z.any(),
        })
      )
      .optional(),
    repo: z.string().optional(),
    url: z.string().optional(),
    pubDate: z.coerce.date(),
  }),
});

export const collections = { projects };
