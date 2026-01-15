import Link from 'next/link';
import styles from '../styles/Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1 className={styles.title}>Enhancing Beauty with Professional Makeup Artistry</h1>
                <p className={styles.subtitle}>Bridal | Editorial | Glam | Events</p>
                <div className={styles.ctaGroup}>
                    <Link href="#booking" className="btn-primary">
                        Book an Appointment
                    </Link>
                    <Link href="#portfolio" className={styles.btnOutline}>
                        View Portfolio
                    </Link>
                </div>
            </div>
        </section>
    );
}
