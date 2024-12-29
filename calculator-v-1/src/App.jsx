import React from "react";
import styles from "./App.module.css";
import Buttons from "./components/Buttons";
const keys = [
  "c",
  "1",
  "2",
  "+",
  "3",
  "4",
  "_",
  "5",
  "6",
  "*",
  "7",
  "8",
  "/",
  "=",
  "9",
  "0",
  ".",
];
const App = () => {
  return (
    <div className={styles.outer}>
      <div className={styles.container}>
        <input type="text" id="display" className={styles.input} />
      </div>
      <div className={styles.btn} >
        <Buttons buttons={keys} />
      </div>
    </div>
  );
};

export default App;
