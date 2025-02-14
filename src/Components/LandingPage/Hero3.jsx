import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Hero3() {
  // Refs for elements to animate
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Animation for the heading
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -100 }, // Start from opacity 0 and slightly above
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%", // Start when the element reaches 80% of the viewport
          end: "top 30%",
          scrub: 1, // Smooth animation tied to scroll
          markers: false,
        },
      }
    );

    // Animation for the description
    gsap.fromTo(
      descRef.current,
      { opacity: 0, x: -200 }, // Start from opacity 0 and move from the left
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: descRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: 1,
          markers: false,
        },
      }
    );

    // Animation for the button
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.5 }, // Start from smaller scale and hidden
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: 1,
          markers: false,
        },
      }
    );
  }, []);

  return (
    <div className="w-full h-full">
      <div className="p-32 flex">
        <div ref={headingRef} className="w-[45%] p-10">
          <p className="font-Manrope text-[84px] leading-none">
            A <span className="text-[#FF8C42]">better</span> way to launch a
            career
          </p>
        </div>
        <div ref={descRef} className="w-[50%] flex flex-col gap-14 p-10">
          <p className="text-[22px] font-Roboto">
            Lorem Ipsum is simply dummy text of the printing and typesetting.
            Lorem Ipsum is simply dummy text of the printing and typesetting.
            Lorem Ipsum is simply dummy text of the printing and typesetting.
          </p>
          <p
            ref={buttonRef}
            className="text-[#FF8C42] border border-[#FF8C42] p-2 px-5 flex items-center gap-4 rounded-full w-[44%] font-Roboto"
          >
            Discover Our Platform
            <span>
              <img src="./oarrow.png" className="w-[20px] h-[20px]" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero3;
