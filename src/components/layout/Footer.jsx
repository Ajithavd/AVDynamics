import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../ui/Button";

gsap.registerPlugin(ScrollTrigger);

function ExternalArrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 33 32"
      className="fill-current"
      style={{
        width: "0.55em",
        marginLeft: "0.2em",
        marginBottom: "0.2em",
        height: "auto",
        display: "inline-block",
      }}
    >
      <path d="m3.3 4.7 21.1.1L0 28.6 3.5 32 28.1 8l.1 20.8 4.9-4.7L33 0H8.2L3.3 4.7z" />
    </svg>
  );
}

const navLinks = [
  { label: "Home", to: "/" },
  // { label: 'Work', to: '/works' },
  // { label: 'About', to: '/about' },
  { label: "Contact", to: "/contact" },
  { label: "Lab", to: "/lab" },
];

const socialLinks = [
  {
    short: "Ig",
    full: "Instagram",
    href: "https://www.instagram.com/avdynamics",
  },
  { short: "Ev", full: "Events", href: "https://www.avarae.in/" },
];

export default function Footer() {
  const footerRef = useRef(null);
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Middle section (address/contact/social) is rendered with no animation —
      // it's the first thing visible. Top (CTA + nav) and bottom (copyright)
      // reveal progressively, scrubbed to scroll position: as the user scrolls
      // through the footer, the top expands upward from the middle and the
      // bottom expands downward from the middle, both tied 1:1 to scroll.
      gsap.fromTo(
        topRef.current,
        { clipPath: "inset(100% 0 0 0)" },
        {
          clipPath: "inset(0% 0 0 0)",
          ease: "none",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
            end: "bottom bottom",
            scrub: 0.4,
          },
        },
      );

      gsap.fromTo(
        bottomRef.current,
        { clipPath: "inset(0 0 100% 0)" },
        {
          clipPath: "inset(0 0 0% 0)",
          ease: "none",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
            end: "bottom bottom",
            scrub: 0.4,
          },
        },
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="foot pb-[4rem]">
      {/* CTA + nav — clips inward from bottom, revealing top→down */}
      <div ref={topRef}>
        <div className="site-grid pt-[15rem] s:pt-[25rem]">
          {/* CTA */}
          <div className="col-span-12 s:col-start-7 s:col-span-10 flex flex-col items-start s:-mt-[1rem] border-b s:border-b-0 border-current pb-[4rem] s:pb-0">
            <p
              className="font-heading leading-[1.1] tracking-tight-3"
              style={{
                fontSize: "clamp(2.4rem, 3vw, 5.2rem)",
                maxWidth: "75rem",
              }}
            >
              Ready to build the smarter, connected future together?
            </p>
            <div className="mt-[6rem]">
              <Button to="/contact" variant="dark">
                Contact
              </Button>
            </div>
          </div>

          {/* Footer nav */}
          <div className="col-span-12 s:col-start-23 s:col-span-6 s:pl-[2rem] mt-[4rem] s:mt-0">
            <ul className="flex flex-col items-start">
              {navLinks.map(({ label, to }) => (
                <li key={label} className="trigger">
                  <Link
                    to={to}
                    className="small-uppercase underlined text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Address / contact / social — always visible, the "mid" anchor */}
      <div className="site-grid">
        <div className="col-span-12 s:col-start-7 s:col-end-31 pt-[4rem] s:pt-[8rem] grid grid-cols-12 gap-x-[1.6rem] gap-y-[4rem] s:gap-y-0">
          {/* Address */}
          <div className="col-span-12 s:col-span-4 flex flex-col s:border-t border-white/20">
            <span className="block tiny-uppercase mb-[3rem] s:mt-[4rem] text-white/60">
              Our address
            </span>
            <address className="small-uppercase text-white flex flex-col leading-[1.8]">
              ECO Park
              <br />
              Chetpet
              <br />
              Chennai, Tamil Nadu
              <br />
              India
            </address>
          </div>

          {/* Get in touch */}
          <div className="col-span-12 s:col-span-4 flex flex-col s:border-t border-white/20">
            <span className="block tiny-uppercase mb-[3rem] s:mt-[4rem] text-white/60">
              Get in touch
            </span>
            <ul className="flex flex-col items-start">
              <li className="small-uppercase text-white">
                <a href="mailto:hello@avdynam.com" className="underlined">
                  hello@avdynam.com
                </a>
              </li>
              <li className="small-uppercase text-white">
                <a href="tel:+917358241964" className="underlined">
                  +91 73582 41964
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="col-span-12 s:col-span-4 flex flex-col s:border-t border-white/20">
            <span className="block tiny-uppercase mb-[3rem] s:mt-[4rem] text-white/60">
              Connect with us
            </span>
            <ul className="flex s:flex-col s:items-start flex-wrap gap-y-[0.5rem]">
              {socialLinks.map(({ short, full, href }) => (
                <li
                  key={full}
                  className="small-uppercase mr-[2rem] s:mr-0 text-white"
                >
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-end trigger"
                  >
                    <span className="underlined">
                      <span className="block s:hidden">{short}</span>
                      <span className="hidden s:block">{full}</span>
                    </span>
                    <ExternalArrow />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright — clips inward from top, revealing bottom→up */}
      <div ref={bottomRef}>
        <div className="site-grid pt-[6rem]">
          <div className="col-span-12 s:col-start-7 s:col-end-31 grid grid-cols-12 gap-x-[1.6rem] items-end">
            <span className="col-span-4 s:col-span-8 tiny-uppercase text-white/60">
              © 2026 AV Dynamics
              <br />
              All rights reserved
            </span>
            <ul className="col-span-8 s:col-span-4 flex justify-end s:justify-start">
              <li className="tiny-uppercase text-white/60">
                <Link to="/terms" className="underlined">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
