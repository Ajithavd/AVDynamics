import { useRef, useEffect, useLayoutEffect } from "react";
import { useNavigationType } from "react-router-dom";
import gsap from "gsap";

const contactInfo = {
  email: "hello@avdynam.com",
  phone: "+91 73582 41964",
  address: ["ECO Park", "Chetpet", "Chennai, Tamil Nadu", "India"],
};

const socialLinks = [
  { label: "INSTAGRAM", href: "https://www.instagram.com/avdynamics" },
  { label: "EVENTS", href: "https://www.avarae.in/" },
];

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 33 32"
      style={{
        width: "0.55em",
        height: "0.55em",
        marginLeft: "0.3em",
        display: "inline-block",
        verticalAlign: "middle",
        fill: "currentColor",
      }}
    >
      <path d="m3.3 4.7 21.1.1L0 28.6 3.5 32 28.1 8l.1 20.8 4.9-4.7L33 0H8.2L3.3 4.7z" />
    </svg>
  );
}

export default function Contact() {
  const overlayRef = useRef(null);
  const contentRef = useRef(null);
  const navigationType = useNavigationType();

  // Keep header controls white while on this dark page
  useEffect(() => {
    document.body.classList.add("header-dark");
    return () => document.body.classList.remove("header-dark");
  }, []);

  // Entrance: useLayoutEffect covers screen before first paint, then slides upward
  // to reveal content. Avoids any flash of previous page or raw Contact content.
  useLayoutEffect(() => {
    if (navigationType !== "PUSH") return;
    const overlay = overlayRef.current;
    const content = contentRef.current;
    if (!overlay || !content) return;

    // Set synchronously before paint: overlay fully covers, content hidden below
    gsap.set(overlay, { y: "0%", autoAlpha: 1, pointerEvents: "all" });
    gsap.set(content, { y: "3rem", autoAlpha: 0 });

    const tl = gsap.timeline({ delay: 0.05 });
    tl.to(overlay, { y: "-100%", duration: 0.9, ease: "power3.inOut" });
    tl.to(
      content,
      { y: "0rem", autoAlpha: 1, duration: 0.75, ease: "power3.out" },
      "-=0.65",
    );
    tl.set(overlay, { autoAlpha: 0, pointerEvents: "none" });

    return () => tl.kill();
  }, [navigationType]);

  return (
    <>
      {/* Transition overlay — covers the screen on entrance */}
      <div
        ref={overlayRef}
        style={{
          position: "fixed",
          inset: 0,
          background: "#000",
          zIndex: 9990,
          pointerEvents: "none",
          visibility: "hidden",
        }}
      />

      <div
        style={{
          background: "#000",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          color: "#fff",
        }}
      >
        {/* Main content — flex column so the grid block is vertically centred */}
        <div
          ref={contentRef}
          style={{ flex: 1, display: "flex", flexDirection: "column" }}
        >
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center" /* vertical centre */,
              paddingTop: "12rem" /* clear the fixed header */,
              paddingBottom: "4rem",
            }}
          >
            <div
              className="site-grid"
              style={{ width: "100%", alignItems: "start" }}
            >
              {/* Left: huge tagline — starts at X: col 2 */}
              <div className="col-span-12 s:col-start-2 s:col-span-20">
                <h1
                  className="font-heading font-medium uppercase"
                  style={{
                    fontSize: "clamp(5rem, 6vw, 14rem)",
                    letterSpacing: "-0.05em",
                    lineHeight: 0.88,
                  }}
                >
                  You&apos;re never
                  <br />
                  far from
                  <br />
                  AV Dynamics
                  <sup style={{ fontSize: "0.4em", verticalAlign: "super" }}>
                    ©
                  </sup>
                </h1>
              </div>

              {/* Right: contact info — starts at same Y as heading */}
              <div
                className="col-span-12 s:col-start-22 s:col-span-13 flex flex-col mt-[5rem] s:mt-0"
                style={{ gap: "5rem" }}
              >
                {/* Get in touch */}
                <div>
                  <span
                    className="tiny-uppercase block mb-[2rem]"
                    style={{ opacity: 0.4 }}
                  >
                    Get in touch
                  </span>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="block small-uppercase"
                    style={{
                      color: "#fff",
                      textDecoration: "none",
                      marginBottom: "0.8rem",
                    }}
                  >
                    {contactInfo.email.toUpperCase()}
                  </a>
                  <a
                    href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                    className="block small-uppercase"
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                    {contactInfo.phone}
                  </a>
                </div>

                {/* Our address */}
                <div>
                  <span
                    className="tiny-uppercase block mb-[2rem]"
                    style={{ opacity: 0.4 }}
                  >
                    Our address
                  </span>
                  <address
                    className="not-italic"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.3rem",
                    }}
                  >
                    {contactInfo.address.map((line) => (
                      <span
                        key={line}
                        className="small-uppercase"
                        style={{ color: "#fff" }}
                      >
                        {line}
                      </span>
                    ))}
                  </address>
                </div>

                {/* Connect with us */}
                <div>
                  <span
                    className="tiny-uppercase block mb-[2rem]"
                    style={{ opacity: 0.4 }}
                  >
                    Connect with us
                  </span>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.9rem",
                    }}
                  >
                    {socialLinks.map(({ label, href }) => (
                      <li key={label}>
                        <a
                          href={href}
                          target="_blank"
                          rel="noreferrer"
                          className="small-uppercase"
                          style={{ color: "#fff", textDecoration: "none" }}
                        >
                          {label}
                          <ArrowIcon />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>{" "}
            {/* /site-grid */}
          </div>{" "}
          {/* /centering wrapper */}
          {/* Footer */}
          <div
            className="site-grid"
            style={{
              paddingTop: "3rem",
              paddingBottom: "4rem",
              borderTop: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <div className="col-span-7 s:col-start-2 s:col-span-14">
              <span
                className="tiny-uppercase"
                style={{ opacity: 0.35, color: "#fff" }}
              >
                © 2026 AV DYNAMICS, ALL RIGHTS RESERVED
              </span>
            </div>
            <div className="col-span-5 s:col-start-30 s:col-span-5 flex justify-end s:justify-start">
              <span
                className="tiny-uppercase"
                style={{ opacity: 0.35, color: "#fff", cursor: "pointer" }}
              >
                TERMS &amp; CONDITIONS
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
