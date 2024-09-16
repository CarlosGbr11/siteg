import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './pages/Footer';
import Header from './pages/Header';
import Inicio from './components/Inicio';
import Calcados from './components/Calcados';
import Homem from './components/Homem';
import Mulher from './components/Mulher';
import Infantil from './components/Infantil';
import ComprarTenis1 from './pages/ComprarTenis1';
import Ajuda from './pages/Ajuda';
import Suporte from './pages/Suporte';
import './App.css'



function App() {

  return (

    <Router>

      <div className='container-app'>

        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/calcados' element={<Calcados />} />
            <Route path='/mulher' element={<Mulher />} />
            <Route path='/homem' element={<Homem />} />
            <Route path='/infantil' element={<Infantil />} />
            <Route path="/comprar/tenis1" element={<ComprarTenis1 />} />
            <Route path='/ajuda' element={<Ajuda />} />
            <Route path='/suporte' element={<Suporte />} />
          </Routes>

        </main>
        <Footer />
      </div>

    </Router>
  )
}

export default App
