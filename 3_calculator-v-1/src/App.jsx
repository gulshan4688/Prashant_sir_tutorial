import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState(""); // humne yaha state create kiya jisme value save ho sake
  // isme se calval ko pass kr diya as a prop jaha pe isko show hona jo ki hai display tag
  // lekin button click to buttonContainer mei hoga isliye humne usko ek funtion provide kr diya jisme humne use bol diya ki ab jab tumhare button ko click karega tumko clg krna hai "button clicked"
  const onButtonClick = (jo_Dabaya) => {
    if (jo_Dabaya === "C") {
      setCalVal("");
    } else if (jo_Dabaya === "=") {
      const res = eval(calVal);
      setCalVal(res);
    } else {
      const newDisplayVal = calVal + jo_Dabaya;
      setCalVal(newDisplayVal);
    }
  };
  return (
    <div className={styles.calculator}>
      <Display calVal={calVal}></Display>
      <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
    </div>
  );
}

export default App;
