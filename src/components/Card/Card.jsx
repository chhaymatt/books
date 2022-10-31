import styles from "./Card.module.scss";
import { NavLink } from "react-router-dom";

const Card = ({ image, title, author, description, id }) => {
	const defaultImage = "https://i.imgur.com/F1Ur8RN.png";

	return (
		<NavLink to={`search/${id}`}>
			<div className={styles.Card}>
				<img
					className={styles.Card__Image}
					src={image?.thumbnail ? image.thumbnail : defaultImage}
					alt={title ? title : "No title"}
				/>
				<div className={styles.Card__Content}>
					<h3 className={styles.Card__Title}>
						{title ? title : "No title"}
					</h3>
					<p className={styles.Card__Author}>
						{author ? author : "No author"}
					</p>
					<p className={styles.Card__Description}>
						{description
							? `${description.slice(0, 120)}...`
							: "No description"}
					</p>
				</div>
			</div>
		</NavLink>
	);
};

export default Card;
