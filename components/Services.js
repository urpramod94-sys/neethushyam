import styles from '../styles/Services.module.css';

const services = [
    {
        title: 'Bridal Makeup',
        desc: 'Complete bridal makeover including HD/Airbrush makeup, hair styling, and saree draping.',
        icon: '💍',
        price: 'Starts from ₹15,000'
    },
    {
        title: 'Party & Glam',
        desc: 'Stunning look for parties, engagements, and special events.',
        icon: '✨',
        price: 'Starts from ₹5,000'
    },
    {
        title: 'Editorial & Fashion',
        desc: 'Professional makeup for photoshoots, ad campaigns, and fashion shows.',
        icon: '📸',
        price: 'Custom Quote'
    },
    {
        title: 'Makeup Training',
        desc: 'Learn the art of makeup from basic to advanced professional courses.',
        icon: '🎓',
        price: 'Inquire for details'
    }
];

export default function Services() {
    return (
        <section id="services" className={`section ${styles.services}`}>
            <div className="container">
                <h2 className="section-title text-center">My Services</h2>
                <div className={styles.grid}>
                    {services.map((s, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.icon}>{s.icon}</div>
                            <h3 className={styles.cardTitle}>{s.title}</h3>
                            <p className={styles.cardDesc}>{s.desc}</p>
                            <div className={styles.price}>{s.price}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
