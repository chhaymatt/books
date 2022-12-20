import styles from "./Modal.module.scss";
import {
	faTableCellsLarge,
	faXmark,
	faBook,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "../Rating/Rating";
import Divider from "../Divider/Divider";
import { languageCodes } from "../../services/languageCodes";
import { useNavigate } from "react-router-dom";
import DetailGroup from "../DetailGroup/DetailGroup";

const Modal = ({
	image,
	title,
	subtitle,
	authors,
	description,
	averageRating,
	ratingsCount,
	categories,
	publishedDate,
	pageCount,
	publisher,
	language,
}) => {
	const navigate = useNavigate();
	const DOMPurify = require("dompurify")(window);
	const authorDisplay = authors ? authors.join(", ") : "No Author";
	const defaultImage = "https://i.imgur.com/F1Ur8RN.png";
	const categoriesDisplay = categories ? categories.join(" • ") : "None";

	return (
		<div className={styles.Modal}>
			<div
				className={styles.Modal__Clear}
				onClick={() => navigate("/books")}>
				<FontAwesomeIcon
					className={styles.Modal__Icon}
					icon={faXmark}
				/>
			</div>
			<div className={styles.Modal__Top}>
				<div>
					<img
						src={image?.thumbnail ? image.thumbnail : defaultImage}
						alt={title ? title : "No title"}
					/>
				</div>
				<div className={styles.Modal__TopContent}>
					<h2 className={styles.Modal__Title}>
						{title ? title : "No title"}
					</h2>
					{subtitle && (
						<h3 className={styles.Modal__Subtitle}>{subtitle}</h3>
					)}
					<p className={styles.Modal__Authors}>{authorDisplay}</p>
					{averageRating && (
						<Rating
							averageRating={averageRating ? averageRating : null}
							ratingsCount={
								ratingsCount ? ratingsCount : null
							}></Rating>
					)}
				</div>
			</div>
			<Divider></Divider>
			<div>
				<h3 className={styles.Modal__PublisherDescription}>
					Publisher Description
				</h3>
				<p
					className={styles.Modal__PublisherDescriptionText}
					dangerouslySetInnerHTML={{
						__html: DOMPurify.sanitize(
							description ? description : "No description"
						),
					}}></p>
			</div>
			<Divider></Divider>
			<div className={styles.Modal__DetailGroups}>
				<DetailGroup
					heading={categories ? "Categories" : "Category"}
					value={
						<FontAwesomeIcon
							className={styles.DetailGroup__Value}
							icon={faTableCellsLarge}
						/>
					}
					info={categoriesDisplay}></DetailGroup>
				<DetailGroup
					heading="Published"
					value={publishedDate ? publishedDate.slice(0, 4) : "?"}
					info="Year"></DetailGroup>
				<DetailGroup
					heading="Length"
					value={pageCount ? pageCount : "?"}
					info="Pages"></DetailGroup>
				<DetailGroup
					heading="Publisher"
					value={
						<FontAwesomeIcon
							className={styles.DetailGroup__Value}
							icon={faBook}
						/>
					}
					info={publisher ? publisher : "No Publisher"}></DetailGroup>
				<DetailGroup
					heading="Language"
					value={language ? language.toUpperCase() : "?"}
					info={
						language
							? languageCodes[language.toLowerCase()]
							: "No Language"
					}></DetailGroup>
			</div>
		</div>
	);
};

export default Modal;
