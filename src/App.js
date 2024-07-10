import './App.css';
import Home from './pages/Home';
import AgregarVideo from './pages/AgregarVideo';
import Header from './componentes/Header';
import './estilos/Header.css';
import Footer from './componentes/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App(){
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/nuevo-video' element={<AgregarVideo />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;