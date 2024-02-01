
import './Pagination.css'

function Pagination({booksPerPage, totalBooks, paginate}) {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className='pagination'>
            <ul className='pagination-list'>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <a onClick={() => paginate(number)}
                           href=''
                           className='page-link'
                        >
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )

}

export default Pagination;








