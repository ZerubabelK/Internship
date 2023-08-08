import type { FC } from "react";
import NavBar from "../components/NavBar";
import { useState, useRef, useEffect } from "react";

// the hooks component
const Hooks: FC = () => {
  // the count state
  const [count, setCount] = useState<number>(0);

  // the decrement button ref
  const decButtonRef = useRef(null);

  // the effect hook where the document title is set to the count value
  useEffect(() => {
    document.title = `${count}`;
  }, [count]);

  // the increment function
  function handleIncrement() {
    setCount((prevCount) => prevCount + 1);
    decButtonRef.current.style.backgroundColor = "rgb(59 130 246";
  }

  // the decrement function
  function handleDecrement() {
    if (count === 0) {
      decButtonRef.current.style.backgroundColor = "red";
      return;
    } else setCount((prevCount) => prevCount - 1);
  }

  return (
    <div>
      <NavBar />
      <div>
        <div className="w-3/4 mx-auto">
          <div className="w-full bg-gradient-to-r from-cyan-200 to-blue-200 min-h-[25vh] rounded-xl"></div>
          <div className="container shadow-lg p-3">
            <h1 className="text-center text-3xl">count: {count}</h1>
            <div className="flex justify-center gap-3">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleIncrement}
              >
                Increment
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                ref={decButtonRef}
                onClick={handleDecrement}
              >
                Decrement
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hooks;
