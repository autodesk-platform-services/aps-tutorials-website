import React from "react";
import styles from "./YouTubeVideo.module.css";

/**
 * YouTubeVideo React component embeds a responsive YouTube video using an iframe.
 *
 * @param {Object} props
 * @param {string} props.id - The YouTube video ID.
 * @param {string} [props.title="YouTube video"] - The video title for accessibility.
 * @param {string} [props.si] - Optional share identifier for analytics.
 *
 * @example
 * // Basic usage with required video ID:
 * <YouTubeVideo id="dQw4w9WgXcQ" />
 *
 * @example
 * // With a custom title and si parameter:
 * <YouTubeVideo id="dQw4w9WgXcQ" title="Rick Astley - Never Gonna Give You Up" si="your_session_id" />
 */
export default function YouTubeVideo({ id, title = "YouTube video", si = undefined }) {
  return (
    <div className={styles.videoWrapper}>
      <iframe
        className={styles.videoIframe}
        src={`https://www.youtube.com/embed/${id}` + (si ? `?si=${si}` : ``)}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
