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
            <h2>WELCOME</h2>애국가(愛國歌)는 ‘나라를 사랑하는 노래’라는
            뜻이에요. 우리나라는 애국가에 특별한 이름을 붙이지 않고 국가(國歌)로
            사용하고 있어요. 오늘날 불리고 있는 애국가 노랫말은 우리나라가
            외세의 침략으로 위기에 처해있던 시기(1907년 전후)에 나라 사랑하는
            마음과 우리 민족의 자주의식을 북돋우기 위해 만들어진 것으로
            보여져요. 그 후 여러 선각자의 손을 거쳐 현재와 같은 내용을 담게
            되었는데 이 노랫말에 붙여진 곡조는 스코틀랜드 민요 ‘올드 랭 사인
            (Auld Lang Syne)’ 이었답니다. 당시 해외에서 활동 중이던 작곡가
            안익태(安益泰) 선생은 애국가에 남의 나라 곡을 붙여 부르는 것을
            안타깝게 여겨 1935년에 오늘날의 애국가를 작곡하였다고 해요. 1948년
            대한민국 정부가 수립된 이후 현재의 애국가가 정부의 공식행사에서
            불려지고, 교과서에도 실리면서 전국적으로 불려지기 시작했답니다. 한
            세기 가까운 세월 동안 슬플 때나 기쁠 때나 우리 겨레와 운명을 같이 해
            온 애국가를 부를 때마다 우리 모두 선조들의 나라 사랑 정신을 새롭게
            되새겨보아요.
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
                <DialogTitle>Create</DialogTitle>
                <DialogContent>
                    <DialogContentText>Hello Dialog!!</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant='outlined'>Create</Button>
                    <Button variant='outlined' onClick={() => setOpen(false)}>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </article>
    );
};

export default Article;
