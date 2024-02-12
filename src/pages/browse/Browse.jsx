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
import {useNavigate} from "react-router-dom";
import Button from "../../components/button/Button.jsx";



function Browse() {

    const navigate = useNavigate();

    const handleClick1 = () => navigate('/browse/romance')
    const handleClick2 = () => navigate('/browse/science_fiction')
    const handleClick3 = () => navigate('/browse/mystery')
    const handleClick4 = () => navigate('/browse/humor')
    const handleClick5 = () => navigate('/browse/fantasy')
    const handleClick6 = () => navigate('/browse/literature')
    const handleClick7 = () => navigate('/browse/thriller')
    const handleClick8 = () => navigate('/browse/historical')
    const handleClick9 = () => navigate('/browse/magic')


    return (
        <section className='browse-section outer-container'>
            <div className='browse-section inner-container'>
                <h2 className='browse-title'>Discover all types of fiction</h2>
                <h3 className='browse-subtitle'>Click on any subject and get transported into your world of choice!</h3>
                <div className='browse-section browse-content'>
                    <Button className='browse-section subjects' onClick={handleClick1}>
                        <img src={HeartIcon} className='subject-icon' alt='subject-icon'/>
                        <h3 className='subject-title'>Romance</h3>
                    </Button>
                    <Button className='browse-section subjects' onClick={handleClick2}>
                        <img src={FlyingSaucerIcon} className='subject-icon' alt='subject-icon'/>
                        <h3 className='subject-title'>Sci-fi</h3>
                    </Button>
                    <Button className='browse-section subjects' onClick={handleClick3}>
                        <img src={DetectiveIcon} className='subject-icon' alt='subject-icon'/>
                        <h3 className='subject-title'>Mystery</h3>
                    </Button>
                    <Button className='browse-section subjects' onClick={handleClick4}>
                        <img src={MaskIcon} className='subject-icon' alt='subject-icon'/>
                        <h3 className='subject-title'>Humor</h3>
                    </Button>
                    <Button className='browse-section subjects' onClick={handleClick5}>
                        <img src={MoonIcon} className='subject-icon' alt='subject-icon'/>
                        <h3 className='subject-title'>Fantasy</h3>
                    </Button>
                    <Button className='browse-section subjects' onClick={handleClick6}>
                        <img src={PencilIcon} className='subject-icon' alt='subject-icon'/>
                        <h3 className='subject-title'>Literature</h3>
                    </Button>
                    <Button className='browse-section subjects' onClick={handleClick7}>
                        <img src={KniveIcon} className='subject-icon' alt='subject-icon'/>
                        <h3 className='subject-title'>Thriller</h3>
                    </Button>
                    <Button className='browse-section subjects' onClick={handleClick8}>
                        <img src={CastleIcon} className='subject-icon' alt='subject-icon'/>
                        <h3 className='subject-title'>Historical</h3>
                    </Button>

                    <Button className='browse-section subjects' onClick={handleClick9}>
                        <img src={FlaskIcon} className='subject-icon' alt='subject-icon'/>
                        <h3 className='subject-title'>Magic</h3>
                    </Button>

                </div>
            </div>
        </section>
    )
}

export default Browse;