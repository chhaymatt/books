
export const getData = async (input) => {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${input}`)
    const json = await response.json()
    return json.items
}
