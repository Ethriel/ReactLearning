import { useState } from "react";

const useInput = () => {
  const [value, setValue] = useState("11");
  console.log("value", value);

  const handleChange = e => setValue(e.target.value);
  const handleReset = () => setValue("");

  return { value, handleChange, handleReset };
};

const Lesson1 = () => {
  const { value, handleChange, handleReset } = useInput();

  return (
    <>
      <input value={value} onChange={handleChange} />
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

export default Lesson1;
