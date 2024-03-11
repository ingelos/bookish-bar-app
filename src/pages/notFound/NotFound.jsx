import {Link} from "react-router-dom";


function NotFound() {
    return (
        <section className='notfound-section outer-container'>
            <div className='notfound-section inner-container'>
                <h2>404</h2>
                <h3>We can't find what you're looking for</h3>
                <h4>Take me back to the <Link to={'/'}>home page</Link></h4>
            </div>
        </section>
    )
}

export default NotFound;