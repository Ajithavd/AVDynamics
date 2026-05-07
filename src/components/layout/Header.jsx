import { Link } from "react-router-dom";
import logoUrl from "../../assets/logo.png";
import logoWhiteUrl from "../../assets/logo-white.png";

export default function Header({ onMenuToggle, menuOpen }) {
  return (
    <header
      className="fixed top-0 left-0 w-full z-[1000] select-none"
      style={{
        paddingTop: "3rem",
        paddingLeft: "2.4rem",
        paddingRight: "2.4rem",
      }}
    >
      <div className="flex items-center justify-between">
        {/* Logo — both PNGs are rendered stacked; CSS crossfades between them
            based on body.header-dark so dark sections show the white logo. */}
        <Link
          to="/"
          aria-label="Logo"
          style={{
            display: "block",
            width: "12rem",
            height: "6rem",
            flexShrink: 0,
            position: "relative",
          }}
        >
          <img
            src={logoUrl}
            alt="Logo"
            className="header-logo header-logo--light"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "left center",
            }}
          />
          <img
            src={logoWhiteUrl}
            alt=""
            aria-hidden="true"
            className="header-logo header-logo--dark"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "left center",
              opacity: 0,
            }}
          />
        </Link>

        {/* Plus toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={onMenuToggle}
          className="trigger w-[6rem] header-trigger"
        >
          <div className="plus">
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
                style={{
                  transform: menuOpen ? "rotate(45deg)" : "none",
                  transformOrigin: "center",
                  transition: "transform 0.4s cubic-bezier(0.76,0,0.24,1)",
                }}
              />
              <line
                y1="97"
                x2="196"
                y2="97"
                strokeWidth="2"
                className="stroke-current"
                style={{
                  transform: menuOpen ? "rotate(45deg)" : "none",
                  transformOrigin: "center",
                  transition: "transform 0.4s cubic-bezier(0.76,0,0.24,1)",
                }}
              />
            </svg>
          </div>
        </button>

        {/* Menu text */}
        <button
          type="button"
          onClick={onMenuToggle}
          className="trigger font-medium leading-none header-trigger"
          style={{
            fontSize: "1.3rem",
            letterSpacing: "-0.05em",
            flexShrink: 0,
          }}
        >
          <span className="underlined">{menuOpen ? "Close" : "Menu"}</span>
        </button>
      </div>
    </header>
  );
}
