# Bookish Bar App

## Table of contents
1. Description
2. Screenshot MyBooks page
3. Requirements
4. Start application
5. Example usage
6. Acknowledgements
7. Other commands

## 1. Description
The Bookish Bar App is a book search and save project using the Open Library APIs.

On Bookish Bar users can search for books (by title/author or genre) and save them to a personal page (MyBooks).
The user can change the status of a saved book from 'want to read' to 'read' and rate the book by star rating.
This provides the user with an overview of all their read books and favorites.

Documentation for the Open Library APIs can be found here: https://openlibrary.org/developers/api

## 2. Screenshot MyBooks page (personal booklist)

![screenshot-mybooks-page](https://github.com/ingelos/bookish-bar-app/assets/142794981/a7a40661-24b4-453e-9131-44d6796d8255)

## 3. Requirements

This project was set up with [Vite](https://vitejs.dev/guide/) (React version 18.2.0 https://react.dev)

The NOVI Educational Backend was used for this application. The backend runs on a Heroku server. The database of users empties within an hour.


## 4. Start application

Clone the repository to your local machine: 

``` 
git@github.com:ingelos/bookish-bar-app.git
```
Next, install the required dependencies by running the following command in terminal:
```
npm install
```
After this, start the application by running:
``` 
npm run dev
```
After running this command, the application will start and be accessible in the browser at http://localhost:5173/


## 5. Example usage

Users can browse through subjects and save books. The application shows when the user saved a book and when it's already on their list.

![screenshot-browse-subject](https://github.com/ingelos/bookish-bar-app/assets/142794981/abb9ac88-2906-4dd4-92b1-b04e3b35d9bc)


## 6. Acknowledgements

All book data used in this project is from the Open Library Api:
https://openlibrary.org/developers/api

> IMPORTANT: 
> 
> Most of the API's from the Open Library are under active development and may change in the future. 
> This could mean that some data and functionalities of Bookish Bar might not be accessible in the future.


This project is inspired by Goodreads (https://www.goodreads.com)

Icons used are from React icons and Phosphor Icons (https://phosphoricons.com)

## 7. Other commands


To package the application for deployment, run:
```
npm run build
```
This creates a build directory with a production build of this app.

To check if everything in production works as expected run the following command:
```
npm run preview
```
For an overview of programming errors, bugs, stylistic errors etcetera run:
``` 
npm run lint 
```


