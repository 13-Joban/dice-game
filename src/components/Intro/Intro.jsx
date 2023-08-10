import Button from "../Button/Button"
import styles from './Intro.module.css'
const Intro = ({toggle}) => {
  return (
    <div className={styles.intro_cont} >
      <img src="images/dices 1.png" alt="dice png" />

      <div className={styles.content}>
        <p>
        DICE GAME
        </p>
        <div className={styles.content_btn}>
        <Button onClick={toggle} text="Play Now" isOutline = {false} />
        </div>
        
      </div>
    </div>
  )
}

export default Intro