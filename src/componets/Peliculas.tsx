import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { ListofMovies } from './types.d';

interface Props {
    peliculas: ListofMovies[];
}

export const Peliculas: React.FC<Props> = ({ peliculas }) => {
    return (
        <>
            <h1 className='text-white text-center text-6xl mb-10 pt-10 font-bold'>Películas</h1>
            <div className="flex flex-row gap-10 justify-center flex-wrap">
                {peliculas.map((pelicula) => (
                    <Card className='w-[20%] h-[55vh]' key={pelicula.id}>
                        <CardContent>
                            <div className='m-[-18px]'>
                                <img
                                    className='w-[100%] h-[30vh]'
                                    src={pelicula.image}
                                    alt={pelicula.titulo}
                                />
                                <div className='text-center mt-[-8] h-[17vh] bg-blue-200'>
                                    <p className='text-3xl font-bold mt-[-15] mb-5'>{pelicula.titulo}</p>
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
        </>
    );
};
