import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import './Settings.css';

const Settings = (props) => {
    const { openSettingsDialog } = props;
    const versionInfo = `Version: ${process.env.REACT_APP_VERSION}`;

    return (
        <div className={'settings-div'}>
            <span className={'settingsTitle'}>
                <Button variant="contained" className="topButton" onClick={() => openSettingsDialog()}>
                    <span className="topButtonLabel">Edit ReactValidatableFormProvider Props</span>
                    <EditIcon />
                </Button>
            </span>

            <span className={'versionInfo'}>
                <a href={'https://www.npmjs.com/package/react-validatable-form'} target="_blank" rel="noreferrer">
                    {versionInfo}
                </a>
            </span>
        </div>
    );
};

export default Settings;
