import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const {counterVal} = useSelector((store) => store.counter);
  return (
    <div className="ml-5" >
      <p className="lead mb-4 mx-auto ">Counter current Value: {counterVal}</p>
    </div>
  )
};

export default DisplayCounter;
