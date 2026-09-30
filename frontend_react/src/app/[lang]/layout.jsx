import { notFound } from 'next/navigation'
import { LanguageProvider, LANGUAGES } from '../../i18n'
import { ThemeProvider } from '../../theme'
import { themeScript } from '../../theme/themeScript'
import en from '../../i18n/en'
import fr from '../../i18n/fr'
import '../../index.css'
import '../../App.scss'

const SITE_URL = 'https://vincent-dellalibera.netlify.app'
const dictionaries = { en, fr }

export const dynamicParams = false

export const generateStaticParams = () => LANGUAGES.map((lang) => ({ lang }))

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#313bac',
}

export const generateMetadata = async ({ params }) => {
    const { lang } = await params
    const dict = dictionaries[lang] ?? en
    const title = dict['meta.title']
    const description = dict['meta.description']
    return {
        metadataBase: new URL(SITE_URL),
        title,
        description,
        alternates: { canonical: '/' },
        icons: {
            icon: '/favicon.ico',
            apple: '/apple-touch-icon.png',
        },
        openGraph: {
            type: 'website',
            url: '/',
            title,
            description,
            locale: lang === 'fr' ? 'fr_FR' : 'en_US',
            images: [{ url: '/og-image.jpg', width: 1200, height: 563 }],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: ['/og-image.jpg'],
        },
    }
}

export default async function RootLayout({ children, params }) {
    const { lang } = await params
    if (!LANGUAGES.includes(lang)) notFound()

    return (
        // data-theme is set by themeScript before React hydrates
        <html lang={lang} suppressHydrationWarning>
            <head>
                <script dangerouslySetInnerHTML={{ __html: themeScript }} />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin=""
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
                />
            </head>
            <body>
                <ThemeProvider>
                    <LanguageProvider initialLanguage={lang}>
                        {children}
                    </LanguageProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}
