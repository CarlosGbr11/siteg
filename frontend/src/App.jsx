import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './pages/Footer';
import Header from './pages/Header';
import Inicio from './components/Inicio';
import Vestuario from './components/Vestuario';
import Nike from './components/Nike';
import Adidas from './components/Adidas';
import './App.css'

function App() {

  return (

    <Router>

      <div className='container-app'>
        
          <Header />
        <main>
          <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/Vestuario' element={<Vestuario />} />
            <Route path='/Nike' element={<Nike />} />
            <Route path='/Adidas' element={<Adidas />} />
          </Routes>
        </main>
          <Footer />
      </div>

    </Router>
  )
}

export default App
