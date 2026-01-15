import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.navContent}`}>
                <Link href="/" className={styles.logo}>
                    NEETHU SHYAM
                </Link>
                <div className={styles.links}>
                    <Link href="#about" className={styles.link}>About</Link>
                    <Link href="#services" className={styles.link}>Services</Link>
                    <Link href="#portfolio" className={styles.link}>Portfolio</Link>
                    <Link href="#contact" className={styles.link}>Contact</Link>
                </div>
                <Link href="#booking" className={`${styles.link} btn-primary ${styles.bookBtn}`}>
                    Book Now
                </Link>
            </div>
        </nav>
    );
}
