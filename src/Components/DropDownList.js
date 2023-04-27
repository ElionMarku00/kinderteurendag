import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { AppContext } from '../context';
import { useTranslation } from 'react-i18next';

export default function BasicSelect() {

    const { setLanguage } = React.useContext(AppContext);
    const { t, i18n } = useTranslation();

    const handleChange = (event) => {
        setLanguage(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{t("initialPage.languageQstn")}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={i18n.language}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value={'nl'}>Dutch</MenuItem>
                    <MenuItem value={'fr'}>French</MenuItem>
                    {/* <MenuItem value={30}>English</MenuItem> */}
                </Select>
            </FormControl>
        </Box>
    );
}