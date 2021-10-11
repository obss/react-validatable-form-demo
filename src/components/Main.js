import { useState } from 'react';
import { ReactValidatableFormProvider } from 'react-validatable-form';
import { Dialog, DialogTitle } from '@mui/material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import './Main.css';
import BodyWrapper from './BodyWrapper';
import Routes from './Routes';
import ExampleUsageWrapper from './ExampleUsageWrapper';

const MyCustomRuleFunction = (ruleParams) => {
    const { value } = ruleParams;

    if (!value) {
        return 'this field include is a required field';
    }

    if (!value.includes('a') && value.length < 5) {
        return `text ${value} should either include letter 'a' or its length should be greater than 4`;
    }

    return null;
};

const customRules = {
    myCustomRule: MyCustomRuleFunction,
};

const defaultSettings = {
    lang: 'en',
    translationsEnabled: false,
    hideBeforeSubmit: false,
    showAfterBlur: false,
    focusToErrorAfterSubmit: false,
    customElementFocusHandlerEnabled: false,
};

const customTranslations = {
    en: {
        required: 'This field is really required',
        'length.greaterThan': 'Believe me, this field should really have greater than ${comparisonValue} characters',
        'length.equalTo': 'You should be careful because this field should have ${comparisonValue} characters',
    },
    de: {
        required: 'Dieses Feld wird benötigt',
    },
};

const defaultLangOptions = ['en', 'tr'];

const Main = () => {
    const [currentSettings, setCurrentSettings] = useState(defaultSettings);
    const [settingsDialogOpen, setSettingsDialogOpen] = useState(false);

    const openSettingsDialog = () => {
        setSettingsDialogOpen(true);
    };

    const handleSettingChange = (key, value) => {
        const newSettings = { ...currentSettings };
        newSettings[key] = value;
        if (key === 'translationsEnabled' && !value) {
            if (currentSettings.lang === 'de') {
                newSettings['lang'] = 'en';
            }
        }
        setCurrentSettings(newSettings);
    };

    let translations = null;
    if (currentSettings.translationsEnabled) {
        translations = customTranslations;
    }

    const currentLangOptions = [...defaultLangOptions];
    if (currentSettings.translationsEnabled) {
        currentLangOptions.push('de');
    }

    let customElementFocusHandler = null;
    if (currentSettings.customElementFocusHandlerEnabled) {
        customElementFocusHandler = (elementId) => {
            const element = document.getElementById(elementId);
            if (!element) {
                console.warn(`useValidatableForm warning. Dom element with id ${elementId} is not found to be focused`);
            } else {
                console.log(`I'm currently focusing Dom element with id ${elementId}`);
                element.focus();
            }
        };
    }

    const dialogContent = (
        <div className={'providerDialogContent'}>
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
            <FormControlLabel
                control={
                    <Checkbox
                        checked={currentSettings.hideBeforeSubmit}
                        onChange={(e) => handleSettingChange('hideBeforeSubmit', e.target.checked)}
                    />
                }
                label="hideBeforeSubmit"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={currentSettings.showAfterBlur}
                        onChange={(e) => handleSettingChange('showAfterBlur', e.target.checked)}
                    />
                }
                label="showAfterBlur"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={currentSettings.focusToErrorAfterSubmit}
                        onChange={(e) => handleSettingChange('focusToErrorAfterSubmit', e.target.checked)}
                    />
                }
                label="focusToErrorAfterSubmit"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={currentSettings.customElementFocusHandlerEnabled}
                        onChange={(e) => handleSettingChange('customElementFocusHandlerEnabled', e.target.checked)}
                    />
                }
                label="custom elementFocusHandler"
            />
        </div>
    );

    return (
        <>
            <Dialog open={settingsDialogOpen} onClose={() => setSettingsDialogOpen(false)}>
                <DialogTitle>
                    <ExampleUsageWrapper
                        header="Edit ReactValidatableFormProvider Props"
                        codeUrl="components/Main.js"
                        wrapperClassName="modalHeaderWrapper"
                    />
                </DialogTitle>
                {dialogContent}
            </Dialog>
            <ReactValidatableFormProvider
                lang={currentSettings.lang}
                customRules={customRules}
                translations={translations}
                hideBeforeSubmit={currentSettings.hideBeforeSubmit}
                showAfterBlur={currentSettings.showAfterBlur}
                focusToErrorAfterSubmit={currentSettings.focusToErrorAfterSubmit}
                elementFocusHandler={customElementFocusHandler}
            >
                <BodyWrapper>
                    <div className="flex h-screen">
                        <Routes openSettingsDialog={openSettingsDialog} />
                    </div>
                </BodyWrapper>
            </ReactValidatableFormProvider>
        </>
    );
};

export default Main;
