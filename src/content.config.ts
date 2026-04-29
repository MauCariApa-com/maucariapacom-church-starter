import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const staffCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/staff" }),
  schema: z.object({
    name: z.string(),
    title: z.string(), // e.g., "Senior Pastor", "Deaconess"
    image: z.string().startsWith('/uploads/staff/'),
    email: z.string().email().optional(),
    phone: z.string().optional(),
    bio: z.string().optional(), // Short bio in frontmatter
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

const eventsCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/events" }),
  schema: z.object({
    title: z.string(),
    date: z.date(), // Event start date
    endDate: z.date().optional(), // Event end date
    time: z.string().optional(), // e.g., "09:00 AM - 11:00 AM"
    location: z.string(),
    image: z.string().startsWith('/uploads/events/'),
    summary: z.string(),
    tags: z.array(z.string()).optional(),
    registrationLink: z.string().url().optional(),
    registrationRequired: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const sermonsCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/sermons" }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(), // Auto-generated if not provided
    date: z.date(),
    speaker: z.string(),
    series: z.string().optional(),
    scripture: z.string().optional(),
    audioUrl: z.string().url().optional(),
    videoUrl: z.string().url().optional(),
    image: z.string().startsWith('/uploads/sermons/').optional(), // Thumbnail
    summary: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

const ministriesCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/ministries" }),
  schema: z.object({
    name: z.string(),
    logo: z.string().startsWith('/uploads/ministries/').optional(),
    summary: z.string(),
    coordinator: z.string().optional(),
    contact: z.string().optional(), // Email or text
    schedule: z.string().optional(),
    order: z.number().optional(),
    draft: z.boolean().default(false),
  }),
});

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    pubDate: z.date(),
    description: z.string(), // Short description for previews
    author: z.string().default("Church Staff"),
    image: z.object({
      url: z.string().startsWith('/uploads/blog/'),
      alt: z.string()
    }).optional(),
    tags: z.array(z.string()).default(["general"]),
    draft: z.boolean().default(false),
  }),
});

const siteInfoCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/siteInfo" }),
  schema: z.object({
    title: z.string(), // For identifying the content block
  }),
});

export const collections = {
  staff: staffCollection,
  events: eventsCollection,
  sermons: sermonsCollection,
  ministries: ministriesCollection,
  blog: blogCollection,
  siteInfo: siteInfoCollection,
};