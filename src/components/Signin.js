import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

const Signin = () => {
    return (
        <div>
            <TextField
                name='email'
                label='Email Address'
                required
                fullWidth
                autoComplete='email'
                autoFocus
            />
            <TextField
                name='password'
                label='Password'
                type='password'
                required
                fullWidth
                autoComplete='current-password'
            />
            <Checkbox value='remember' color='primary' />
            <Button type='submit'>Sign in</Button>
        </div>
    );
};

export default Signin;
