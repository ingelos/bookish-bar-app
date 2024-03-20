import './App.css'
import {Route, Routes} from "react-router-dom";
import Navigation from './components/navigation/Navigation.jsx'
import Home from './pages/home/Home.jsx'
import Register from './pages/register/Register.jsx'
import Login from './pages/login/Login.jsx'
import Profile from './pages/profile/Profile.jsx'
import AccountSettings from './pages/accountSettings/AccountSettings.jsx'
import MyBooks from './pages/myBooks/MyBooks.jsx'
import BrowseMainPage from './pages/browse/BrowseMainPage.jsx'
import BrowseRomance from './pages/browse/browseRomance/BrowseRomance.jsx'
import NotFound from './pages/notFound/NotFound.jsx'
import Footer from "./components/footer/footer.jsx";
import BrowseScienceFiction from "./pages/browse/browseScienceFiction/BrowseScienceFiction.jsx";
import BrowseFantasy from "./pages/browse/browseFantasy/BrowseFantasy.jsx";
import BrowseMagic from "./pages/browse/browseMagic/BrowseMagic.jsx";
import BookDetailPage from "./pages/bookDetailPage/BookDetailPage.jsx";
import SearchResults from "./pages/searchResults/SearchResults.jsx";
import EditPicture from "./pages/editPicture/EditPicture.jsx";
import BrowseHistorical from "./pages/browse/browseHistorical/BrowseHistorical.jsx";
import BrowseMystery from "./pages/browse/browseMystery/BrowseMystery.jsx";
import BrowseLiterature from "./pages/browse/browseLiterature/BrowseLiterature.jsx";
import BrowseThriller from "./pages/browse/browseThriller/BrowseThriller.jsx";
import BrowseHumor from "./pages/browse/browseHumor/BrowseHumor.jsx";
import TrendingPage from "./pages/trendingPage/TrendingPage.jsx";
import AuthorPage from "./pages/authorPage/AuthorPage.jsx";
import BrowsePainting from "./pages/browse/browsePainting/BrowsePainting.jsx";
import BrowseFilm from "./pages/browse/browseFilm/BrowseFilm.jsx";
import BrowseMusic from "./pages/browse/browseMusic/BrowseMusic.jsx";
import BrowsePhotography from "./pages/browse/browsePhotography/BrowsePhotography.jsx";
import BrowsePoetry from "./pages/browse/browsePoetry/BrowsePoetry.jsx";
import BrowsePlays from "./pages/browse/browsePlays/BrowsePlays.jsx";
import BrowseDance from "./pages/browse/browseDance/BrowseDance.jsx";
import BrowseFashion from "./pages/browse/browseFashion/BrowseFashion.jsx";
import BrowseDesign from "./pages/browse/browseDesign/BrowseDesign.jsx";


function App() {

    return (
        <>
            <header>
                <div className='header-container'>
                    <h1 className='header-title'>BOOKISH BAR</h1>
                </div>
            </header>
            <Navigation />
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/account-settings' element={<AccountSettings/>}/>
                <Route path='/edit-picture' element={<EditPicture/>}/>
                <Route path='/my-books' element={<MyBooks/>}/>
                <Route path='/search-results' element={<SearchResults />}/>
                <Route path='/browse/:bookId' element={<BookDetailPage/>}/>
                <Route path='/:authorId' element={<AuthorPage/>}/>
                <Route path='/trending' element={<TrendingPage/>}/>
                <Route path='/browse' element={<BrowseMainPage/>}/>
                <Route path='/browse/romance' element={<BrowseRomance/>}/>
                <Route path='/browse/science_fiction' element={<BrowseScienceFiction/>}/>
                <Route path='/browse/fantasy' element={<BrowseFantasy/>}/>
                <Route path='/browse/humor' element={<BrowseHumor/>}/>
                <Route path='/browse/magic' element={<BrowseMagic/>}/>
                <Route path='/browse/historical' element={<BrowseHistorical/>}/>
                <Route path='/browse/mystery' element={<BrowseMystery/>}/>
                <Route path='/browse/literature' element={<BrowseLiterature/>}/>
                <Route path='/browse/thriller' element={<BrowseThriller/>}/>
                <Route path='/browse/poetry' element={<BrowsePoetry/>}/>
                <Route path='/browse/plays' element={<BrowsePlays/>}/>
                <Route path='/browse/painting_and_paintings' element={<BrowsePainting/>}/>
                <Route path='/browse/film' element={<BrowseFilm/>}/>
                <Route path='/browse/music' element={<BrowseMusic/>}/>
                <Route path='/browse/photography' element={<BrowsePhotography/>}/>
                <Route path='/browse/dance' element={<BrowseDance/>}/>
                <Route path='/browse/design' element={<BrowseDesign/>}/>
                <Route path='/browse/fashion' element={<BrowseFashion/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
            <Footer/>
        </>
    )
}

export default App
