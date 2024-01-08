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
import BookDetail from './pages/bookDetail/BookDetail.jsx'
import Browse from './pages/browse/Browse.jsx'
import BrowseGenre from './pages/BrowseGenre/BrowseGenre.jsx'
import SearchResults from './pages/searchResults/SearchResults.jsx'
import NotFound from './pages/notFound/NotFound.jsx'
import UserIcon from './assets/icons/user-circle.svg'

function App() {


  return (
    <>
        <header>
            <div className='header-container'>
            <h1 className='header-title'>BOOKISH BAR</h1>
            <div className='login-container'>
                <button type='submit' className='login-button'>Login</button>
                <img src={UserIcon} id='user-icon' alt='user-icon'/>
            </div>
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
            <Route path='/browse-genre' element={<BrowseGenre/>}/>
            <Route path='/search-results' element={<SearchResults/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    </>
  )
}

export default App
