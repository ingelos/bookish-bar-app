import {Link} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";
import Button from "../button/Button.jsx";
import './AddToList.css';

function AddToList(handleAddToMyBooks, book) {

    const {isAuth} = useContext(AuthContext);

    return (
        <div>
        {isAuth ?
                <div className='book-list-add'>
                    <Button
                        onClick={handleAddToMyBooks(book)}
                        className='book-list'
                    >
                        Add to MyBooks
                    </Button>
                </div>
                :
                <div className='book-list-add'>
                    <Link to={'/login'}>
                       <Button
                           className='book-list'
                           id='book-list'
                       >
                                Add to MyBooks
                        </Button>
                    </Link>
                </div>

        }
        </div>
    )
}

export default AddToList;