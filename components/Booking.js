import styles from '../styles/Booking.module.css';

export default function Booking() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your inquiry! We will get back to you shortly.');
    };

    return (
        <section id="booking" className={`section ${styles.booking}`}>
            <div className="container">
                <h2 className="section-title text-center">Book an Appointment</h2>
                <p className="text-center" style={{ marginBottom: '40px', color: '#666' }}>
                    Interested in booking me for your special day? Fill out the form below.
                </p>

                <div className={styles.formContainer}>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Name</label>
                            <input type="text" className={styles.input} placeholder="Your Name" required />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Email Address</label>
                            <input type="email" className={styles.input} placeholder="shyamneethu619@gmail.com" required />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Phone Number</label>
                            <input type="tel" className={styles.input} placeholder="+91 8075868691" required />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Service Type</label>
                            <select className={styles.select}>
                                <option>Bridal Makeup</option>
                                <option>Party Makeup</option>
                                <option>Engagement</option>
                                <option>Editorial / Shoot</option>
                                <option>Training Inquiry</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Event Date</label>
                            <input type="date" className={styles.input} />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Message</label>
                            <textarea className={styles.textarea} placeholder="Tell me more about your requirements..."></textarea>
                        </div>

                        <button type="submit" className={`btn-primary ${styles.submitBtn}`}>Send Inquiry</button>
                    </form>
                </div>
            </div>
        </section>
    );
}
