import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { StepProvider } from './contexts/StepContext';
import Application from './pages/Application/Application';

function App() {
  return (
    <StepProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout pageSelected='home' />}>
            <Route index element={<Application />} />
          </Route>
        </Routes>
      </Router>
    </StepProvider>
  );
}

export default App;