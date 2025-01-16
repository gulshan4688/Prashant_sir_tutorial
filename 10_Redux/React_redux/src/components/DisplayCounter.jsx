import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const counter = useSelector((store) => store.counter);
  return (
    <div className="ml-5" >
      <p className="lead mb-4 mx-auto ">Counter current Value: {counter}</p>
    </div>
  )
};

export default DisplayCounter;
