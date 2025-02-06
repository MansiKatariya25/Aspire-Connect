import React from "react";

function PostAction() {
  return (
    <div>
      <div className="w-[95%]  bg-slate-200 rounded-md p-4 flex flex-col  gap-2">
        <div className="w-[80%] flex gap-4">
          <img
            src="./amazon.jpg"
            className="w-[50px] h-[50px] rounded-full cursor-pointer"
          />
          <textarea
            type="text"
            name="post"
            className="w-full outline-none rounded-md resize-none p-2"
            placeholder="Start a Post"
            rows="4"
          />
        </div>
        <div className="flex justify-between items-center gap-2  cursor-pointer">
          <div className="flex items-center gap-2 bg-white p-2 rounded-md">
            <img src="plus.svg" className="w-[20px] h-[20px]" />
            <p className="text-md">Add Photos</p>
          </div>
          <button className="bg-[#FF8C42] p-2 px-6 text-white font-medium rounded-lg">
            Post{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostAction;
