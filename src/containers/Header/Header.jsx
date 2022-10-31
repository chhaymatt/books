import styles from "./Header.module.scss";

const Header = () => {
	return (
		<div className={styles.Header}>
			<h1 className={styles.Header__Heading}>Book Search</h1>
			<p className={styles.Header__Text}>
				Discover your next favourite book
			</p>
		</div>
	);
};

export default Header;
