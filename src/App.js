import './App.css';
import{Routes,Route}from 'react-router-dom'
import Home from './components/Home'
import Career from './components/Career'
import CyberSecurity from './components/CyberSecurity'
import DataScience from './components/DataScience'
import Fsd from './components/Fsd'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
    <div >
      <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className='brand'>ROUTER BLOG</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="/Fsd">FULL STACK DEVELOPER</Nav.Link>
            <Nav.Link href="/CyberSecurity">CYBER SECURITY</Nav.Link>
            <Nav.Link href="/DataScience">DATA SCIENCE</Nav.Link>
            <Nav.Link href="/Career">CAREER</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
      <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/Career'element={<Career/>}/>
      <Route path='/CyberSecurity'element={<CyberSecurity/>}/>
      <Route path='/DataScience'element={<DataScience/>}/>
      <Route path='/Fsd'element={<Fsd/>}/>
      </Routes>
      
      </>
    </div>
  );
}

export default App;
