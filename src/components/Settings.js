import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import './Settings.css';

const defaultLangOptions = ['en', 'tr'];

const Settings = (props) => {
    const { currentSettings, onSettingsChange } = props;

    const handleSettingChange = (key, value) => {
        const newSettings = { ...currentSettings };
        newSettings[key] = value;
        if (key === 'translationsEnabled' && !value) {
            if (currentSettings.lang === 'de') {
                newSettings['lang'] = 'en';
            }
        }
        onSettingsChange(newSettings);
    };

    const versionInfo = `Version: ${process.env.REACT_APP_VERSION}`;

    const currentLangOptions = [...defaultLangOptions];
    if (currentSettings.translationsEnabled) {
        currentLangOptions.push('de');
    }

    return (
        <div className={'settings-div'}>
            <span className={'settingsTitle'}>ReactValidatableFormProvider Params</span>
            <Autocomplete
                value={currentSettings.lang}
                onChange={(event, newValue) => {
                    handleSettingChange('lang', newValue);
                }}
                options={currentLangOptions}
                renderInput={(params) => <TextField {...params} label="lang" />}
                style={{ width: 200 }}
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={currentSettings.translationsEnabled}
                        onChange={(e) => handleSettingChange('translationsEnabled', e.target.checked)}
                    />
                }
                label="custom translations"
            />
            <span className={'versionInfo'}>
                <a href={'https://www.npmjs.com/package/react-validatable-form'} target="_blank" rel="noreferrer">
                    {versionInfo}
                </a>
            </span>
        </div>
    );
};

export default Settings;
