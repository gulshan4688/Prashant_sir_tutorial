import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({onButtonClick}) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
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

  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((buttonName) => (
        <button 
        key= {buttonName} 
        className={styles.button}
        onClick={()=>onButtonClick(buttonName)}
        // value={buttonName}
        >{buttonName}</button>
        
      ))}
    </div>
  );
};

export default ButtonsContainer;


// const onButtonClick=(event)=>{
//     console.log(event)
// }
// this above funtion is defined in app 
// app se humne ke method pass kiya jisko bola onButtonClick wo yaha aya 
//  aur usko humne phele likha < onlick={onButtonClick}---------------> WAY 1----------------------
// but usme koi value wapas ni bhej rhe the 
// ab waps se humne usko bola <onclick={()=>onButtonClick(buttonName)} ---------------> WAY 2-------------
// ab humko usko ek value bhej rhe hai jo ki hai buttonName 
// yaha humne ButtonName pass kiya aur waha usne as a event liya aur event ko clg kr diya 
// waha event ki jaha humne jo_Dabaya kr diya hai 