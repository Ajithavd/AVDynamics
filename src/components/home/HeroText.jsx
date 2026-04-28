export default function HeroText() {
  return (
    <div data-smooth="">
      <h1
        aria-label="Building smarter futures"
        className="uppercase font-heading font-medium text-center px-[2.4rem] s:px-[4rem]"
        style={{
          fontSize: "clamp(7rem, 13vw, 50rem)",
          letterSpacing: "-0.075em",
          lineHeight: "0.85",
        }}
      >
        <div aria-hidden="true" className="js-hero-word overflow-hidden">
          <div className="js-t-line">BUILDING</div>
        </div>
        <div
          aria-hidden="true"
          className="js-hero-word overflow-hidden"
          style={{ marginTop: "-0.1em" }}
        >
          <div className="js-t-line">SMARTER</div>
        </div>
        <div
          aria-hidden="true"
          className="js-hero-word overflow-hidden"
          style={{ marginTop: "-0.1em" }}
        >
          <div className="js-t-line">FUTURES</div>
        </div>
      </h1>

      {/* Tagline — below the hero text, static */}
      <div className="hidden s:block small-uppercase mt-[3rem] px-[4rem]">
        AI, drones &amp; <br /> smart city <br />
        solutions
      </div>
    </div>
  );
}
