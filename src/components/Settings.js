import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/material/Tooltip';
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

            <Tooltip placement="bottom" title="View on GitHub">
                <span className={'githubIcon'}>
                    <a href={'https://github.com/obss/react-validatable-form'} target="_blank" rel="noreferrer">
                        <img src={process.env.PUBLIC_URL + '/github.png'} alt="github_icon" />
                    </a>
                </span>
            </Tooltip>
            <Tooltip placement="bottom" title="View on npmjs">
                <span className={'npmIcon'}>
                    <a href={'https://www.npmjs.com/package/react-validatable-form'} target="_blank" rel="noreferrer">
                        <img src={process.env.PUBLIC_URL + '/npm.png'} alt="npm_icon" />
                    </a>
                </span>
            </Tooltip>
            <Tooltip placement="bottom" title="Current Version">
                <span className={'versionInfo'}>
                    <a href={'https://www.npmjs.com/package/react-validatable-form'} target="_blank" rel="noreferrer">
                        {versionInfo}
                    </a>
                </span>
            </Tooltip>
        </div>
    );
};

export default Settings;
