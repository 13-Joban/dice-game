import styles from './Button.module.css'

const Button = ({ onClick  ,  text, isOutline}) => {
  return (
    <button onClick={onClick}  className={!isOutline ?  styles.btn: styles.outline}>{text}</button>
  )
}

export default Button