import './BrowseMainPage.css';
import HeartIcon from '../../assets/icons/heartL.svg';
import FlyingSaucerIcon from '../../assets/icons/flying-saucer.svg';
import DetectiveIcon from '../../assets/icons/detective.svg';
import MaskIcon from '../../assets/icons/mask-happy.svg';
import MoonIcon from '../../assets/icons/moon-stars.svg';
import CastleIcon from '../../assets/icons/castle-turret.svg';
import KniveIcon from '../../assets/icons/knife.svg';
import FlaskIcon from '../../assets/icons/flask.svg';
import PencilIcon from '../../assets/icons/pencil.svg';
import PenInkIcon from '../../assets/icons/pen-nib.svg';
import ScrollIcon from '../../assets/icons/scroll.svg';
import BrushIcon from '../../assets/icons/paint-brush.svg';
import MovieIcon from '../../assets/icons/film-slate.svg';
import MusicNoteIcon from '../../assets/icons/music-notes.svg';
import CameraIcon from '../../assets/icons/camera.svg';
import FeetIcon from '../../assets/icons/footprints.svg';
import {useNavigate} from "react-router-dom";
import BrowseSubjectButton from "../../components/browseSubjectButton/BrowseSubjectButton.jsx";


function BrowseMainPage() {

    const navigate = useNavigate();

    const handleClickRomance = () => navigate('/browse/romance')
    const handleClickSciFi = () => navigate('/browse/science_fiction')
    const handleClickMystery = () => navigate('/browse/mystery')
    const handleClickHumor = () => navigate('/browse/humor')
    const handleClickFantasy = () => navigate('/browse/fantasy')
    const handleClickLiterature = () => navigate('/browse/literature')
    const handleClickThriller = () => navigate('/browse/thriller')
    const handleClickHistorical = () => navigate('/browse/historical')
    const handleClickMagic = () => navigate('/browse/magic')
    const handleClickPoetry = () => navigate('/browse/poetry')
    const handleClickPlays = () => navigate('/browse/plays')
    const handleClickPainting = () => navigate('/browse/painting_and_paintings')
    const handleClickFilm = () => navigate('/browse/film')
    const handleClickMusic = () => navigate('/browse/music')
    const handleClickPhotography = () => navigate('/browse/photography')
    const handleClickDance = () => navigate('/browse/dance')
    const handleClickDesign = () => navigate('/browse/design')
    const handleClickFashion = () => navigate('/browse/fashion')


    return (
        <section className='browse-section outer-container'>
            <div className='browse-section inner-container'>
                <h3 className='browse-page-subtitle'>Click on any subject and get transported into your world of choice!</h3>
                <article className='browse-article'>
                    <h2 className='browse-title'>Fiction</h2>
                    <div className='browse-section-content'>
                        <BrowseSubjectButton
                            icon={HeartIcon}
                            onClick={handleClickRomance}
                            subject='Romance'
                            />
                        <BrowseSubjectButton
                            icon={FlyingSaucerIcon}
                            onClick={handleClickSciFi}
                            subject='Sci-Fi'
                        />
                        <BrowseSubjectButton
                            icon={DetectiveIcon}
                            onClick={handleClickMystery}
                            subject='Mystery'
                        />
                        <BrowseSubjectButton
                            icon={MaskIcon}
                            onClick={handleClickHumor}
                            subject='Humor'
                        />
                        <BrowseSubjectButton
                            icon={MoonIcon}
                            onClick={handleClickFantasy}
                            subject='Fantasy'
                        />
                        <BrowseSubjectButton
                            icon={PencilIcon}
                            onClick={handleClickLiterature}
                            subject='Literature'
                        />
                        <BrowseSubjectButton
                            icon={KniveIcon}
                            onClick={handleClickThriller}
                            subject='Thriller'
                        />
                        <BrowseSubjectButton
                            icon={CastleIcon}
                            onClick={handleClickHistorical}
                            subject='Historical'
                            />
                        <BrowseSubjectButton
                            icon={FlaskIcon}
                            onClick={handleClickMagic}
                            subject='Magic'
                        />
                        <BrowseSubjectButton
                            icon={PenInkIcon}
                            onClick={handleClickPoetry}
                            subject='Poetry'
                        />
                        <BrowseSubjectButton
                            icon={ScrollIcon}
                            onClick={handleClickPlays}
                            subject='Plays'
                        />
                    </div>
                </article>
                <article className='browse-article'>
                    <h2 className='browse-title'>Arts</h2>
                    <div className='browse-section-content'>
                        <BrowseSubjectButton
                            icon={BrushIcon}
                            onClick={handleClickPainting}
                            subject='Painting'
                        />
                        <BrowseSubjectButton
                            icon={MovieIcon}
                            onClick={handleClickFilm}
                            subject='Film'
                        />
                        <BrowseSubjectButton
                            icon={MusicNoteIcon}
                            onClick={handleClickMusic}
                            subject='Music'
                        />
                        <BrowseSubjectButton
                            icon={CameraIcon}
                            onClick={handleClickPhotography}
                            subject='Photos'
                        />
                        <BrowseSubjectButton
                            icon={FeetIcon}
                            onClick={handleClickDance}
                            subject='Dance'
                        />
                        <BrowseSubjectButton
                            icon={ScrollIcon}
                            onClick={handleClickDesign}
                            subject='Design'
                        />
                        <BrowseSubjectButton
                            icon={ScrollIcon}
                            onClick={handleClickFashion}
                            subject='Fashion'
                        />



                        {/*<Button className='browse-section subjects' onClick={handleClick10}>*/}
                        {/*    <img src={''} className='subject-icon' alt='subject-icon'/>*/}
                        {/*    <h3 className='subject-title'>Painting</h3>*/}
                        {/*</Button>*/}
                        {/*<Button className='browse-section subjects' onClick={handleClick11}>*/}
                        {/*    <img src={''} className='subject-icon' alt='subject-icon'/>*/}
                        {/*    <h3 className='subject-title'>Film</h3>*/}
                        {/*</Button>*/}
                        {/*<Button className='browse-section subjects' onClick={handleClick12}>*/}
                        {/*    <img src={''} className='subject-icon' alt='subject-icon'/>*/}
                        {/*    <h3 className='subject-title'>Music</h3>*/}
                        {/*</Button>*/}
                        {/*<Button className='browse-section subjects' onClick={handleClick13}>*/}
                        {/*    <img src={''} className='subject-icon' alt='subject-icon'/>*/}
                        {/*    <h3 className='subject-title'>Photography</h3>*/}
                        {/*</Button>*/}
                        {/*<Button className='browse-section subjects' onClick={handleClick14}>*/}
                        {/*    <img src={''} className='subject-icon' alt='subject-icon'/>*/}
                        {/*    <h3 className='subject-title'>Dance</h3>*/}
                        {/*</Button>*/}
                        {/*<Button className='browse-section subjects' onClick={handleClick15}>*/}
                        {/*    <img src={''} className='subject-icon' alt='subject-icon'/>*/}
                        {/*    <h3 className='subject-title'>Design</h3>*/}
                        {/*</Button>*/}
                        {/*<Button className='browse-section subjects' onClick={handleClick16}>*/}
                        {/*    <img src={''} className='subject-icon' alt='subject-icon'/>*/}
                        {/*    <h3 className='subject-title'>Fashion</h3>*/}
                        {/*</Button>*/}
                    </div>
                </article>
            </div>
        </section>
    )
}

export default BrowseMainPage;