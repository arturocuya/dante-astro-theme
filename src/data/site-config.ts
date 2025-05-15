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

export default {
    website: 'https://dante-grau.vercel.app',
    title: 'Miguel Grau - El caballero de los mares',
    subtitle: 'Todo sobre el caballero de los mares',
    description: 'Todo sobre el caballero de los mares',
    image: {
        src: '/grau-pe-logo.png',
        alt: 'Todo sobre el caballero de los mares'
    },
    headerNavLinks: [
        {
            text: 'Inicio',
            href: '/'
        },
        {
            text: 'Videos',
            href: '/videos'
        },
        {
            text: 'ISO 21001',
            href: 'https://www.iso21001.us/'
        }
    ],
    footerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'ISO 21001',
            href: 'https://www.iso21001.us/'
        },
    ],
    socialLinks: [
        {
            text: 'Visitanos en Facebook',
            href: 'https://www.facebook.com/Miguel.Grau.1834'
        },
    ]
} satisfies SiteConfig;
