import React from "react";

function Content() {
  return (
    <div className="w-[95%] h-[50%] bg-slate-100 rounded-md p-2">
      <div className="p-2 flex gap-4">
        <img src="man.png" className="w-[50px] h-[50px] rounded-full" />
        <div>
          <p className="font-Manrope font-bold text-[18px]">Raj Singh</p>
          <p>"Software Developer in Transition | Web developer/Frontend D</p>
        </div>
      </div>
      <div className="mt-6 flex flex-col justify-center items-center gap-4">
        <p>
          🚀 Mastering APIs in React: Unlock Your App’s Full Potential!
          <br /> APIs are the backbone of modern web apps, and integrating them
          in React is a skill every developer must master.
          <br /> Here’s how you can efficiently handle APIs in React:
          <br /> 🌐 Fetch like a pro: Use fetch() or axios for API calls. Don’t
          forget to handle errors gracefully.
        </p>
        <img src="post.jpg" className="h-[600px] w-[600px]" />
      </div>
      <div className="p-4 w-[98%] h-[10%] flex justify-between">
        <div className="p-2 px-4 flex items-center gap-2">
          <img
            src="like.svg"
            className=""
          />
          <p className="font-Manrope font-medium">Like</p>
        </div>
        <div className="flex items-center border-2 border-black rounded-full p-2">
          <img src="plus.svg" alt="" />
          <p className="font-Manrope font-medium">Follow</p>
        </div>
      </div>
    </div>
  );
}

export default Content;
