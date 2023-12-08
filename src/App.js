import NavBar from './components/nav-bar/nav-bar.component';
import Home from './routes/home/home.component';
import Auth from './routes/auth/authtentication.component.jsx';

import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Home />} />
        <Route path="contact" element={<Home />} />
        <Route path="auth" element={<Auth />} />
      </Route>
    </Routes>
  )
}
export default App;
