import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';

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
            <FormControlLabel
                control={<Checkbox value='remember' color='primary' />}
                label='Remember me'
            />
            <Checkbox value='remember' color='primary' />
            <Button type='submit' fullWidth variant='contained' sx={{ mt: 4 }}>
                Sign in
            </Button>
        </div>
    );
};

export default Signin;
