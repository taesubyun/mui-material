import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Signin = () => {
    return (
        <Container component='main' maxWidth='sm'>
            {/* xs, sm, md, lg, xl */}
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                {/* display:flex , flex-column: column */}
                <Avatar sx={{ m: 2, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>

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
                    margin='normal'
                />
                <FormControlLabel
                    control={<Checkbox value='remember' color='primary' />}
                    label='Remember me'
                />

                <Button
                    type='submit'
                    fullWidth
                    variant='contained'
                    sx={{ mt: 4, mb: 2 }}
                >
                    Sign in
                </Button>
                <Grid container>
                    <Grid item xs>
                        <Link>??????????????? ???????????????????</Link>
                    </Grid>
                    <Grid item>
                        <Link>????????? ???????????????</Link>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Signin;
