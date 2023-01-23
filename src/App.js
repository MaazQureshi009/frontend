import './App.css';
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import Home from './home';
import Products from './products';
import Footer from './footer';
import Floaticons from './icons';
function App() {
  return (
    <div className='page-container'>
      <Router>
        <Routes>
          <Route path='/' element={[<Home/>, <Products/>]}/>
          <Route path='/icons' element={<Floaticons/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
