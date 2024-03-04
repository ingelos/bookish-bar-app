// import {Link} from "react-router-dom";
// import {useContext, useState} from "react";
// import {AuthContext} from "../../context/AuthContext.jsx";
// import Button from "../button/Button.jsx";
// import './AddToList.css';
//
// function AddToList() {
//
//
//     const {isAuth} = useContext(AuthContext);
//     const [myBooks, setMyBooks] = useState([]);
//     const [addedBook, setAddedBook] = useState({});
//
//     function handleAddToMyBooks(book) {
//         const updatedMyBooks = [...myBooks, book];
//         setMyBooks(updatedMyBooks);
//         localStorage.setItem('mybooks', JSON.stringify(updatedMyBooks))
//         setAddedBook((prev) => ({
//             ...prev,
//             [book.key]: true,
//         }));
//     }
//
//     return (
//         <div>
//         {isAuth ?
//                 <div className='book-list-add'>
//                     <Button
//                         onClick={handleAddToMyBooks}
//                         className='book-list'
//                     >
//                         Add to MyBooks
//                     </Button>
//                 </div>
//                 :
//                 <div className='book-list-add'>
//                     <Link to={'/login'}>
//                        <Button
//                            className='book-list'
//                            id='book-list'
//                        >
//                                 Add to MyBooks
//                         </Button>
//                     </Link>
//                 </div>
//
//         }
//         </div>
//     )
// }
//
// export default AddToList;
