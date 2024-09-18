import React, { useEffect, useState } from "react";

const HookUseEffect = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    console.log("handleResize added");
    window.addEventListener("resize", handleResize);

    // video -> https://youtu.be/0ZJgIjIuY7U?si=rD_wY4C7vmku9HFj&t=707
    // the concept of return inside the useEffect is that
    // every time we re render the component the return function will be called first and then the useEffect will be called
    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("handleResize removed");
    };
  });
  return <div>{windowWidth}</div>;
};

export default HookUseEffect;
