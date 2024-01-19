import './App.css'
import {Route, Routes, useNavigate} from "react-router-dom";
import Navigation from './components/navigation/Navigation.jsx'
import Home from './pages/home/Home.jsx'
import Register from './pages/register/Register.jsx'
import Login from './pages/login/Login.jsx'
import Profile from './pages/profile/Profile.jsx'
import EditProfile from './pages/editProfile/EditProfile.jsx'
import AccountSettings from './pages/accountSettings/AccountSettings.jsx'
import MyBooks from './pages/myBooks/MyBooks.jsx'
import BookDetail from './pages/bookDetail/BookDetail.jsx'
import Browse from './pages/browse/Browse.jsx'
import BrowseGenre from './pages/BrowseGenre/BrowseGenre.jsx'
import SearchResults from './pages/searchResults/SearchResults.jsx'
import NotFound from './pages/notFound/NotFound.jsx'
import UserIcon from './assets/icons/user-circle.svg'
import Copyright from './assets/icons/copyright.svg'

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
            <Route path='/account-settings' element={<AccountSettings/>}/>
            <Route path='/my-books' element={<MyBooks/>}/>
            <Route path='/books/:id' element={<BookDetail/>}/>
            <Route path='/browse' element={<Browse/>}/>
            <Route path='/browse:id' element={<BrowseGenre/>}/>
            <Route path='/search-results' element={<SearchResults/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
        <footer>
            <p className='footer-content'>Bookish Bar 2024</p>
            <img src={Copyright} id='copyright-icon' alt='copyright-icon'/>
            <p>created by Inge Los</p>
        </footer>
    </>
  )
}

export default App
