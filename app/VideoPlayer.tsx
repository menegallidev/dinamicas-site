"use client";

import { useRef, useState } from "react";

type VideoPlayerProps = {
  className: string;
  poster: string;
  src: string;
  title: string;
};

export function VideoPlayer({ className, poster, src, title }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  function play() {
    const video = videoRef.current;
    setStarted(true);
    if (video) {
      video.controls = true;
      void video.play().catch(() => undefined);
    }
  }

  return (
    <div className={`video-card ${className}`}>
      <video ref={videoRef} playsInline preload="metadata" poster={poster} src={src} />
      {!started ? (
        <button className="video-hitarea" type="button" aria-label={`Reproduzir ${title}`} onClick={play} />
      ) : null}
    </div>
  );
}
