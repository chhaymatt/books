import { useEffect } from "react";
import { useState } from "react";
import styles from "./PageButtons.module.scss";

const PageButtons = ({ formState, setFormState, pageCount, setPageCount }) => {
	const [prevButton, showPrevButton] = useState(false);
	const [nextButton, showNextButton] = useState(true);
	const pageCheckPrev =
		parseFloat(formState.startIndex) - parseFloat(formState.maxResults);
	const pageNext =
		parseFloat(formState.startIndex) + parseFloat(formState.maxResults);
	const pageCheckNext = parseFloat(formState.totalItems) - pageNext;

	// Change startIndex and increase by maxResults
	const nextPage = () => {
		window.scrollTo(0, 0);
		console.log("Next Page!", pageNext, formState.totalItems);
		setFormState({ ...formState, startIndex: pageNext });
		setPageCount((currCount) => currCount + 1);
	};

	// Change startIndex and decrease by maxResults
	const previousPage = () => {
		window.scrollTo(0, 0);
		console.log("Previous Page!", pageCheckPrev, formState.totalItems);
		setFormState({ ...formState, startIndex: pageCheckPrev });
		setPageCount((currCount) => currCount - 1);
	};

	// Display page buttons if there are further results
	useEffect(() => {
		if (pageCheckPrev >= 0) {
			showPrevButton(true);
		} else {
			showPrevButton(false);
		}

		if (pageCheckNext > 0) {
			showNextButton(true);
		} else {
			showNextButton(false);
		}
	}, [pageCheckPrev, pageCheckNext]);

	return (
		<div className={styles.PageButtons}>
			{prevButton && (
				<button
					className={styles.PageButtons__ButtonPrev}
					onClick={previousPage}
				>
					Previous Page
				</button>
			)}
			<p className={styles.PageButtons__Count}>Page {pageCount}</p>
			{nextButton && (
				<button
					className={styles.PageButtons__ButtonNext}
					onClick={nextPage}
				>
					Next Page
				</button>
			)}
		</div>
	);
};

export default PageButtons;
