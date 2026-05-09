import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useInitialLoad } from "../hooks/usePageReveal";
import HeroText from "../components/home/HeroText";
import HeroVideo from "../components/home/HeroVideo";
import HomeCtaSection from "../components/home/HomeCtaSection";
import WorksList from "../components/home/WorksList";
import Footer from "../components/layout/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const overlayRef = useRef(null);
  const heroRef = useRef(null);

  useInitialLoad(overlayRef, null, []);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 900px)", () => {
        const words = Array.from(
          heroRef.current.querySelectorAll(".js-hero-word"),
        );
        const arrow = heroRef.current.querySelector(".js-hero-arrow");
        const videoInner = heroRef.current.querySelector(".hero-video-inner");
        if (!videoInner) return;

        // Trigger off the video itself so the expansion completes exactly when
        // the video's top edge reaches the top of the viewport.
        const tl = gsap.timeline({
          defaults: { duration: 1, ease: "none" },
          scrollTrigger: {
            trigger: videoInner,
            start: "top bottom",
            end: "top top",
            scrub: 1,
          },
        });

        // Words: subtle 5% drift in alternating directions
        words.forEach((word, i) => {
          tl.to(word, { xPercent: i % 2 === 0 ? 5 : -5 }, 0);
        });

        // Video inner wrapper expands 75% → 100% over full scroll
        tl.to(videoInner, { width: "100%" }, 0);

        // Arrow lifts upward IN SYNC with the video expanding so the two
        // never overlap — both run from progress 0 across the full timeline.
        // The fade kicks in over the last third so the arrow has clearly
        // moved out of the way before disappearing.
        if (arrow) {
          tl.to(arrow, { y: "-18rem", duration: 1, ease: "none" }, 0);
          tl.to(arrow, { autoAlpha: 0, duration: 0.35 }, 0.65);
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div data-page="home" className="relative min-h-screen">
      {/* White intro overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-white z-[9999] pointer-events-none"
      />

      {/* Hero section — single ScrollTrigger drives all hero animations */}
      <div ref={heroRef}>
        <div className="pt-[17.5rem] s:pt-[15rem]">
          <HeroText />
        </div>
        <HeroVideo />
      </div>

      <HomeCtaSection />
      <WorksList />
      <Footer />
    </div>
  );
}
