import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function ForwardButton({ arrowStyle, currentGame, nextPage, onClickEvent, ...otherprops }) {

    const navigate = useNavigate();
    return (
        <Button
            style={{ alignSelf: 'center' }}
            onClick={onClickEvent || (() => {
                navigate(nextPage, { state: { currentGame: currentGame } });
            })}
            {...otherprops} >

            <ArrowForwardIcon
                style={{ color: 'black', fontSize: '50', ...arrowStyle }}
                sx={{ fontSize: 70 }}
            />
        </Button>

    )
}


export default ForwardButton