import './App.css'
import {Route, Routes} from "react-router-dom";
import Navigation from './components/navigation/Navigation.jsx'
import Home from './pages/home/Home.jsx'
import Register from './pages/register/Register.jsx'
import Login from './pages/login/Login.jsx'
import Profile from './pages/profile/Profile.jsx'
import EditProfile from './pages/editProfile/EditProfile.jsx'
import AccountSettings from './pages/accountSettings/AccountSettings.jsx'
import MyBooks from './pages/myBooks/MyBooks.jsx'
import Browse from './pages/browse/Browse.jsx'
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


function App() {


  return (
    <>
        <header>
            <div className='header-container'>
                <h1 className='header-title'>BOOKISH BAR</h1>
            </div>
        </header>
     <Navigation/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/edit-profile' element={<EditProfile/>}/>
            <Route path='/edit-picture' element={<EditPicture/>}/>
            <Route path='/account-settings' element={<AccountSettings/>}/>
            <Route path='/my-books' element={<MyBooks/>}/>
            <Route path='/browse/:id' element={<BookDetailPage/>}/>
            <Route path='/browse' element={<Browse/>}/>
            <Route path='/browse/romance' element={<BrowseRomance/>}/>
            <Route path='/browse/science_fiction' element={<BrowseScienceFiction/>}/>
            <Route path='/browse/fantasy' element={<BrowseFantasy/>}/>
            <Route path='/browse/magic' element={<BrowseMagic/>}/>
            <Route path='/browse/historical' element={<BrowseHistorical/>}/>
            <Route path='/search-results' element={<SearchResults/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
       <Footer/>
    </>
  )
}

export default App
