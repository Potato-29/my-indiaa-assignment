import React from "react";

const Badge = ({ count = "0", component }) => {
  return (
    <div className="relative cursor-pointer">
      <p className="bg-red-400 rounded-full absolute w-4 h-4 text-xs text-center right-0 font-bold flex justify-center items-center">
        {count}
      </p>
      <div>{component}</div>
    </div>
  );
};

export default Badge;
