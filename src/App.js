import './App.css';

import Header from './components/Header';
import Nav from './components/Nav';
import Article from './components/Article';
import Signin from './components/Signin';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

// mui grid는 기본적으로 한 행을 12등분한다.
// 12등분을 초과하면 다음 행으로 넘어간다.

function App() {
    return (
        <Container fixed>
            <Header />
            <Signin />
            <Grid container sx={{ mt: 4 }}>
                <Grid item xs='3'>
                    <Nav />
                </Grid>
                <Grid item xs='9'>
                    <Article />
                </Grid>
            </Grid>
        </Container>
    );
}

export default App;
