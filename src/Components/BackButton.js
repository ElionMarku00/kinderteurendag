import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function BackButton({ arrowStyle, buttonStyle, ...otherprops }) {

    const navigate = useNavigate();

    return (
        <Button style={{ alignSelf: 'center', ...buttonStyle }}

            {...otherprops} >

            <ArrowBackIcon
                style={{ color: 'black', fontSize: '50', ...arrowStyle }}
                // sx={{ fontSize: 70 }}

                onClick={() => { navigate(-1); }
                }
            />
        </Button>

    )
}

export default BackButton