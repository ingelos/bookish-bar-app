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
import LightbulbIcon from '../../assets/icons/lightbulb.svg';
import FeetIcon from '../../assets/icons/footprints.svg';
import {useNavigate} from "react-router-dom";
import BrowseSubjectButton from "../../components/browseSubjectButton/BrowseSubjectButton.jsx";
import BrowseSubject from "../../components/browseSubject/BrowseSubject.jsx";
import BrowseMainPreview from "../../components/browseMainPreview/BrowseMainPreview.jsx";
import SubjectNavigation from "../../components/subjectNavigation/SubjectNavigation.jsx";


function BrowseMainPage() {

    const navigate = useNavigate();

    // const handleClickRomance = () => navigate('/browse/romance')
    // const handleClickSciFi = () => navigate('/browse/science_fiction')

    // const handleClickFilm = () => navigate('/browse/film')

    const handleClickMystery = () => navigate('/browse/mystery')
    const handleClickHumor = () => navigate('/browse/humor')
    const handleClickLiterature = () => navigate('/browse/literature')
    const handleClickThriller = () => navigate('/browse/thriller')
    const handleClickHistorical = () => navigate('/browse/historical')
    const handleClickMagic = () => navigate('/browse/magic')
    const handleClickPoetry = () => navigate('/browse/poetry')
    const handleClickPlays = () => navigate('/browse/plays')
    const handleClickPainting = () => navigate('/browse/painting_and_paintings')
    const handleClickMusic = () => navigate('/browse/music')
    const handleClickPhotography = () => navigate('/browse/photography')
    const handleClickDance = () => navigate('/browse/dance')
    const handleClickDesign = () => navigate('/browse/design')
    const handleClickFashion = () => navigate('/browse/fashion')
    const handleClickFantasy = () => navigate('/browse/fantasy')


    return (
        <section className='browse-section outer-container'>
            <div className='browse-section inner-container'>
                <div className='browse-section-inner-content-container'>
                    <div className='preview-container'>

                        <BrowseMainPreview
                            subject={'romance'}
                            subjectTitle='Romance'
                        />
                        <BrowseMainPreview
                            subject={'science_fiction'}
                            subjectTitle='Science Fiction'
                        />
                        <BrowseMainPreview
                            subject={'film'}
                            subjectTitle='Film'
                        />
                        <div className='buttons-container'>
                            <h3 className='buttons-container-title'>More subjects:</h3>
                            <div className='preview-link-buttons-container'>
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
                                <BrowseSubjectButton
                                    icon={BrushIcon}
                                    onClick={handleClickPainting}
                                    subject='Painting'
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
                                    icon={LightbulbIcon}
                                    onClick={handleClickDesign}
                                    subject='Design'
                                />
                                <BrowseSubjectButton
                                    icon={ScrollIcon}
                                    onClick={handleClickFashion}
                                    subject='Fashion'
                                />
                                <BrowseSubjectButton
                                    icon={MoonIcon}
                                    onClick={handleClickFantasy}
                                    subject='Fantasy'
                                />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<div className='navigation-side'>*/}
                    {/*    /!*<SubjectNavigation/>*!/*/}
                    {/*</div>*/}
                </div>
        </section>
    )
}

export default BrowseMainPage;