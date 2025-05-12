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
    title: 'Grau.Pe',
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
            text: 'Biografia',
            href: '/biografia'
        },
        {
            text: 'Videos',
            href: '/videos'
        },
        {
            text: 'Bibliografia',
            href: '/bibliografia'
        },
        {
            text: 'Editores',
            href: '/equipo-editor'
        },
        {
            text: 'ISO 21001',
            href: 'https://www.iso21001.us/'
        },
        {
            text: 'Contacto',
            href: '/contacto'
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
        {
            text: 'Contacto',
            href: '/contacto'
        }
    ],
    socialLinks: [
        {
            text: 'Visitanos en Facebook',
            href: 'https://www.facebook.com/Miguel.Grau.1834'
        },
    ],
    postsPerPage: 4
} satisfies SiteConfig;
