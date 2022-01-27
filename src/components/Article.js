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
                    display: 'flex',

                    flexDirection: 'column',
                    textAlign: 'center',
                    paddingxLeft: '15px',
                    borderRadius: '6px',
                    boxShadow: '5px 5px 5px 5px gray',
                }}
            >
                <div style={{ height: '35px' }}>
                    <h3
                        className='article_header'
                        style={{
                            fontSize: '1.2rem',
                            float: 'left',
                            padding: '0 20px',
                        }}
                    >
                        알림 :)
                    </h3>
                </div>
                <div>
                    <h4
                        className='article_text'
                        style={{
                            float: 'left',
                            padding: '0 20px',
                            color: 'grey',
                        }}
                    >
                        CREATE 버튼을 눌러 간단 자기 소새 글을 한 줄로
                        작성해주세요
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
                <DialogTitle style={{ fontSize: '1.4rem' }}>
                    자기소개
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        간단 자기 소개글을 작성하세요
                    </DialogContentText>
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
