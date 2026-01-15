import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Booking from '../components/Booking';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <>
            <Head>
                <title>Neethu Shyam | Professional Makeup Artist Kochi</title>
                <meta name="description" content="Luxury makeup artistry by Neethu Shyam. Specializing in Bridal, Editorial, and Party makeup in Kochi, Kerala and worldwide." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <main>
                <Hero />
                <About />
                <Services />
                <Portfolio />
                <Booking />
            </main>

            <Footer />
        </>
    );
}
