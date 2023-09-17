import './App.scss';

import Header from './components/Header';
import Info from './components/Info';
import Count from './components/Count';
import { Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';

function App() {
  return (
    <div>
      <div className='header'>
        <Header />
      </div>
      <Container>
        <Routes>
          <Route path='/info' element={<Info />} />
          <Route path='/count' element={<Count />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
