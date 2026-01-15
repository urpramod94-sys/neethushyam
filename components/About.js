import Image from 'next/image';
import styles from '../styles/About.module.css';

export default function About() {
    return (
        <section id="about" className={`section ${styles.about}`}>
            <div className={`container ${styles.content}`}>
                <div className={styles.imageWrapper}>
                    {/* Placeholder for Neethu's portrait */}
                    <img
                        src="/images/profile.jpg"
                        alt="Neethu Shyam - Makeup Artist"
                        className={styles.image}
                    />
                </div>
                <div className={styles.textWrapper}>
                    <h2 className={styles.heading}>Hi, I'm Neethu Shyam</h2>
                    <p className={styles.description}>
                        I am a leading makeup artist based in Kochi, Kerala, specializing in bridal, film, and fashion makeup.
                        With a passion for enhancing natural beauty, I create timeless looks that make you feel confident and radiant.
                    </p>
                    <p className={styles.description}>
                        Whether it's your wedding day, a red carpet event, or an editorial shoot, I bring years of expertise
                        and a keen eye for detail to every appointment. I am available for bookings worldwide.
                    </p>

                    <div className={styles.stats}>
                        <div className={styles.statItem}>
                            <h3>5+</h3>
                            <p>Years Exp.</p>
                        </div>
                        <div className={styles.statItem}>
                            <h3>500+</h3>
                            <p>Happy Brides</p>
                        </div>
                        <div className={styles.statItem}>
                            <h3>100%</h3>
                            <p>Satisfaction</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
