import Box from '@mui/material/Box';
import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { ListofMovies } from '../types.d';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import './Peliculas.css';

import { appMoviesApi } from '../../services/appMoviesApi';

interface Props {
    peliculas: ListofMovies[];
}

export const Peliculas: React.FC<Props> = ({ peliculas }) => {
    const empleadosJSON = {
        nombre: '',
        edad: '',
        telefono: '',
    }

    const [listEmpleados, setListEmpleados] = useState([]);

    useEffect(() => {
        const fetchEmpleados = async () => {
            try {
                const response = await appMoviesApi.get('empleados');
                setListEmpleados(response.data);
            } catch (error) {
                console.error('Error fetching empleados:', error);
            }
        };

        fetchEmpleados();
    }, []);

    return (
        <>
            <div className='bg-black h-auto pb-5'>
                <h1 className='text-white font-serif text-center text-6xl mb-10 pt-10 font-bold'>Películas</h1>
                <div className="flex overflow-x-auto bg-blue-200 m-10 gap-10 rounded-xl justify-start p-4" style={{ maxHeight: '70vh' }}>
                    {peliculas.map((pelicula) => (
                        <Card className='diseño-peliculas w-[15%] flex-shrink-0 h-[55vh] m-5' key={pelicula.id}>
                            <CardContent>
                                <div className='m-[-18px]'>
                                    <img
                                        className='w-[100%] h-[30vh] object-cover'
                                        src={pelicula.image}
                                        alt={pelicula.titulo}
                                    />
                                    <div className='text-center mt-[-8px] h-[17vh] bg-black '>
                                        <p className='text-xl text-white font-bold mt-2 mb-5'>{pelicula.titulo}</p>
                                        <p className='font-bold text-red-500 text-start ml-5'>Tiempo: {pelicula.duracion}</p>
                                        <p className='font-bold text-red-500 text-start ml-5'>Categoria: {pelicula.categoria}</p>
                                    </div>
                                </div>
                            </CardContent>
                            <CardActions>
                                <Button className='font-bold'>Ver</Button>
                            </CardActions>
                        </Card>
                    ))}
                </div>
            </div>
            <div className='flex justify-center bg-blue-500 pt-10'>
                <div className="card bg-white w-[60%] text-black mb-10">
                    <h1 className='text-center text-4xl font-bold text-red-700 mb-5'>Peliculas disponibles</h1>
                    <DataTable className='text-xl ml-5 mb-5' value={peliculas}
                        showGridlines
                        stripedRows
                        size='small'
                        paginator rows={5} rowsPerPageOptions={[5, 10, 15]}
                    >
                        <Column field="titulo" header="Titulo"></Column>
                        <Column field="categoria" header="Categoria"></Column>
                        <Column field="duracion" header="Duración"></Column>
                    </DataTable >
                </div >
            </div >
        </>
    );
};
