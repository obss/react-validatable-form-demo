import { useState } from 'react';
import { ReactValidatableFormProvider } from 'react-validatable-form';
import './Main.css';
import Settings from './Settings';
import BodyWrapper from './BodyWrapper';
import Routes from './Routes';

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
};

const Main = () => {
    const [currentSettings, setCurrentSettings] = useState(defaultSettings);

    let translations = null;
    if (currentSettings.translationsEnabled) {
        translations = {
            en: {
                required: 'This field is really required',
                'length.greaterThan':
                    'Believe me, this field should really have greater than ${comparisonValue} characters',
                'length.equalTo': 'You should be careful because this field should have ${comparisonValue} characters',
            },
            de: {
                required: 'Dieses Feld wird benötigt',
            },
        };
    }

    return (
        <>
            <Settings
                currentSettings={currentSettings}
                onSettingsChange={(newSettings) => setCurrentSettings(newSettings)}
            />
            <ReactValidatableFormProvider
                lang={currentSettings.lang}
                customRules={customRules}
                translations={translations}
            >
                <BodyWrapper>
                    <div className="flex h-screen">
                        <Routes />
                    </div>
                </BodyWrapper>
            </ReactValidatableFormProvider>
        </>
    );
};

export default Main;
