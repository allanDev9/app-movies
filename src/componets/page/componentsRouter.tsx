import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Peliculas } from '../page/Peliculas';
import { PeliculasJSON } from '../data/PeliculasData';
export const ComponetsRouter: React.FC = () => {
    const [peliculas] = useState(PeliculasJSON);
    const location = useLocation();
    const { username } = location.state as { username: string };

    return (
        <Routes>
            <Route path="/movies" element={<Peliculas peliculas={peliculas} username={username} />} />
        </Routes>
    );
};