import { useState } from "react";

const UseState = () => {
  // use this method
  // this is more efficient
  const [count, setCount] = useState(() => {
    console.log("run funtion");
    return 4;
  });
  const countInitaial = () => {
    console.log("run function");
    return 4;
  };
  // const [count, setCount] = useState(countInitaial());
  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decreaseCount = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <div className="flex items-center justify-center w-[100vw] h-[100vh] gap-4">
      <button
        onClick={decreaseCount}
        className="w-10 h-10 border rounded-full hover:bg-gray-200"
      >
        -
      </button>
      <p className="text-2xl">{count}</p>
      <button
        onClick={increaseCount}
        className="w-10 h-10 border rounded-full hover:bg-gray-200"
      >
        +
      </button>
    </div>
  );
};

export default UseState;
