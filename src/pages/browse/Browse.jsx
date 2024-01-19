import './Browse.css'
import HeartIcon from '../../assets/icons/heartL.svg'
import FlyingSaucerIcon from '../../assets/icons/flying-saucer.svg'
import DetectiveIcon from '../../assets/icons/detective.svg'
import MaskIcon from '../../assets/icons/mask-happy.svg'
import MoonIcon from '../../assets/icons/moon-stars.svg'
import CastleIcon from '../../assets/icons/castle-turret.svg'
import KniveIcon from '../../assets/icons/knife.svg'
import FlaskIcon from '../../assets/icons/flask.svg'
import PencilIcon from '../../assets/icons/pencil.svg'


function Browse() {

    return (
        <section className='browse-section outer-container'>
            <div className='browse-section inner-container'>
                <h2 className='browse-title'>Discover all types of fiction!</h2>
                <div className='browse-section browse-content'>
                    <button className='browse-section subjects' >
                        <img src={FlyingSaucerIcon} className='subject-icon' alt='subject-icon'/>
                        <h3 className='subject-title'>Sci-fi</h3>
                    </button>
                    <button className='browse-section subjects' >
                        <img src={HeartIcon} className='subject-icon' alt='subject-icon'/>
                        <h3 className='subject-title'>Romance</h3>
                    </button>
                    <button className='browse-section subjects'>
                        <img src={DetectiveIcon} className='subject-icon' alt='subject-icon'/>
                        <h3 className='subject-title'>Mystery</h3>
                    </button>
                    <button className='browse-section subjects'>
                        <img src={MaskIcon} className='subject-icon' alt='subject-icon'/>
                        <h3 className='subject-title'>Humor</h3>
                    </button>
                    <button className='browse-section subjects'>
                        <img src={MoonIcon} className='subject-icon' alt='subject-icon'/>
                        <h3 className='subject-title'>Fantasy</h3>
                    </button>
                    <button className='browse-section subjects'>
                        <img src={CastleIcon} className='subject-icon' alt='subject-icon'/>
                        <h3 className='subject-title'>Historical fiction</h3>
                    </button>
                    <button className='browse-section subjects'>
                        <img src={KniveIcon} className='subject-icon' alt='subject-icon'/>
                        <h3 className='subject-title'>Thriller</h3>
                    </button>
                    <button className='browse-section subjects'>
                        <img src={FlaskIcon} className='subject-icon' alt='subject-icon'/>
                        <h3 className='subject-title'>Magic</h3>
                    </button>
                    <button className='browse-section subjects'>
                        <img src={PencilIcon} className='subject-icon' alt='subject-icon'/>
                        <h3 className='subject-title'>Poetry</h3>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Browse;