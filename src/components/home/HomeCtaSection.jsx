import { useRef } from "react";
import Button from "../ui/Button";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export default function HomeCtaSection() {
  const ref = useRef(null);
  useScrollReveal(ref);

  return (
    <div ref={ref} className="site-grid pt-[6rem] s:pt-[25rem]">
      <div className="flex flex-col items-start col-span-12 s:col-start-4 s:col-span-21">
        <div className="t-line-wrap overflow-hidden w-full">
          <p
            className="font-body leading-[1.1] t-line"
            style={{ fontSize: "clamp(2rem, 3vw, 12rem)" }}
          >
            Through AI surveillance, advanced drone technology, and smart city
            architecture, we design, build, and implement solutions that power
            the connected future — serving governments, enterprises, and Fortune
            500 companies worldwide.
          </p>
        </div>
        {/* <div className="mt-[5rem]">
          <Button to="/about" variant="light">
            About us
          </Button>
        </div> */}
      </div>
    </div>
  );
}
