
function getSavedBooks() {
    return localStorage.getItem('mybooks')
        ? JSON.parse(localStorage.getItem('mybooks'))
        : [];
}

export default getSavedBooks;