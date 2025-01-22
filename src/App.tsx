import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Application from './pages/Application';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout pageSelected='home' />}>
        <Route index element={<Application />} />
        
        </Route>
      </Routes>
    </Router>
  );
}

export default App;