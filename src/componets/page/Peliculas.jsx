import Box from '@mui/material/Box';
import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import './Peliculas.css';
import { useNavigate } from 'react-router-dom';

import { appMoviesApi } from '../../services/appMoviesApi';


export const Peliculas = ({ peliculas, username }) => {
    const navigate = useNavigate();
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

    const handleBack = () => {
        navigate('/login')
    }

    return (
        <>
            <div className='bg-black h-auto pb-5'>
                <h1 className='text-white font-serif text-center text-6xl mb-10 pt-10 font-bold max-sm:text-start max-sm: ml-10 max-sm:mb-[-10px] max-md:text-start max-md:mb-[-10px] max-lg:text-start max-lg:mb-[-10px]'>Películas</h1>
                <div className='flex justify-end mr-10 flex-row'>
                    <h1 className='text-blue-700 mr-10 mt-[-6%] font-bold flex-wrap text-2xl max-sm:mr-[10px] max-md:mr-[10px] max-md:mt-[-40px] max max-lg:mr-[10px] max-xl:mt-[-40px] '><AccountCircleIcon fontSize='large' /> {username}</h1>
                    <Button
                        variant='outlined'
                        color='error'
                        style={{ position: 'relative', right: '10px', top: '-90px' }}
                        onClick={handleBack}
                    >
                        Cerra Sesión
                    </Button>
                </div>
                <div className="flex overflow-x-auto bg-blue-200 m-10 gap-10 rounded-xl justify-start p-4 max-sm:flex-col max-sm:w-[85%] max-md:w-[89%]" style={{ maxHeight: '70vh' }}>
                    {peliculas.map((pelicula) => (
                        <Card className='diseño-peliculas w-[15%] flex-shrink-0 h-[55vh] m-5 max-sm:w-[90%] max-md:w-[50%] max-lg:w-[40%] max-xl:w-[35%]' key={pelicula.id}>
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
            <div className='flex justify-center bg-red-700 pt-10'>
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
