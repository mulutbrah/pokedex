import { Suspense } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Layout from './layouts/main';

import DashboardPage from './pages';
import PokemonDetail from './pages/Detail';

import './App.css';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><DashboardPage /></Layout>} />
          <Route path="/pokemon/:id" element={<Layout><PokemonDetail /></Layout>} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
