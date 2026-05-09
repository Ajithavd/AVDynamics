export default function HeroText() {
  return (
    <div data-smooth="">
      <h1
        aria-label="Building smarter futures"
        className="uppercase font-heading font-medium text-center px-[2.4rem] s:px-[4rem]"
        style={{
          // fontSize: "clamp(7rem, 13vw, 50rem)",
          fontSize: "clamp(5rem, 6.5vw, 50rem)",
          letterSpacing: "-0.015em",
          lineHeight: "0.90",
        }}
      >
        <div aria-hidden="true" className="js-hero-word overflow-hidden">
          <div className="js-t-line">Engineering </div>
        </div>

        <div aria-hidden="true" className="js-hero-word overflow-hidden">
          <div className="js-t-line"> INTELLIGENT </div>
        </div>

        <div
          aria-hidden="true"
          className="js-hero-word overflow-hidden"
          style={{ marginTop: "-0.1em" }}
        >
          <div className="js-t-line">ENVIRONMENTS &</div>
        </div>
        <div
          aria-hidden="true"
          className="js-hero-word overflow-hidden"
          style={{ marginTop: "-0.1em" }}
        >
          <div className="js-t-line">IMMERSIVE </div>

          <div className="js-t-line"> Experiences</div>
        </div>
      </h1>

      {/* Tagline — below the hero text, static */}
      <div className="hidden s:block small-uppercase mt-[3rem] px-[4rem]">
        India, Malaysia <br /> Armania &amp; <br />
        UAE
      </div>
    </div>
  );
}
