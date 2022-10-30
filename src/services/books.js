
export const getData = async (input) => {
    if (input) {
        // console.log(input)
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${input}`)
        const json = await response.json()
        // console.log(json.items)
        return json
    }
}

export const getBookData = async (id) => {
    if (id) {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
        const json = await response.json()
        // console.log(json)
        return json
    }
}
