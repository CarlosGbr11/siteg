import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './pages/Footer';
import Header from './pages/Header';
import Inicio from './components/Inicio';
import ComprarTenis1 from './pages/ComprarTenis1';
import ComprarTenis2 from './pages/ComprarTenis2';
import ComprarTenis3 from './pages/ComprarTenis3';
import ComprarTenis4 from './pages/ComprarTenis4';
import ComprarTenis5 from './pages/ComprarTenis5';
import ComprarTenis6 from './pages/ComprarTenis6';
import ComprarTenis7 from './pages/ComprarTenis7';
import ComprarTenis8 from './pages/ComprarTenis8';
import ComprarTenis9 from './pages/ComprarTenis9';
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
            <Route path="/comprar/tenis1" element={<ComprarTenis1 />} />
            <Route path="/comprar/tenis2" element={<ComprarTenis2 />} />
            <Route path="/comprar/tenis3" element={<ComprarTenis3 />} />
            <Route path="/comprar/tenis4" element={<ComprarTenis4 />} />
            <Route path="/comprar/tenis5" element={<ComprarTenis5 />} />
            <Route path="/comprar/tenis6" element={<ComprarTenis6 />} />
            <Route path="/comprar/tenis7" element={<ComprarTenis7 />} />
            <Route path="/comprar/tenis8" element={<ComprarTenis8 />} />
            <Route path="/comprar/tenis9" element={<ComprarTenis9 />} />
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
