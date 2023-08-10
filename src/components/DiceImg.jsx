const srcArr = ["/images/dice_1.png", "/images/dice_2.png", "/images/dice_3.png", "/images/dice_4.png", "/images/dice_5.png", "/images/dice_6.png"]

const DiceImg = ({ value}) => {
  return (
    <img src={srcArr[value - 1 ]} alt="diceimg" /> 
  )
}

export default DiceImg