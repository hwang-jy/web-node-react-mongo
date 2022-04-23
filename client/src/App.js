import { Route, Routes } from 'react-router-dom';
//import * as dotenv from 'dotenv';

import Layout from './Layout';
import NotFound from './pages/NotFound'

import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';

import Menu from './pages/Menu';

import Article from './pages/Article';
import Articles from './pages/Articles';

import Login from './pages/Login';
import MyPage from './pages/MyPage';

import './App.css';

function App() {

  console.log(process.env.REACT_APP_GOOGLE_CLIENT_ID);

  return (
    <div>
      <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profiles/:username" element={<Profile />} />
          </Route>

          <Route path="/articles" element={<Articles />} >
            <Route path=":id" element={<Article />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/mypage" element={<MyPage />} />
          
          <Route path="*" element={<NotFound />} />
      </Routes>

      <Menu />
    </div>
  );
}

export default App;