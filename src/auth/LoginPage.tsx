import { TextField, Button, Input, Stack } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './LoginPage.css'

export const LoginPage = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate('/movies', { state: { username } });;
    }

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <div className='flex text-center justify-center items-center h-screen bg-blue-400'>
            <form onSubmit={handleSubmit} action="" method='POST'
                className='sombreado flex flex-col gap-5 p-32 border-none bg-gray-300 rounded-xl'>
                <h1 className='text-4xl font-serif font-bold'>Login</h1>
                <div className='flex flex-col gap-5 '>
                    <Stack
                        component="form"
                        sx={{ width: '25ch' }}
                        spacing={2}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            label='Usuario'
                            id="standard-basic"
                            variant="standard"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <FormControl variant="standard">
                            <InputLabel style={{ fontWeight: 'bold' }} htmlFor="standard-adornment-password">Contraseña</InputLabel>
                            <Input
                                autoComplete='off'
                                id="standard-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label={
                                                showPassword ? 'hide the password' : 'display the password'
                                            }
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            onMouseUp={handleMouseUpPassword}
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </Stack>
                    <Button
                        variant="contained"
                        style={{ backgroundColor: 'black', marginTop: '20px' }}
                        type='submit'
                    >
                        Entrar
                    </Button>
                </div>
            </form>
        </div>
    )
}