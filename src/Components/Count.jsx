import React,{useState} from "react";

const Count = () => {
    const[count,setCount] = useState(0)
    const Count = () => {
        setCount(count + 1);
    }
  return (
    <>
      <button onClick={Count}>count</button>
      <p>count : {count}</p>
    </>
  );
};

export default Count;
