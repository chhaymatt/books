import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getData } from "../../services/books";
import Modal from "../../components/Modal/Modal";
import styles from "./ModalView.module.scss";

const ModalView = (setResult) => {
	const { id } = useParams();

	const [book, setBook] = useState([]);

	useEffect(() => {
		getData(`/${id}`)
			.then((data) => setBook(data.volumeInfo))
			.catch((err) => setResult(err.message));
	}, []);

	return (
		book && (
			<div className={styles.ModalView}>
				<Modal
					image={book.imageLinks}
					title={book.title}
					subtitle={book.subtitle}
					authors={book.authors}
					description={book.description}
					averageRating={book.averageRating}
					ratingsCount={book.ratingsCount}
					categories={book.categories}
					publishedDate={book.publishedDate}
					pageCount={book.pageCount}
					publisher={book.publisher}
					language={book.language}></Modal>
			</div>
		)
	);
};

export default ModalView;
