import styles from "./DetailGroup.module.scss"

const DetailGroup = ({heading, value, info}) => {
    return (
        <div className={styles.DetailGroup}>
            <h4 className={styles.DetailGroup__Heading}>{heading.toUpperCase()}</h4>
            <h5 className={styles.DetailGroup__Value}>{value}</h5>
            <p className={styles.DetailGroup__Info}>{info}</p>
        </div>
    )
}

export default DetailGroup