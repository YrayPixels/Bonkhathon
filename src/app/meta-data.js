import { Metadata, Viewport } from "next";

const APP_NAME = "ChoreChamp";
const APP_DEFAULT_TITLE = "ChoreChamp - Smart Parenting App";
const APP_TITLE_TEMPLATE = "%s - PWA App";
const APP_DESCRIPTION = 'ChoreChamp is a parent children application that helps parents train their children in finacial literacy by rewarding them for tasks done';
export const metadata = {
    title: { default: APP_NAME, template: '%s - ChoreChamp' },

    description: APP_DESCRIPTION,
    icons: {
        icon: '/images/favicon-32x32.png',
    },
    manifest: "/manifest.json",
    appleWebApp: {
        capable: true,
        statusBarStyle: "default",
        title: APP_DEFAULT_TITLE,
        // startUpImage: [],
    },
    formatDetection: {
        telephone: false,
    },
    openGraph: {
        type: "website",
        siteName: APP_NAME,
        title: {
            default: APP_DEFAULT_TITLE,
            template: APP_TITLE_TEMPLATE,
        },
        description: APP_DESCRIPTION,
    },
    twitter: {
        card: "summary",
        title: {
            default: APP_DEFAULT_TITLE,
            template: APP_TITLE_TEMPLATE,
        },
        description: APP_DESCRIPTION,
    },
};
