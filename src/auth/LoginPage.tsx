import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'

export const LoginPage = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/movies');
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleLogin();
    }

    return (
        <div className='flex text-center justify-center items-center h-screen bg-blue-200'>
            <form onClick={handleSubmit} action="" method='POST'
                className='sombreado flex flex-col gap-5 p-32 border-none bg-blue-400 rounded-xl'>
                <h1 className='text-4xl font-serif font-bold'>Login</h1>
                <div className='flex flex-col gap-5 '>
                    <TextField
                        label="Usuario"
                        variant="standard"
                        type="text"
                    />
                    <TextField
                        label="Contraseña"
                        variant="standard"
                        type="password"
                    />
                    <TextField
                        label="Confirmar contraseña"
                        variant="standard"
                        type="password"
                    />
                    <Button
                        variant="outlined"
                        color='secondary'
                        onClick={handleLogin}
                    >
                        Entrar
                    </Button>
                </div>
            </form>
        </div>
    )
}