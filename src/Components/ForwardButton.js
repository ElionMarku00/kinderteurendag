import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function ForwardButton({ arrowStyle, currentGame, nextPage, onClickEvent, ...otherprops }) {

    const navigate = useNavigate();
    return (
        <Button
            style={{ alignSelf: 'center', margin: '0', padding: "0", overflow: "hidden" }}
            onClick={onClickEvent || (() => {
                navigate(nextPage, { state: { currentGame: currentGame } });
            })}
            {...otherprops} >

            <ArrowForwardIcon
                style={{ color: 'black', margin: '0', padding: "0", fontSize: '50', ...arrowStyle }}
            />
        </Button>

    )
}


export default ForwardButton