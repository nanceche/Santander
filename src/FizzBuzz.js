import { useState } from "react";
const FizzBuzz = () => {
  const [number, setNumber] = useState(0);

  function fizzBuzz(number) {
    if (number % 3 === 0 && number % 5 === 0) {
      return "FizzBuzz";
    }
    if (number % 3 === 0) {
      return "Fizz";
    }
    if (number % 5 === 0) {
      return "Buzz";
    }

    if (!number % 3 || 5 === 0) {
      return number;
    }
  }

  return (
    <>
      <p>{number}</p>
      <button onClick={() => setNumber((prevNumber) => prevNumber + 1)}>
        +1
      </button>
      <button onClick={() => setNumber((prevNumber) => prevNumber - 1)}>
        -1
      </button>

      <div className="fizzBuzz">{fizzBuzz(number)}</div>
    </>
  );
};

export default FizzBuzz;
