import './Home.css'

function Home() {
    return (
        <>

            <section className='home-section outer-container'>
                <div className='home-section inner-container'>
                    <div className='home-section list-items'>
                        <h2 className='list-title'>New Releases</h2>
                        <ul className='book-list'>
                            <li><img /></li>
                            <li><img /></li>
                            <li><img /></li>
                            <li><img /></li>
                            <li><img /></li>
                        </ul>
                        <h3 className='more-link'>More new...</h3>
                    </div>
                    <div className='home-section list-items'>
                        <h2 className='list-title'>Trending</h2>
                        <ul className='book-list'>
                            <li><img /></li>
                            <li><img /></li>
                            <li><img /></li>
                            <li><img /></li>
                            <li><img /></li>
                        </ul>
                        <h3 className='more-link'>More trending...</h3>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;