import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Peliculas } from '../page/Peliculas';
import { PeliculasJSON } from '../data/PeliculasData';

export const ComponetsRouter: React.FC = () => {
    const [peliculas] = useState(PeliculasJSON);

    return (
        <Routes>
            <Route path="/movies" element={<Peliculas peliculas={peliculas} />} />
        </Routes>
    );
};