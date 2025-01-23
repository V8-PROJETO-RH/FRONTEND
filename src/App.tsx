import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LayoutUser from './components/Layout/Users';
import LayoutAdmin from './components/Layout/Admin';
import Home from './pages/Home';
import ManageJobs from './pages/ManageJobs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutUser pageSelected='home' />}>
          <Route index element={<Home />} />

        </Route>

        <Route path='/adm/jobs' element={<LayoutAdmin pageSelected='jobs' />} >
          <Route index element={<ManageJobs />} />
        </Route>

        <Route path='/adm/candidates' element={<LayoutAdmin pageSelected='candidates' />} >

        </Route>

        <Route path='/adm/dashboard' element={<LayoutAdmin pageSelected='dashboard' />} >

        </Route>
      </Routes>
    </Router>
  );
}

export default App;