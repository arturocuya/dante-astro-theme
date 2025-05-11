import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        excerpt: z.string().optional(),
        publishDate: z.string().transform((str) => new Date(str)),
        updatedDate: z.string().optional().transform((str) => str ? new Date(str) : undefined),
        isFeatured: z.boolean().optional().default(false),
        tags: z.array(z.string()).optional().default([]),
        seo: z.record(z.any()).optional(),
    }),
});

const pageCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        excerpt: z.string().optional(),
        publishDate: z.string().transform((str) => new Date(str)),
        updatedDate: z.string().optional().transform((str) => str ? new Date(str) : undefined),
        isFeatured: z.boolean().optional().default(false),
        tags: z.array(z.string()).optional().default([]),
        seo: z.record(z.any()).optional(),
    }),
});

export const collections = {
    'blog': blogCollection,
    'page': pageCollection,
};
