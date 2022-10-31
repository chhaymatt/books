export const getData = async (input) => {
	if (input) {
		// console.log(input)
		const response = await fetch(
			`https://www.googleapis.com/books/v1/volumes${input}`
		);
		const json = await response.json();
		// console.log(json.items)
		return json;
	}
};
