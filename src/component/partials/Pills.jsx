import React from "react";

const Pills = ({ label, bgc }) => {
  return (
    <span
      className={`${bgc} text-[10px] text-center bg-green-800 rounded-full py-1 px-3 text-white`}
    >
      {label}
    </span>
  );
};

export default Pills;
