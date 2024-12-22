"use client"
import styles from "./Body.module.css"
import Image from "next/image"
import '@fortawesome/fontawesome-free/css/all.min.css';
export default function Body() {
    return (
        <div className={`${styles.cardContainer} ${styles.centered}`}>
            <Image src="/resumeimage.png" alt="Background" layout="fill" objectFit="cover"
                className={styles["background-image"]}></Image>
            <div className={styles['card']}>
                <div className={styles['profile-image']}>
                    <Image src="/resume.jpg" alt="Resume Builder" height={400} width={400} />
                </div>
                <div className={styles['card-content']}>
                    <div className={styles['hello-label']}>HELLO</div>
                    <h1 className="text-5xl mb-1 mt-0 font-bold">I&apos;m Sufyan Ali</h1>
                    <p>Developer and Startup entrepreneur</p>
                    <div className={styles.details}>
                        <div className={styles['detail-row']}>
                            <span className={styles['detail-label']}>AGE</span>
                            <span className={styles['detail-value']}>29</span>
                        </div>
                        <div className={styles['detail-row']}>
                            <span className={styles['detail-label']}>ADDRESS</span>
                            <span className={styles['detail-value']}
                            >75230, Karachi, Pakistan</span>
                        </div>
                        <div className={styles['detail-row']}>
                            <span className={styles['detail-label']}>E-MAIL</span>
                            <span className={styles['detail-value']}>sufi404040@gmail.com</span>
                        </div>
                        <div className={styles['detail-row']}>
                            <span className={styles['detail-label']}>PHONE</span>
                            <span className={styles['detail-value']}>+92 312 8602314</span>
                        </div>
                        <div className={styles['detail-row']}>
                            <span className={styles['detail-label']}>FREELANCE</span>
                            <div className={styles['freelance-dates']}>
                                <span className={styles['detail-value']}>till March 25, 2016</span><br />
                                <span className={styles['detail-value']}>till April 15, 2016</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles['social-icons']}>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-linkedin"></i></a>
                        <a href="#"><i className="fab fa-google-plus"></i></a>
                        <a href="#"><i className="fab fa-behance"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}