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
            <Grid container>
                <Grid item xs='2'>
                    <Nav />
                </Grid>
                <Grid item xs='10'>
                    <Article />
                </Grid>
            </Grid>
            <Signin />
        </Container>
    );
}

export default App;
