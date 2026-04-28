import { forwardRef, useImperativeHandle, useRef } from "react";
import gsap from "gsap";
import VIDEO_SRC from "../../assets/vid.mp4";

const VideoLightbox = forwardRef(function VideoLightbox(props, ref) {
  const overlayRef = useRef(null);
  const videoRef = useRef(null);
  const cursorRef = useRef(null);
  const closingRef = useRef(false);

  // Called directly from the click handler — stays within the user gesture,
  // so the browser allows audio without being blocked.
  useImperativeHandle(ref, () => ({
    open() {
      if (!overlayRef.current) return;
      closingRef.current = false;
      overlayRef.current.style.clipPath = "inset(0 100% 0 0)";
      overlayRef.current.style.display = "flex";
      if (cursorRef.current) cursorRef.current.style.opacity = "1";
      if (videoRef.current) {
        videoRef.current.muted = false;
        videoRef.current.play();
      }
      gsap.to(overlayRef.current, {
        clipPath: "inset(0 0% 0 0)",
        duration: 0.9,
        ease: "expo.inOut",
      });
    },
  }));

  const handleClose = () => {
    if (closingRef.current) return;
    closingRef.current = true;

    if (cursorRef.current) cursorRef.current.style.opacity = "0";
    gsap.to(videoRef.current, { opacity: 0, duration: 0.35 });

    gsap.to(overlayRef.current, {
      clipPath: "inset(0 100% 0 0)",
      duration: 0.9,
      ease: "expo.inOut",
      delay: 0.1,
      onComplete: () => {
        overlayRef.current.style.display = "none";
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
        gsap.set(videoRef.current, { opacity: 1 });
      },
    });
  };

  const handleMouseMove = (e) => {
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    }
  };

  return (
    <>
      {/* STOP cursor — fixed at viewport level, outside overlay stacking context */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[10001] w-[9rem] h-[9rem] rounded-full bg-white flex items-center justify-center small-uppercase"
        style={{
          top: 0,
          left: 0,
          transform: "translate(-50%, -50%)",
          opacity: 0,
          transition: "opacity 0.2s ease",
          color: "#000",
        }}
      >
        Stop
      </div>

      {/* Full-screen lightbox overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[9998] bg-black flex items-center justify-center"
        style={{ display: "none", cursor: "none" }}
        onMouseMove={handleMouseMove}
        onClick={handleClose}
      >
        <video
          ref={videoRef}
          src={VIDEO_SRC}
          loop
          playsInline
          className="w-full h-auto object-cover"
        />
      </div>
    </>
  );
});

export default VideoLightbox;
