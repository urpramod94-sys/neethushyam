import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import styles from '../styles/Portfolio.module.css';

const projects = [
    { src: '/images/bride-4.jpg', category: 'Bridal', title: 'South Indian Look' },
    { src: '/images/bride-1.jpg', category: 'Bridal', title: 'South Indian Bride' },
    { src: '/images/bride-2.jpg', category: 'Bridal', title: 'Traditional Look' },
    { src: '/images/bride-3.jpg', category: 'Bridal', title: 'Wedding Glow' },
    { src: '/images/reception-1.jpg', category: 'Reception', title: 'White Gown Elegance' },
    { src: '/images/reception-2.jpg', category: 'Reception', title: 'Reception Glam' },
    { src: '/images/reception-3.jpg', category: 'Reception', title: 'Couple Portrait' },
    { src: '/images/fashion-1.jpg', category: 'Editorial', title: 'Traditional Fashion' },
    { src: '/images/hair-1.jpg', category: 'Hair Styling', title: 'Elegant Updo' },
    { src: '/images/hair-2.jpg', category: 'Hair Styling', title: 'Bridal Bun' },
    { src: '/images/hair-3.jpg', category: 'Hair Styling', title: 'Braided Style' },
    { src: '/images/hair-4.jpg', category: 'Hair Styling', title: 'Textured Braid' },
    { src: '/images/hair-5.jpg', category: 'Hair Styling', title: 'Modern Braid' },
    { src: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f', category: 'Editorial', title: 'Fashion Shoot' },
    { src: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702', category: 'Party', title: 'Evening Glam' },
];

export default function Portfolio() {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'Bridal', 'Reception', 'Editorial', 'Hair Styling', 'Party'];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    const slides = filteredProjects.map(p => ({ src: p.src }));

    return (
        <section id="portfolio" className={`section ${styles.portfolio}`}>
            <div className="container">
                <h2 className="section-title text-center">Featured Work</h2>

                <div className={styles.tabs}>
                    {categories.map(c => (
                        <button
                            key={c}
                            className={`${styles.tab} ${filter === c ? styles.activeTab : ''}`}
                            onClick={() => setFilter(c)}
                        >
                            {c}
                        </button>
                    ))}
                </div>

                <div className={styles.gallery}>
                    {filteredProjects.map((item, i) => (
                        <div key={i} className={styles.item} onClick={() => { setIndex(i); setOpen(true); }}>
                            <img src={item.src} className={styles.image} alt={item.title} />
                            <div className={styles.overlay}>
                                <span className={styles.overlayText}>{item.title}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    index={index}
                    slides={slides}
                />
            </div>
        </section>
    );
}
