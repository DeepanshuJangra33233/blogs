import React, { useState } from "react";

const Preloader = () => {
  const [progress, setProgress] = useState(true);
  setTimeout(() => {
    setProgress(false);
  }, 3000);
  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-white ${
        progress ? "" : "hidden"
      }`}
    >
      <div className="animate-ping">
        <span className="text-white bg-[#00AAA1] text-[27px] font-bold">
          Note
        </span>
        <span className="text-[17px] text-black font-semibold">Book</span>
      </div>
    </div>
  );
};

export default Preloader;
