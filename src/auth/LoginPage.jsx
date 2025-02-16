import './LoginPage.css';
import { TextField, Button, Input, Stack } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import { Toast } from 'primereact/toast';
import { appMoviesApi } from '../services/appMoviesApi';

export const LoginPage = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [formValues, setFormValues] = useState({
        usuario: '',
        password: '',
    });

    const toast = useRef(null);

    const createToast = (severity, summary, detail) => {
        toast.current.show({
            severity: severity,
            summary: summary,
            detail: detail,
            life: 6000,
        });
    };

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formValues.usuario || !formValues.password) {
            createToast('error', 'Error', 'Debe ingresar todos los datos');
            return;
        }

        try {
            const response = await appMoviesApi.post('usuarios/login', formValues);

            if (response.status === 200) { // Cambiado de 201 a 200
                navigate('/movies', { state: { formValues } });
                setFormValues({ usuario: '', password: '' });
            }
        } catch (err) {
            createToast('error', 'Error', err.response.data || 'Error en el servidor');
            console.error(err);
        }
    };

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (e) => e.preventDefault();

    return (
        <div className='flex text-center justify-center items-center h-screen bg-blue-400'>
            <Toast ref={toast} />
            <div className='sombreado flex flex-col gap-5 p-32 border-none bg-gray-300 rounded-xl'>
                <h1 className='text-4xl font-serif font-bold'>Login</h1>
                <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                    <Stack sx={{ width: '25ch' }} spacing={2} noValidate autoComplete="off">
                        <TextField
                            label='Usuario'
                            name='usuario'
                            variant="standard"
                            value={formValues.usuario}
                            onChange={handleChange}
                        />
                        <FormControl variant="standard">
                            <InputLabel style={{ fontWeight: 'bold' }} htmlFor="standard-adornment-password">Contraseña</InputLabel>
                            <Input
                                autoComplete='off'
                                name='password'
                                type={showPassword ? 'text' : 'password'}
                                value={formValues.password}
                                onChange={handleChange}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label={showPassword ? 'hide the password' : 'display the password'}
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
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
                        type='submit'
                        style={{ backgroundColor: 'black', marginTop: '20px' }}
                    >
                        Entrar
                    </Button>
                </form>
            </div>
        </div>
    );
};