import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Sale from './components/pages/Sale'
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Container from './components/Layout/Container';

function App() {
  return (
    <Router>
      <Navbar/>
      <Container>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sale" element={<Sale/>}/>
      </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
