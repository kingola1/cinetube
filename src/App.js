import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// import Routess from './config/Routess';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Detail from './pages/detail/Detail';

function App() {
  return (
    
        <Router>
          <Header />
            <Routes>
                <Route 
                    path='/'
                    element={<Home />}
                />
                <Route 
                    path='/:category/search/:keyword'
                    element={<Catalog />}
                />
                <Route 
                    path='/:category/:id'
                    element={<Detail />}
                />
                <Route 
                    path='/:category'
                    element={<Catalog />}
                />
            </Routes>
            <Footer />
        </Router>
  
  );
}

export default App;
