import { Routes, Route, BrowserRouter } from "react-router-dom";
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetups';
import FavoritesPage from './pages/Favorites';
import MainNavigation from "./components/layout/MainNavigation";


  function App() {
    return (
      
      <BrowserRouter>
      <MainNavigation />
      <Routes>
        <Route path='/' exact element={<AllMeetupsPage/>} />
       <Route path='/new-meetup' element={<NewMeetupPage/>} />
        <Route path='/favorites' element={<FavoritesPage/>}/>
      </Routes>
      </BrowserRouter>
    );
  }
  

export default App;