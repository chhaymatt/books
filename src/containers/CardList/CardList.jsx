import Card from "../../components/Card/Card";
import Books from "../../data.json"
import { getData } from "../../services/books";

const CardList = () => {
    // const Books = getData("Hello");
    // console.log(Books);
    return (
        Books.items.map((book, index) => (
        <Card
            key={index} 
            image={book.volumeInfo.imageLinks.thumbnail}
            title={book.volumeInfo.title}
            author={book.volumeInfo.authors}
            description={book.volumeInfo.description}>
        </Card>
        ))
    )
}

export default CardList