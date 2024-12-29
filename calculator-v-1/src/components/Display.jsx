import styles from "./Display.module.css";

const Display = ({calVal}) => {
  return <input 
  className={styles.display} 
  type="text" placeholder="type here..." 
  readOnly
  value={calVal}
  />;
};

export default Display;