# React-Books
A books query app using Google Books API and React

### Overview

This is a React-based Google Books Search app. It requires creating React components, working with helper/util functions, and utilizing React lifecycle methods to query and display books based on user searches. It also uses Node, Express and MongoDB so that users can save books to review or purchase later.

### Deployed Link

https://react-books-google.herokuapp.com/

### Design Plan

* This application has 3 pages:

  * [Search] - User can search for books via the Google Books API and render them here. User has the option to "View" the book, bringing them to the book on Google Books or to "Save" a book by pressing on the "heart" icon, saving it to the Mongo database.

  * [SavedBooks] - Renders all books saved to the Mongo database. User has an option to "View" the book, bringing them to the [Details] page, or "Delete" a book, removing it from the Mongo database.

  * [Details] - Renders all information about the book, has the option to return to [SavedBooks] page.

1. At a minimum, books have the following fields:

* `title` - Title of the book from the Google Books API

* `authors` - The books's author(s) as returned from the Google Books API

* `description` - The book's description as returned from the Google Books API

* `thumbnail` - The Book's thumbnail image as returned from the Google Books API

* `href` - The Book's information link as returned from the Google Books API

* `documents` in the `books` collection are cerated similarly to the following:

    ```js
    {
      authors: ["Suzanne Collins"]
      description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature."
      image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
      link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api"
      title: "The Hunger Games"
    }
    ```

2. The layout is a SPA (Single Page Application) that uses [`react-router-dom`](https://github.com/reactjs/react-router) to navigate, hide and show your React components without changing the route within Express.

* The layout includes React Components for each page `Search`, `Saved Books` and `Details`.

3. The following Express routes are used in the app:

* `/api/books` (get) - returns all saved books as JSON.

* `/api/books` (post) - used to save a new book to the database.

* `/api/books/:id` (delete) - used to delete a book from the database by Mongo `_id`.

* `*` (get) - loads single HTML page in `client/build/index.html`. 

- - -