import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from '../auth/LoginPage';
import { ComponetsRouter } from '../componets/page/componentsRouter';

export const AppRoutes = () => {

    return (
        <Routes>
            { /* Login */}
            <Route path='/' element={<LoginPage />} />
            <Route path='/login' element={<LoginPage />} />

            {/* Componentes */}
            <Route path="/*" element={<ComponetsRouter />} />
        </Routes>
    )
}