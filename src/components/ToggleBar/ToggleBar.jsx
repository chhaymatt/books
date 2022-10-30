import styles from "./ToggleBar.module.scss"

const ToggleBar = ({name, nameDisplay, options, onInputChange}) => {
    return (
        <div className={styles.ToggleBar}>
            <div>{nameDisplay}</div>
            <select className={styles.ToggleBar__Dropdown} onChange={onInputChange} name={name} >
                {options.map((element, index) => (<option key={index} value={element}>{element}</option>))}
            </select>
        </div>
    )
}

export default ToggleBar