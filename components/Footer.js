import Link from 'next/link';
import styles from '../styles/Footer.module.css';

export default function Footer() {
    return (
        <footer id="contact" className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.column}>
                        <h3>Neethus Palette</h3>
                        <p style={{ color: '#ccc', lineHeight: '1.6' }}>
                            Professional makeup artistry for brides, celebrities, and special events.
                            Based in Kochi, Kerala. Available Worldwide.
                        </p>
                    </div>

                    <div className={styles.column}>
                        <h3>Contact Info</h3>
                        <a href="mailto:shyamneethu619@gmail.com" className={styles.link}>shyamneethu619@gmail.com</a>
                        <a href="tel:+918075868691" className={styles.link}>+91 807 586 8691</a>
                        <div className={styles.link}>Kochi, Kerala, India</div>
                    </div>

                    <div className={styles.column}>
                        <h3>Follow Me</h3>
                        <div className={styles.socials}>
                            {/* Replace # with real links */}
                            <a href="https://www.instagram.com/neethus_palette?igsh=ajR3MHl4a3Y1MWN2" target="_blank" className={styles.socialIcon}>Instagram</a>
                            <a href="#" className={styles.socialIcon}>Facebook</a>
                            <a href="#" className={styles.socialIcon}>Pinterest</a>
                        </div>
                        <div style={{ marginTop: '20px' }}>
                            <a href="https://wa.me/918075868691" target="_blank" className="btn-primary" style={{ display: 'inline-block', fontSize: '0.8rem' }}>
                                Chat on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} Neethu Shyam Makeup Artist. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
