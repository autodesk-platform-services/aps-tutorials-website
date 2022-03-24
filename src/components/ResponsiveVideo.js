import React from 'react';
import styles from './ResponsiveVideo.module.css';

export default function ResponsiveVideo({ src, title }) {
    return (
        <div className={styles.outer}>
            <iframe className={styles.inner} width="100%" height="100%" src={src} title={title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );
}
