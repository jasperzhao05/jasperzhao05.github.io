import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Shared frontmatter shape for both note collections.
const noteSchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  description: z.string().optional(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
});

const researchNotes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research-notes' }),
  schema: noteSchema,
});

const investingNotes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/investing-notes' }),
  schema: noteSchema,
});

export const collections = { researchNotes, investingNotes };
