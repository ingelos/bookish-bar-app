import './Browse.css'

function Browse() {
    return (
        <section className='browse-section outer-container'>
            <div className='browse-section left-container'>
                <div className='browse-section browse-content'>
                <div className='browse-section list-items'>
                    <h2 className='list-title'>Classics</h2>
                    <ul className='book-list'>
                        <li><img /></li>
                        <li><img /></li>
                        <li><img /></li>
                        <li><img /></li>
                        <li><img /></li>
                    </ul>
                    <h3 className='more-link'>More classics...</h3>
                </div>
                <div className='browse-section list-items'>
                    <h2 className='list-title'>Romance</h2>
                    <ul className='book-list'>
                        <li><img /></li>
                        <li><img /></li>
                        <li><img /></li>
                        <li><img /></li>
                        <li><img /></li>
                    </ul>
                    <h3 className='more-link'>More romance...</h3>
                </div>
                <div className='browse-section list-items'>
                    <h2 className='list-title'>Fantasy</h2>
                    <ul className='book-list'>
                        <li><img /></li>
                        <li><img /></li>
                        <li><img /></li>
                        <li><img /></li>
                        <li><img /></li>
                    </ul>
                    <h3 className='more-link'>More fantasy...</h3>
                </div>
            </div>
                <div className='genre-list'>
                    <h3>Genres</h3>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
            <div className='browse-section right-container'>

            </div>
        </section>
    )
}

export default Browse;