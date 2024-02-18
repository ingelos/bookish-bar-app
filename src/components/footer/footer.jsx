import Copyright from "../../assets/icons/copyright.svg";
import './footer.css'

function Footer() {
    return (
        <footer>
            <div className='footer-container'>
                <div className='by-info'>
                    <p className='footer-content'>Bookish Bar 2024</p>
                    <img src={Copyright} id='copyright-icon' alt='copyright-icon'/>
                    <p>created by Inge Los</p>
                </div>
                <p>All book data is from Open Library API, go to their website here</p>
            </div>
        </footer>
    )
}

export default Footer;