import { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";
import logoUrl from "../../assets/logo.png";
import VIDEO_SRC from "../../assets/vid.mp4";

const navLinks = [
  { label: "HOME", to: "/" },
  // { label: "WORK", to: "/works" },
  // { label: "ABOUT", to: "/about" },
  { label: "PRODUCTS", to: "/products" },
  { label: "CONTACT", to: "/contact" },
  { label: "LAB", to: "/lab" },
];

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

function NavItem({ label, to, isActive }) {
  const overlayRef = useRef(null);
  const tweenRef = useRef(null);

  const handleEnter = () => {
    if (isActive) return;
    if (tweenRef.current) tweenRef.current.kill();
    gsap.set(overlayRef.current, { clipPath: "inset(100% 0 0 0)" });
    tweenRef.current = gsap.to(overlayRef.current, {
      clipPath: "inset(0% 0 0 0)",
      duration: 0.55,
      ease: "power3.inOut",
    });
  };

  const handleLeave = () => {
    if (isActive) return;
    if (tweenRef.current) tweenRef.current.kill();
    tweenRef.current = gsap.to(overlayRef.current, {
      clipPath: "inset(0 0 100% 0)",
      duration: 0.45,
      ease: "power3.inOut",
    });
  };

  return (
    <li className="w-full">
      <Link
        to={to}
        className="js-menu-link relative block uppercase font-heading font-medium trigger"
        style={{ lineHeight: "0.85", letterSpacing: "-0.075em" }}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        <span style={{ color: isActive ? "#fff" : "#161818" }}>{label}</span>
        <span
          ref={overlayRef}
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            color: "#fff",
            clipPath: "inset(0 0 100% 0)",
            pointerEvents: "none",
          }}
        >
          {label}
        </span>
      </Link>
    </li>
  );
}

function isNavActive(to, pathname) {
  if (to === "/") return pathname === "/";
  if (to === "/works") return pathname.startsWith("/work");
  return pathname.startsWith(to);
}

export default function Navigation({ menuRef, innerRef, onClose }) {
  const location = useLocation();

  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <aside
      ref={menuRef}
      className="invisible fixed top-0 left-0 w-full h-full overflow-hidden z-[1001]"
      style={{ background: "#7C7262" }}
    >
      <div
        ref={innerRef}
        className="absolute inset-0 flex flex-col overflow-y-auto"
      >
        {/* ── ROW 1: logo + close ── */}
        <div className="flex-shrink-0 site-grid pt-[3rem] pb-[1rem] items-center">
          <Link
            to="/"
            aria-label="Logo"
            className="col-start-1 s:col-start-1 col-span-5 s:col-span-4"
            style={{ display: "block", width: "12rem", height: "6rem" }}
          >
            <img
              src={logoUrl}
              alt="Logo"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                objectPosition: "left center",
              }}
            />
          </Link>

          <div className="col-start-10 s:col-start-33 col-span-3 s:col-span-2 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="trigger text-white font-medium leading-none"
              style={{ fontSize: "1.3rem", letterSpacing: "-0.05em" }}
            >
              <span className="underlined">Close</span>
            </button>
          </div>
        </div>

        {/* ── ROW 2: nav links — start from top at ~20% from left.
            `min-h-0` lets this row shrink under flex pressure instead of
            pushing the bottom row off-screen on shorter viewports. */}
        <div className="flex-grow min-h-0 site-grid pt-[3rem] s:pt-[4rem]">
          <ul
            className="col-start-5 s:col-start-5 col-span-6 s:col-span-12 flex flex-col"
            style={{
              fontSize: "clamp(4.5rem, min(6.5vw, 9vh), 11rem)",
              gap: "0.5rem",
            }}
          >
            {navLinks.map(({ label, to }) => (
              <NavItem
                key={label}
                label={label}
                to={to}
                isActive={isNavActive(to, location.pathname)}
              />
            ))}
          </ul>
        </div>

        {/* ── ROW 3: close X | socials (same col as nav) | contact | video ── */}
        <div className="flex-shrink-0 site-grid pb-[4rem] pt-[2rem] items-end">
          {/* Big close X — left anchor */}
          <div className=" js-menu-fade self-end">
            <button
              type="button"
              aria-label="Close menu"
              onClick={onClose}
              className="trigger text-white"
              style={{
                width: "5rem",
                transform: "rotate(45deg)",
                display: "block",
              }}
            >
              <svg
                viewBox="0 0 196 196"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="99"
                  x2="99"
                  y2="196"
                  strokeWidth="2"
                  className="stroke-current opacity-40"
                />
                <line
                  y1="97"
                  x2="196"
                  y2="97"
                  strokeWidth="2"
                  className="stroke-current opacity-40"
                />
                <line
                  x1="99"
                  x2="99"
                  y2="196"
                  strokeWidth="2"
                  className="stroke-current"
                />
                <line
                  y1="97"
                  x2="196"
                  y2="97"
                  strokeWidth="2"
                  className="stroke-current"
                />
              </svg>
            </button>
          </div>

          {/* Social links — aligned with nav items (col-start-7) on desktop, beside X on mobile */}
          <ul
            className="col-start-4 s:col-start-4 col-span-5 s:col-span-4 flex flex-col js-menu-fade"
            style={{ gap: "0.4rem" }}
          >
            {socialLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white small-uppercase trigger underlined whitespace-nowrap"
                >
                  {label}
                  <ArrowIcon />
                </a>
              </li>
            ))}
          </ul>

          {/* Contact info — desktop only */}
          <ul
            className="hidden s:flex s:flex-col s:col-start-12 s:col-span-7 js-menu-fade"
            style={{ gap: "0.4rem" }}
          >
            <li>
              <a
                href="mailto:info@avdynamics.com"
                className="small-uppercase text-white underlined whitespace-nowrap"
              >
                INFO@AVDYNAMICS.COM
              </a>
            </li>
          </ul>

          {/* Video preview — desktop only */}
          <div className="hidden s:block s:col-start-24 s:col-span-11 js-menu-fade">
            <div
              className="relative overflow-hidden"
              style={{ borderRadius: "0.8rem", marginBottom: "1rem" }}
            >
              <div className="aspect-box aspect-16-9" />
              <video
                src={VIDEO_SRC}
                muted
                autoPlay
                loop
                playsInline
                className="img-fill"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="flex items-center gap-[1.2rem]">
              <div
                style={{
                  width: "3rem",
                  height: "3rem",
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="white"
                  style={{ width: "0.9rem", marginLeft: "0.15rem" }}
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <div>
                <div className="small-uppercase text-white">Play Reel</div>
                <div
                  className="small-uppercase text-white"
                  style={{ opacity: 0.5 }}
                >
                  1:10
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
