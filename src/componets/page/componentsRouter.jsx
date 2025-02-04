import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Peliculas } from './Peliculas';
import { PeliculasJSON } from '../data/PeliculasData';
export const ComponetsRouter = () => {
    const [peliculas] = useState(PeliculasJSON);
    const location = useLocation();
    const username = location.state?.username || 'Invitado';

    return (
        <Routes>
            <Route path="/movies" element={<Peliculas peliculas={peliculas} username={username} />} />
        </Routes>
    );
};