import { Suspense } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import DashboardPage from './pages';
import PokemonDetail from './pages/Detail';

import './App.css';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/pokemon/:id" element={<PokemonDetail />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
