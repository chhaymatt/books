import styles from "./styles/App.module.scss";
import Footer from "./components/Footer/Footer";
import Main from "./containers/Main/Main";
import Header from "./containers/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ModalView from "./containers/ModalView/ModalView";
import Search from "./components/Search/Search";
import { useState, useEffect } from "react";

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

	const onSearch = (input) => {
		setQuery(input);
	};

	// Reset page index if user changes results per page, or order by, or enters a new query
	useEffect(() => {
		setFormState({ ...formState, startIndex: 0 });
		setPageCount(1);
	}, [formState.maxResults, formState.orderBy, formState.searchInput]);

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
