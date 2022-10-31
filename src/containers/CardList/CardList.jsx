import { useEffect } from "react";
import Card from "../../components/Card/Card";
import { getData } from "../../services/books";

const CardList = ({
	query,
	setResult,
	formState,
	setFormState,
	books,
	setBooks,
}) => {
	useEffect(() => {
		getData(query)
			.then((data) => {
				data && setBooks(data.items);
				// data && console.log(data);
				data &&
					setResult(
						`Found ${data.totalItems} results for "${
							formState.searchInput
						}", sorted by ${formState.orderBy.toLowerCase()}`
					);
				data &&
					setFormState({ ...formState, totalItems: data.totalItems });
				// data && setResult(`Showing ${data.items.length} results for "${formState.searchInput}", sorted by ${formState.orderBy.toLowerCase()}`)
			})
			.catch((err) => setResult(err.message));
	}, [query]);

	return (
		books &&
		books.map((book, index) => (
			<Card
				key={index}
				image={book.volumeInfo.imageLinks}
				title={book.volumeInfo.title}
				author={book.volumeInfo.authors}
				description={book.volumeInfo.description}
				id={book.id}
			></Card>
		))
	);
};

export default CardList;
