


import { Routes, Route, BrowserRouter } from "react-router-dom";
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetups';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout';

function App() {
  return (
    
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<AllMeetupsPage />} />
          <Route path='/new-meetup' element={<NewMeetupPage />} />
          <Route path='/favorites' element={<FavoritesPage />} />
        </Routes>
        </Layout>
      </BrowserRouter>

  );
}

export default App;