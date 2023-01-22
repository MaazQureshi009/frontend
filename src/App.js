import './App.css';
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import Home from './home';
import Products from './products';
import Footer from './footer';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={[<Home/>, <Products/>, <Footer/>]}/>
          <Route path='/footer' element={[<Footer/>]}/>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
