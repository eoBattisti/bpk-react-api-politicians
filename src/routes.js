import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/index';
import DetailedDeputado from './pages/DetailedDeputado/index';

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/deputado/:id" element={<DetailedDeputado />} />
        </Routes>
    );
} 