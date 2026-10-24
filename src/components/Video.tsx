import { useState } from "react";
import { VIDEO } from "../site.config";
import { track } from "../lib/analytics";

/** Reproductor del video de Roy. YouTube se carga solo al tocar (la página abre más rápido). */
export function VideoRoy() {
  const [activo, setActivo] = useState(false);
  const { youtubeId, mp4, poster } = VIDEO;

  if (mp4) {
    return (
      <div className="video-box">
        <video
          controls
          playsInline
          preload="metadata"
          poster={poster || undefined}
          onPlay={() => track("video_play")}
        >
          <source src={mp4} type="video/mp4" />
        </video>
      </div>
    );
  }

  if (youtubeId) {
    return (
      <div className="video-box">
        {activo ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
            title="Video de Roy sobre cómo afiliarte a Santa Natura"
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            className="video-facade"
            aria-label="Reproducir el video de Roy"
            onClick={() => {
              setActivo(true);
              track("video_play");
            }}
            style={{ backgroundImage: `url(${poster || `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`})` }}
          >
            <span className="play" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="34" height="34">
                <path d="M8 5v14l11-7z" fill="currentColor" />
              </svg>
            </span>
            <span className="video-hint">Toca para ver el video</span>
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="video-box">
      <div className="img-marcador video-marcador" role="img" aria-label="Video pendiente">
        <span>[VIDEO_DE_ROY — pega el enlace de YouTube en site.config.ts]</span>
      </div>
    </div>
  );
}
