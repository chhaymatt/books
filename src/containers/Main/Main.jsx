import Gallery from "../Gallery/Gallery";
import styles from "./Main.module.scss";
import PageButtons from "../../components/PageButtons/PageButtons";

const Main = ({ formState, setFormState, pageCount, setPageCount, books }) => {
	return (
		<main className={styles.Main}>
			<Gallery books={books}></Gallery>
			{books && (
				<PageButtons
					formState={formState}
					setFormState={setFormState}
					pageCount={pageCount}
					setPageCount={setPageCount}
				></PageButtons>
			)}
		</main>
	);
};

export default Main;
