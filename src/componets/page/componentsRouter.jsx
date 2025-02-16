import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Peliculas } from './Peliculas';
import { PeliculasJSON } from '../data/PeliculasData';
export const ComponetsRouter = () => {
    const [peliculas] = useState(PeliculasJSON);
    const location = useLocation();

    const formValues = location.state?.formValues
    const usuario = formValues?.usuario || 'invitado';

    return (
        <Routes>
            <Route path="/movies" element={<Peliculas peliculas={peliculas} usuario={usuario} />} />
        </Routes>
    );
};