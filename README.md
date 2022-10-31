# Book Search

## Visit

https://chhaymatt.github.io/books/

## Introduction

An app where a user can search for books from Google Book's API using React JS, React Router and Asynchronous programming

## Preview

![Preview of Matthew Chhay's Book Search App](https://i.imgur.com/7q2RrIh.png)

## MVP

-   ✅ Header container introducing the page
-   ✅ Form containing text input and search button
-   ✅ Text input is used as a query and fetches the Google Books API using async/await
-   ✅ A container of book card components in a grid-like format and responsive on different screen sizes
-   ✅ BEM convention used appropriately
-   ✅ Components require styling have its own SCSS file
-   ✅ Palette uses variables and is stored in a global styles folder
-   ✅ Iterators are used over loops

## Bonus

-   ✅ User can start a search by hitting the enter key or by pressing the search button
-   ✅ Provide feedback to user when there are no results for a particular query
-   ✅ A modal appears with more information about a book after clicking on a book card
-   ✅ Star Rating indicator
-   ✅ Pages to see other results

## Known Bugs

-   Google Books API totalItems value fluctuates when changing the following query parameters: maxResults, orderBy or startIndex for the same searchInput
-   Clicking on the page buttons quickly may continously loop fetch requests

## Road Map

-   Move getData query to a higher level and pass props down rather than up and may try useContext
-   Sort by Oldest for the current page
