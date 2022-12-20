import Gallery from "../Gallery/Gallery";
import styles from "./Main.module.scss";
import PageButtons from "../../components/PageButtons/PageButtons";

const Main = ({ formState, setFormState, pageCount, setPageCount, books }) => {
	return (
		books && (
			<main className={styles.Main}>
				<Gallery books={books}></Gallery>
				<PageButtons
					formState={formState}
					setFormState={setFormState}
					pageCount={pageCount}
					setPageCount={setPageCount}></PageButtons>
			</main>
		)
	);
};

export default Main;
