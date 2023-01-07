# Book Search <!-- omit in toc -->

> Matthew Chhay's Book Search using the Google Books API.
> [Open Live Preview](https://chhaymatt.github.io/books/)

## Preview <!-- omit in toc -->

![Preview of Matthew Chhay's Book Search App](https://i.imgur.com/7q2RrIh.png)

## Table of Contents <!-- omit in toc -->

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Screenshots](#screenshots)
- [MVP](#mvp)
- [Going beyond the MVP](#going-beyond-the-mvp)
- [Issues discovered during development](#issues-discovered-during-development)
- [Setup](#setup)
  - [For viewing locally and further development](#for-viewing-locally-and-further-development)
  - [For publishing to GitHub Pages after initial setup](#for-publishing-to-github-pages-after-initial-setup)
- [Tools Used](#tools-used)
- [Project Status](#project-status)
- [Room for Improvement](#room-for-improvement)

## Introduction

An app where a user can search for books from Google Book's API using React JS, React Router and Asynchronous programming.

## Features

-   Search for books based on search terms from Google's Book database
-   Can return up to 40 results on a single page
-   Can sort by relevance or newest
-   Modal with more information appears after clicking on a result

## Technologies Used

-   React JavaScript with Create React App
-   React Router
-   SCSS/CSS
-   Google Books API

## Screenshots

![Search term 'To Kill a Mockingbird' with results and sort by options](https://i.imgur.com/uRBXmcT.png)
![First result modal view of 'To Kill a Mockingbird'](https://i.imgur.com/SruCEwH.png)
![Page Buttons](https://i.imgur.com/XCDtOSa.png)

## MVP

-   Header container introducing the page
-   Form containing text input and search button
-   Text input is used as a query and fetches the Google Books API using async/await
-   A container of book card components in a grid-like format and responsive on different screen sizes
-   BEM convention used appropriately
-   Components require styling have its own SCSS file
-   Palette uses variables and is stored in a global styles folder
-   Iterators are used over loops

## Going beyond the MVP

-   User can start a search by hitting the enter key or by pressing the search button
-   Provide feedback to user when there are no results for a particular query
-   A modal appears with more information about a book after clicking on a book card
-   Star Rating indicator
-   Pages to see other results

## Issues discovered during development

-   Google Books API totalItems value fluctuates when changing the following query parameters: maxResults, orderBy or startIndex for the same searchInput
-   Clicking on the page buttons quickly may continuously loop fetch requests

## Setup

### For viewing locally and further development

1. Git clone this repo `git clone git@github.com:chhaymatt/books.git`
2. Run `npm install`
3. Run `npm start`

### For publishing to GitHub Pages after initial setup

1. Run `npm deploy`

## Tools Used

-   Create React App - create a starting React app.
-   React Router - for navigating to other modal views in the URL.
-   Prettier - to tidy up code in spacing and structure. [Get Prettier Extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
-   Font Awesome - a library of icons that can be imported easily. [Get Font Awesome icons](https://fontawesome.com/start)
-   Favicon.io - generate a favicon. [Generate favicon](https://favicon.io/favicon-generator/)
-   Meta Tags - generate metadata. [Generate metadata](https://metatags.io/)
-   Coolors - colour palette generator. [Generate colour palette](https://coolors.co/generate)
-   Google Fonts - a library of free fonts. [Get Google Fonts](https://fonts.google.com/)

## Project Status

Project is ongoing

## Room for Improvement

-   Address eslint warnings
-   Move getData query to a higher level and pass props down rather than up and may try useContext
-   Sort by Oldest for the current page
