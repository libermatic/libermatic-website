import { z } from 'astro/zod';

export const projectSchema = z.object({
  title: z.string(),
  featureOrder: z.int().optional(),
  summary: z.string(),
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
});

export type Project = z.infer<typeof projectSchema>;
