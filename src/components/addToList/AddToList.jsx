import {Link} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";

function AddToList(bookList, setBookList) {

    const {isAuth} = useContext(AuthContext);

    return (
        <div>
        {isAuth ?
                <div className='book-list-add'>
                    <label htmlFor='book-list'>
                        <select
                            id='add-to-list'
                            name='add-to-list'
                            value={bookList}
                            onChange={(e) => setBookList(e.target.value)}
                        >
                            <option value='want-to-read'>
                                Want to read
                            </option>
                            <option value='read'>
                                Read
                            </option>
                        </select>
                    </label>
                </div>
                :
                <div className='book-list-add'>
                    <Link to={'/login'}>
                        <select id='add-to-list'>
                            <option value='want-to-read'>
                                Want to read
                            </option>
                        </select>
                    </Link>
                </div>

        }
        </div>
    )
}

export default AddToList;