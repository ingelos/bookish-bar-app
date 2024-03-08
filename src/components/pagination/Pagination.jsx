
import './Pagination.css'
import Button from "../button/Button.jsx";

function Pagination({page, totalPages, onPageChange}) {

    function pageChange(e, pageNumber) {
        e.preventDefault();
        onPageChange(pageNumber);
    }

    return (

        <div className='pagination'>
            {page > 1 && (
                <Button
                    onClick={(e) => pageChange(e, page - 1)}
                    className='pagination-button'
                >
                    Previous
                </Button>
            )}
            {page < totalPages && (
                <Button
                    onClick={(e) => pageChange(e, page + 1)}
                    className='pagination-button'
                >
                    Next
                </Button>
            )}
        </div>
    )
}


export default Pagination;









