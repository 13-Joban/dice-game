import DiceImg from '../DiceImg';
import { useState } from 'react';
import styles from './GameStarted.module.css'
import Button from '../Button/Button';
import Rules from '../Rules/Rules';
const GameStarted = () => {
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [selectedDiceNum, setSelectedDiceNum] = useState(1);
  const [showRules, setShowRules] = useState(false);
  const [score ,setScore] = useState(0)

  const handleButtonClick = (number) => {
    setSelectedNumber(number);
  };
  const resetHanlder= () => {
    setSelectedNumber(0)
    setScore(0)
    setSelectedDiceNum(1);
  }
  const showHanlder= () => {
    setShowRules((prev) => !prev)
  }
 
  
  
  const handleRandValue = () => {
    if(selectedNumber !== 0 ){
       
      const rolledNumber = Math.floor(Math.random() * 6) + 1;
      setSelectedDiceNum(rolledNumber);
  

      if (rolledNumber === selectedNumber) {
        setScore((val) => val + rolledNumber); // Using rolledNumber here
      } else {
        setScore((val) => val - 2);
      }
    }
   
  }
  

  return (
    <div className={styles.game_cont}>
    <div className={styles.score_cont}>
      <div className={styles.score_box}>
        <p>{score}</p>
        <span>Total Score</span>
      </div>
     
      <div className={styles.numsselect_cont}>
      {selectedNumber === 0 && (
            <p className={styles.warning}>
              Please select a number before rolling.
            </p>
          )}

        <div className={styles.btns}>
          {[1, 2, 3, 4, 5, 6].map((number) => (
            <button
              key={number}
              onClick={() => handleButtonClick(number)}
              style={{
                backgroundColor: selectedNumber === number ? '#000000' : 'transparent',
                color: selectedNumber === number ? 'white' : 'black',
              }}
            >
              {number}
            </button>
          ))}
        </div>
      { selectedNumber !==0 &&   <p>Select Dice Number</p>}
      </div>
    </div>
    <div className={styles.play_cont} >
       <div className={styles.dice_img} onClick={handleRandValue}>
        <DiceImg value={selectedDiceNum} />
       </div>
       <p >
       Click on Dice to roll
       </p>

       <div>
        <Button onClick={resetHanlder} text="Reset Score" isOutline={true}/>
       </div>

       <div>
       <Button onClick={showHanlder} text="Show Rules" isOutline={false}/> 
       </div>`
       
       <div>
       { showRules  &&  < Rules />}
        </div>`
    </div>
  </div>
  
  );
}

export default GameStarted