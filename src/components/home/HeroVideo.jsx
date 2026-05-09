import { useRef } from "react";
import VideoLightbox from "./VideoLightbox";
import VIDEO_SRC from "../../assets/vid.mp4";

export default function HeroVideo() {
  const playCursorRef = useRef(null);
  const lightboxRef = useRef(null);

  const handleMouseMove = (e) => {
    if (playCursorRef.current) {
      playCursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    }
  };

  const handleMouseEnter = () => {
    if (playCursorRef.current) playCursorRef.current.style.opacity = "1";
  };

  const handleMouseLeave = () => {
    if (playCursorRef.current) playCursorRef.current.style.opacity = "0";
  };

  const handleVideoClick = () => {
    if (playCursorRef.current) playCursorRef.current.style.opacity = "0";
    lightboxRef.current?.open();
  };

  return (
    <>
      {/* PLAY cursor follower */}
      <div
        ref={playCursorRef}
        className="fixed pointer-events-none z-[9997] w-[9rem] h-[9rem] rounded-full bg-black flex items-center justify-center small-uppercase"
        style={{
          top: 0,
          left: 0,
          transform: "translate(-50%, -50%)",
          opacity: 0,
          transition: "opacity 0.2s ease",
          color: "#fff",
        }}
      >
        Play
      </div>

      {/* Mobile keeps the small fixed pt; desktop pushes the video down so
          ~20% of it peeks above the fold at scroll 0. The calc accounts for
          the heroText block stacked above it within heroRef. */}
      <div className="site-grid pt-[3rem] " style={{ maxWidth: "100%" }}>
        {/* Outer column — full-width, anchors the scroll arrow */}
        <div
          className="col-start-1 s:col-start-2 col-span-12 s:col-span-34 relative"
          style={{ cursor: "none" }}
          data-header-dark
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleVideoClick}
        >
          {/* Inner wrapper — CSS starts at 75% on desktop, Home.jsx ScrollTrigger expands to 100% */}
          <div className="hero-video-inner relative">
            <div className="aspect-box aspect-16-9" />
            <video
              src={VIDEO_SRC}
              loop
              autoPlay
              muted
              playsInline
              className="img-fill js-t-media"
              style={{ objectFit: "cover", clipPath: "inset(100% 0% 0% 0%)" }}
            />
          </div>

          {/* Scroll-down arrow — anchored to the TOP-RIGHT of the row. With the
              video starting at 75% width, the arrow occupies the empty 25% on
              the right side. On scroll it translates upward (off the row) and
              fades out as the video expands to 100%. */}
          <button
            type="button"
            className="js-hero-arrow hidden s:block absolute text-black"
            style={{ top: "0", right: "0", cursor: "default" }}
            onClick={(e) => {
              e.stopPropagation();
              window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
            }}
            aria-label="Scroll down"
          >
            <svg
              viewBox="0 0 104 103"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "10.4rem", height: "10.3rem" }}
            >
              <path
                d="M1 50.5L52 101.5L103 50.5"
                className="stroke-current"
                strokeWidth="1.5"
              />
              <path
                d="M52 101.5V0"
                className="stroke-current"
                strokeWidth="1.5"
              />
            </svg>
          </button>
        </div>
      </div>

      <VideoLightbox ref={lightboxRef} />
    </>
  );
}
