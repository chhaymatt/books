import styles from "./Search.module.scss";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import ToggleBar from "../ToggleBar/ToggleBar";
import { useNavigate } from "react-router-dom";

const Search = ({ onSearch, result, formState, setFormState }) => {
	// Used to navigate to book gallery
	const navigate = useNavigate();

	// Whenever a user changes an input, store the value
	const onInputChange = (event) => {
		const { name, value } = event.target;
		setFormState({ ...formState, [name]: value });
	};

	// Whenever user changes maxResults, orderBy or a page number, submit the form
	useEffect(() => {
		if (formState.searchInput) {
			handleSubmit();
		}
	}, [formState.maxResults, formState.orderBy, formState.startIndex]);

	// Submit form with the query
	const handleSubmit = () => {
		onSearch(
			`?q=${formState.searchInput}&maxResults=${
				formState.maxResults
			}&orderBy=${formState.orderBy.toLowerCase()}&startIndex=${
				formState.startIndex
			}`
		);
		navigate("/books");
	};

	// Submit form when user presses enter in the form
	const handleEnter = (event) => {
		if (event.charCode === 13 && formState.searchInput) {
			handleSubmit();
		}
	};

	// Submit form when user clicks on the search button
	const handleClick = (event) => {
		if (formState.searchInput) {
			handleSubmit();
		}
	};

	// Clear form when user clicks on the clear button
	const clearInput = () => {
		setFormState({ ...formState, searchInput: "" });
	};

	return (
		<div className={styles.Search}>
			<div>
				<div className={styles.Search__Bar}>
					<FontAwesomeIcon
						className={styles.Search__Icons}
						icon={faMagnifyingGlass}
					/>

					<input
						className={styles.Search__Input}
						onChange={onInputChange}
						onKeyPress={handleEnter}
						type="text"
						name="searchInput"
						id="searchInput"
						placeholder="Search"
						value={formState.searchInput}
					/>

					{formState.searchInput && (
						<FontAwesomeIcon
							className={styles.Search__Clear}
							icon={faXmark}
							onClick={clearInput}
						/>
					)}

					<button
						className={styles.Search__Button}
						onClick={handleClick}
					>
						<FontAwesomeIcon icon={faMagnifyingGlass} />
					</button>
				</div>

				<div className={styles.Search__ToggleBarGroup}>
					<ToggleBar
						name="maxResults"
						nameDisplay="Results per page"
						options={[10, 20, 30, 40, 100]}
						onInputChange={onInputChange}
					></ToggleBar>
					<ToggleBar
						name="orderBy"
						nameDisplay="Sort by"
						options={["Relevance", "Newest"]}
						onInputChange={onInputChange}
					></ToggleBar>
				</div>
			</div>
			<div className={styles.Search__Result}>
				<p>{result}</p>
			</div>
		</div>
	);
};

export default Search;
