import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Signin = () => {
    return (
        <div>
            <LockOutlinedIcon />
            <Typography component='h1' variant='h5' sx={{ mb: 2 }}>
                Sign in
            </Typography>
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

            <Button type='submit' fullWidth variant='contained' sx={{ mt: 4 }}>
                Sign in
            </Button>
            <Grid container>
                <Grid item xs>
                    <Link>비밀번호를 잊으셨습니까?</Link>
                </Grid>
                <Grid item>
                    <Link>무료로 가입하세요</Link>
                </Grid>
            </Grid>
        </div>
    );
};

export default Signin;
