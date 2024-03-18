
import './Pagination.css'
import Button from "../button/Button.jsx";

function Pagination({ totalPages, onPageChange, currentPage}) {

    function pageChange(e, pageNumber ) {
        e.preventDefault();
        onPageChange(pageNumber);
    }

    return (

        <div className='pagination'>
                <Button
                    onClick={(e) => pageChange(e, currentPage - 1)}
                    className='pagination-button'
                    disabled={currentPage === 1}
                >
                    Previous
                </Button>
            <span className='page-settings'>{`Page ${currentPage} of ${totalPages}`}</span>
                <Button
                    onClick={(e) => pageChange(e, currentPage + 1)}
                    className='pagination-button'
                    disabled={currentPage === totalPages}
                >
                    Next
                </Button>
        </div>
    )
}


export default Pagination;









