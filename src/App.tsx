import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LayoutUser from './components/Layout/Users';
import LayoutAdmin from './components/Layout/Admin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutUser pageSelected='home' />}>
        
        </Route>
        <Route path='/adm' element={<LayoutAdmin pageSelected='jobs' />} />
      </Routes>
    </Router>
  );
}

export default App;