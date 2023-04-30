import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';

function ForwardButton({ currentGame, nextPage, ...otherprops }) {

    const navigate = useNavigate();

    return (
        <div style={{ alignSelf: 'center' }} {...otherprops} >
            <ArrowForwardIcon
                style={{ color: 'black' }}
                sx={{ fontSize: 70 }}

                onClick={() => {
                    // navigate(`/gamep2`, { state: { currentGame: currentGame } });
                    navigate(nextPage, { state: { currentGame: currentGame } });
                }
                }
            />
        </div>

    )
}


export default ForwardButton