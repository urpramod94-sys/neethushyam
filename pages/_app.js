import '../styles/globals.css'
import { Playfair_Display, Inter } from 'next/font/google'

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-heading',
    display: 'swap',
})

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-body',
    display: 'swap',
})

export default function App({ Component, pageProps }) {
    return (
        <div className={`${playfair.variable} ${inter.variable}`}>
            <Component {...pageProps} />
        </div>
    )
}
