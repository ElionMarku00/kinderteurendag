import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

function BackButton({ ...otherprops }) {

    const navigate = useNavigate();

    return (
        <div style={{ alignSelf: 'center' }} {...otherprops} >
            <ArrowBackIcon
                style={{ color: 'black' }}
                sx={{ fontSize: 70 }}

                onClick={() => {
                    navigate(-1);
                }
                }
            />
        </div>

    )
}

export default BackButton