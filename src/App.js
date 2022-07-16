import { Route, Routes } from 'react-router-dom'
import Cart from './components/Cart';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Cart />}></Route>
    </Routes>
  );
}

export default App;
