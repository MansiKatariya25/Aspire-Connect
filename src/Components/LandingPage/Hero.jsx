import React, { useEffect, useRef } from "react";
import Navbar from "../Common/Navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const titleRef = useRef(null);
  const ltitleRef = useRef(null);
  const boxRefs = useRef([]); // Array of refs for each box

  // Add each box element reference to boxRefs array
  const addToRefs = (el) => {
    if (el && !boxRefs.current.includes(el)) {
      boxRefs.current.push(el);
    }
  };

  useEffect(() => {
    gsap.fromTo(titleRef.current, { y: -150 }, { y: 0, duration: 0.8 });
    gsap.fromTo(ltitleRef.current, { x: -300 }, { x: 0, duration: 0.8 });

    // Animate all the boxes using boxRefs array
    boxRefs.current.forEach((box) => {
      gsap.fromTo(box, { scale: 0.5 }, { scale: 1, duration: 0.8 });
    });

    gsap.fromTo(
      boxRefs.current[0],
      { x: 0 },
      {
        x: -200,
        duration: 1,
        scrollTrigger: {
          trigger: boxRefs.current[0], // Element to trigger on scroll
          start: "top 40%", // When the top of the box hits 80% of the viewport
          end: "top 5%", // When the top of the box hits 30% of the viewport
          scrub: 1, // Smoothly animate based on scroll
          markers: false, // You can set to true for debugging to see scroll trigger markers
        },
      }
    );

    // ScrollTrigger for Box 2 (Network)
    gsap.fromTo(
      boxRefs.current[1],
      { x: 0 },
      {
        x: 200,
        duration: 1,
        scrollTrigger: {
          trigger: boxRefs.current[1], // Element to trigger on scroll
          start: "top 40%", // When the top of the box hits 80% of the viewport
          end: "top 5%", // When the top of the box hits 30% of the viewport
          scrub: 1, // Smoothly animate based on scroll
          markers: false, // Set true for debugging
        },
      }
    );
  }, []);

  return (
    <div className="h-screen">
      <Navbar />
      <div className="h-[10%] w-full"></div>
      <div className="px-10">
        <p
          ref={titleRef}
          className="font-Manrope text-[96px] font-medium tracking-wide"
        >
          Unlock your <span className="text-[#FF8C42]">Career</span> Potential
        </p>
        <div className="flex gap-4">
          <p
            ref={ltitleRef}
            className="-translate-y-12 p-4 text-[48px] tracking-extra"
          >
            -Connect, <span className="text-[#FF8C42]">Learn</span> & Aspire
          </p>
        </div>
        <div className="flex gap-10 p-4">
          <div
            ref={addToRefs}
            className="w-[670px] h-[320px] bg-[#FF8C42] rounded-md"
          >
            <div className="p-6 text-[32px] text-white flex items-center gap-2">
              <p className="font-Inter">Mentorship</p>
              <img
                src="./arrow.png"
                className="h-[30px] w-[30px] border border-white rounded-full p-1"
              />
            </div>
            <p className="text-[15px] text-white w-[55%] font-Inter -translate-y-10 p-6">
              We have industry best mentors to lead and help you in your
              professional journey
            </p>
            <img
              src="./box.svg"
              className="-translate-y-[20vh] translate-x-[30vw]"
            />
          </div>
          <div
            ref={addToRefs}
            className="w-[670px] h-[320px] border border-gray-300 rounded-md"
          >
            <div className="p-6 text-[32px] text-[#FF8C42] flex items-center gap-2">
              <p className="font-Inter">Network</p>
              <img
                src="./oarrow.png"
                className="h-[30px] w-[30px] border border-[#FF8C42] rounded-full p-1"
              />
            </div>
            <p className="text-[15px] text-[#FF8C42] w-[55%] -translate-y-10 font-Inter p-6">
              We have industry best mentors to lead and help you in your
              professional journey
            </p>
            <img
              src="./box2.svg"
              className="-translate-y-[20vh] translate-x-[30vw]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
