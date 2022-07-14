import { Route, Routes } from 'react-router-dom'
import Cart from './components/Cart';
import Home from './components/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/Cart' element={<Cart />}></Route>
    </Routes>
  );
}

export default App;
