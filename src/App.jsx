import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Sale from './components/pages/Sale'
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Container from './components/Layout/Container';
import Shipping from './components/pages/Shipping'

function App() {
  return (
    <Router>
      <Navbar/>
      <Container>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sale" element={<Sale/>}/>
        <Route path="/shipping" element={<Shipping/>}/>
      </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
