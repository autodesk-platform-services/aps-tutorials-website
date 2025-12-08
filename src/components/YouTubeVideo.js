import React from 'react';
import styles from './YouTubeVideo.module.css';

export default function YouTubeVideo({ videoId, title = "YouTube video" }) {
    return (
        <div className={styles.videoWrapper}>
            <iframe
                className={styles.videoIframe}
                src={`https://www.youtube.com/embed/${videoId}`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    );
}
