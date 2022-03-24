import React from 'react';
import ReactPlayer from 'react-player';
import styles from './ResponsiveVideo.module.css';

export default function ResponsiveVideo({ src }) {
    return (
        <div className={styles.wrapper}>
            <ReactPlayer className={styles.player} url={src} playing={true} loop={true} width='100%' height='100%' />
        </div>
    );
}
