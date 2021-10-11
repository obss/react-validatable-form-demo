import './Settings.css';

const Settings = (props) => {
    const { openSettingsDialog } = props;
    const versionInfo = `Version: ${process.env.REACT_APP_VERSION}`;

    return (
        <div className={'settings-div'}>
            <span className={'settingsTitle'}>
                <button className="topButton" onClick={() => openSettingsDialog()}>
                    Edit ReactValidatableFormProvider Props
                </button>
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
