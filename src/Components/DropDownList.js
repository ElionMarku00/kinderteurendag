import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { AppContext } from '../context';
import { useTranslation } from 'react-i18next';

export default function BasicSelect() {

    // const { setLanguage } = React.useContext(AppContext);
    const { t, i18n } = useTranslation();

    return (
        <Box style={{ width: '70vw' }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{t("initialPage.languageQstn")}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    defaultValue="<MenuItem value={'nl'} >NL</MenuItem>"
                    value={localStorage.getItem('language') || 'nl'}
                    label="Age"
                    onChange={
                        (e) => {
                            localStorage.setItem('language', e.target.value)
                            i18n.changeLanguage(e.target.value)
                        }
                    }
                >
                    <MenuItem value='nl' >NL</MenuItem>
                    <MenuItem value='fr'>FR</MenuItem>
                    {/* <MenuItem value={30}>English</MenuItem> */}
                </Select>
            </FormControl>
        </Box>
    );
}