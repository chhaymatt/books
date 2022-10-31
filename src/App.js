import styles from "./styles/App.module.scss";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getData } from "./services/books";
import Footer from "./components/Footer/Footer";
import Main from "./containers/Main/Main";
import Header from "./containers/Header/Header";
import ModalView from "./containers/ModalView/ModalView";
import Search from "./components/Search/Search";

const App = () => {
	const [query, setQuery] = useState("");
	const [result, setResult] = useState("Start by typing a few words");
	const [pageCount, setPageCount] = useState(1);

	const initialState = {
		searchInput: "",
		maxResults: 10,
		orderBy: "relevance",
		startIndex: 0,
		totalItems: 0,
	};

	const [formState, setFormState] = useState(initialState);
	const [books, setBooks] = useState();
	const onSearch = (input) => {
		setQuery(input);
	};

	// Reset page index if user changes results per page, or order by, or enters a new query
	useEffect(() => {
		setFormState({ ...formState, startIndex: 0 });
		setPageCount(1);
	}, [formState.maxResults, formState.orderBy, formState.searchInput]);

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
			})
			.catch((err) => setResult(err.message));
	}, [query]);

	return (
		<div className={styles.App}>
			<Header></Header>
			<BrowserRouter>
				<Search
					onSearch={onSearch}
					result={result}
					setResult={setResult}
					formState={formState}
					setFormState={setFormState}
				></Search>
				<Routes>
					<Route
						path="/books"
						element={
							<Main
								books={books}
								query={query}
								formState={formState}
								setFormState={setFormState}
								setResult={setResult}
								pageCount={pageCount}
								setPageCount={setPageCount}
							></Main>
						}
					></Route>
					<Route
						path="/books/search/:id"
						element={<ModalView setResult={setResult}></ModalView>}
					></Route>
				</Routes>
			</BrowserRouter>
			<Footer></Footer>
		</div>
	);
};

export default App;
