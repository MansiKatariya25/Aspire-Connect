import React from "react";

function Loading() {
  return (
    <div className="fixed z-50 bg-gray-700/20 backdrop-blur-lg w-screen h-screen flex justify-center items-center">
      <img src="./loading.svg" alt="" />
    </div>
  );
}
export default Loading;
