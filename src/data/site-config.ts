import { getCollection } from 'astro:content';
import type { Image, Link } from './types';

export type Hero = {
    title: string;
    subtitle?: string;
    image?: Image;
};

export type Subscribe = {
    title: string;
    description: string;
    buttonText: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
};

// Get all pages from the content directory
const pages = await getCollection('pages');
const pageLinks = pages.map((page) => ({
    text: page.data.title,
    href: `/${page.id}`
}));

export default {
    website: 'https://dante-grau.vercel.app',
    title: 'Dante Grau',
    subtitle: 'Personal Website',
    description: 'Personal website of Dante Grau',
    image: {
        src: '/dante-preview.jpg',
        alt: 'The preview of the site'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        ...pageLinks
    ],
    footerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        ...pageLinks
    ],
    socialLinks: [
        {
            text: 'GitHub',
            href: 'https://github.com/dante-grau'
        },
        {
            text: 'Twitter',
            href: 'https://twitter.com/dante_grau'
        },
        {
            text: 'LinkedIn',
            href: 'https://linkedin.com/in/dante-grau'
        }
    ],
    postsPerPage: 4
} satisfies SiteConfig;
