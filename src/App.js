import Home from './components/routes/home/home.component';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Home />} />
    </Routes>
  )
}
export default App;
