import styles from "./Gallery.module.scss";
import Card from "../../components/Card/Card";

const Gallery = ({ books }) => {
	return (
		<div className={styles.Gallery}>
			{books &&
				books.map((book, index) => (
					<Card
						key={index}
						image={book.volumeInfo.imageLinks}
						title={book.volumeInfo.title}
						author={book.volumeInfo.authors}
						description={book.volumeInfo.description}
						id={book.id}
					></Card>
				))}
		</div>
	);
};

export default Gallery;
