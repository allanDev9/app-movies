import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { ListofMovies } from '../types.d';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

interface Props {
    peliculas: ListofMovies[];
}

export const Peliculas: React.FC<Props> = ({ peliculas }) => {
    return (
        <>
            <h1 className='text-white text-center text-6xl mb-10 pt-10 font-bold'>Películas</h1>

            <div className="flex overflow-x-auto bg-blue-700 m-10 gap-10 justify-start p-4" style={{ maxHeight: '70vh' }}>
                {peliculas.map((pelicula) => (
                    <Card className='w-[15%] flex-shrink-0 h-[55vh] m-5' key={pelicula.id}>
                        <CardContent>
                            <div className='m-[-18px]'>
                                <img
                                    className='w-[100%] h-[30vh] object-cover'
                                    src={pelicula.image}
                                    alt={pelicula.titulo}
                                />
                                <div className='text-center mt-[-8px] h-[17vh] bg-blue-200'>
                                    <p className='text-3xl font-bold mt-2 mb-5'>{pelicula.titulo}</p>
                                    <p className='font-bold text-red-500'>{pelicula.duracion}</p>
                                    <p className='font-bold text-red-500'>Categoria: {pelicula.categoria}</p>
                                </div>
                            </div>
                        </CardContent>
                        <CardActions>
                            <Button className='font-bold'>Ver</Button>
                        </CardActions>
                    </Card>
                ))}
            </div>
            <div className='flex justify-center'>
                <div className="card bg-white w-[60%] text-black mb-10">
                    <DataTable value={peliculas} tableStyle={{ minWidth: '50rem' }}
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
