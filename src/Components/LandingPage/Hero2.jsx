import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Hero2() {
  // Refs for left and right sections
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    // GSAP ScrollTrigger for left section animation
    gsap.fromTo(
      leftRef.current,
      { scale: 0, opacity: 0 }, // Start position (offscreen, opacity 0)
      {
        scale:1, // End position (on screen)
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: leftRef.current,
          start: "top 100%", // Start the animation when the left section is at 80% of the viewport
          end: "top 70%", // End when the section reaches 30% of the viewport
          scrub: 1, // Smooth animation tied to scroll
          markers: false, // Set to true to debug scroll triggers
        },
      }
    );

    // GSAP ScrollTrigger for right section animation
    gsap.fromTo(
      rightRef.current,
      { scale:0, opacity: 0 }, // Start position (offscreen, opacity 0)
      {
        scale:1, // End position (on screen)
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: rightRef.current,
          start: "top 100%", // Start the animation when the right section is at 80% of the viewport
          end: "top 60%", // End when the section reaches 30% of the viewport
          scrub: 1, // Smooth animation tied to scroll
          markers: false, // Set to true to debug scroll triggers
        },
      }
    );
  }, []);

  return (
    <div className="w-full p-4 flex">
      <div ref={leftRef} className="left translate-x-20 w-[50%]">
        <p className="text-[38px] font-semibold font-Manrope p-12">
          We are the ones where learns & carrier made
        </p>
        <img src="./girl.png" className="" />
      </div>
      <div ref={rightRef} className="right w-[50%] p-14 flex flex-col gap-8">
        <div className="w-[442px] h-[192px] border border-gray-300 rounded-md p-6 flex justify-between gap-4">
          <img
            src="./Ellipse.svg"
            className="p-4 w-[60px] h-[60px]"
          />
          <div className="flex flex-col">
            <p className="text-[19px] font-Manrope p-2">Mock Test</p>
            <p className="text-[17px] font-Manrope p-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nisl
              consequat iaculis vitae arcu arcu. Ut interdum aenean sit{" "}
            </p>
          </div>
        </div>
        <div className="w-[442px] h-[192px] bg-[#FF8C42] flex items-start p-4 rounded-md">
          <img src="./group.svg" className=" p-6 w-[80px] h-[80px]" />
          <div className="flex flex-col text-white p-2">
            <p className="text-[18px] font-Manrope p-2">Networking, Comapnies posts and activities</p>
            <p className="text-[16px] font-Manrope p-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nisl
              consequat iaculis vitae arcu arcu. Ut interdum aenean sit{" "}
            </p>
          </div>
        </div>
        <div className="w-[442px] h-[122px] flex items-start gap-4  border border-gray-300 rounded-md p-6">
          <img src="./certificate.svg" className="" />
          <p className="text-[20px] font-Manrope font-medium">You get guidance from mentors and specialists</p>
        </div>
      </div>
    </div>
  );
}

export default Hero2;
