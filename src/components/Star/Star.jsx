import styles from "./Star.module.scss"

const Star = ({averageRating}) => {
   const starsFilled = (averageRating/5)*100
   return (
        <div className={styles.Stars}>
        <div className={styles.Stars__Filled} style={{width: starsFilled}}></div>
        </div>
   )
}

export default Star