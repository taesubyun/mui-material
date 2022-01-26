import { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Article = () => {
    const [open, setOpen] = useState(false);

    return (
        <article>
            <div
                className='article_box'
                style={{
                    backgroundColor: 'black',
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center',
                    paddingxLeft: '15px',

                    borderRadius: '20px',
                }}
            >
                <div>
                    <h2
                        className='article_header'
                        style={{
                            color: 'lightgreen',
                        }}
                    >
                        알림 :)
                    </h2>
                </div>
                <div>
                    <h4 className='article_text' style={{ color: 'white' }}>
                        동해물과 백두산이 마르고 닳도록 하느님이 보우하사
                        우리나라 만세
                        <br />
                        무궁화 삼천리 화려강산 대한사람 대한으로 길이 보존하세
                    </h4>
                </div>
            </div>
            <br />
            <ButtonGroup>
                <Button
                    variant='outlined'
                    onClick={() => {
                        setOpen(true);
                    }}
                >
                    Create
                </Button>
                <Button variant='outlined'>Update</Button>
            </ButtonGroup>
            <Button variant='outlined'>Delete</Button>
            <Dialog open={open}>
                <DialogTitle style={{ fontSize: '1.8rem' }}>
                    다이어로그 폼
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>다이어로그 폼 테스트</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        variant='outlined'
                        onClick={() => setOpen(false)}
                        style={{
                            backgroundColor: '#9AD0EC',
                            color: 'white',
                        }}
                    >
                        Complete
                    </Button>
                    <Button
                        variant='outlined'
                        onClick={() => setOpen(false)}
                        style={{ backgroundColor: '#EB6383', color: 'white' }}
                    >
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </article>
    );
};

export default Article;
