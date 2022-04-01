import '../styles/globals.css'
import './../styles/Settings.css'
import './../styles/Appbar.css'
import './../styles/ApiInfo.css'
import './../styles/CodeAccordion.css'
import './../styles/Main.css'
import './../styles/CurrentRulesInfo.css'
import './../styles/ExampleUsageWrapper.css'
import './../styles/FormSubmitResult.css'
import './../styles/Homepage.css'
import './../styles/ValidationResult.css'
import './../styles/ExampleUsageWrapper.css'
import './../styles/Home.css'
import './../styles/Installation.css'
import './../styles/Usage.css'
import './../styles/MyBootstrap.css'
import './../styles/CustomElementFocusHandler.css'
import 'primereact/resources/primereact.min.css'
import 'primereact/resources/themes/saga-blue/theme.css'
import '../styles/antd.css';

import Image from 'next/image'
import Link from 'next/link'
import {
    AppBar,
    Autocomplete,
    Box,
    Checkbox, Dialog, DialogTitle,
    FormControlLabel,
    IconButton,
    TextField,
    Toolbar,
    useMediaQuery
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Settings from "../components/Settings";
import {useEffect, useState} from "react";
import MainDrawer from "../components/MainDrawer";
import ExampleUsageWrapper from "../components/ExampleUsageWrapper";
import {NavSidebar} from "../components/NavSidebar";
import {ReactValidatableFormProvider} from "react-validatable-form";
import {LocalizationProvider} from "@mui/lab";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import {prefix} from "../utils/prefix";

const MyCustomRuleFunction = (ruleParams) => {
    const {value} = ruleParams;

    if (!value) {
        return 'this field is a required field';
    }

    if (!value.includes('a') && value.length < 5) {
        return `text ${value} should either include letter 'a' or its length should be greater than 4`;
    }

    return null;
};

const MyCustomRule2Function = (ruleParams) => {
    const {value} = ruleParams;

    if (!value) {
        return {};
    }

    if (!value.includes('a') && value.length < 5) {
        return {value: value};
    }

    return null;
};

const MyCustomRule3Function = (ruleParams) => {
    const {value} = ruleParams;

    if (!value) {
        return <span>this field is a required field</span>;
    }

    if (!value.includes('a') && value.length < 10) {
        return (
            <span>
                text <b> {value} </b> should either include letter <i> a </i> or its length should be greater than 9
            </span>
        );
    }

    return null;
};

const customRules = {
    myCustomRule: MyCustomRuleFunction,
    myCustomRule2: MyCustomRule2Function,
    myCustomRule3: MyCustomRule3Function,
};

const defaultSettings = {
    lang: 'en',
    translationsEnabled: false,
    customDateFormatterFunctionEnabled: false,
    customDateWithTimeFormatterFunctionEnabled: false,
    hideBeforeSubmit: false,
    showAfterBlur: false,
    focusToErrorAfterSubmit: false,
    customElementFocusHandlerEnabled: false,
};

const defaultTranslations = {
    en: {
        myCustomRule2:
            "This is myCustomRule2. This field should have letter 'a' or its length should be greater than 4",
    },
    tr: {
        myCustomRule2: "Bu kural myCustomRule2. Bu alan 'a' harfi içermeli veya uzunluğu 4'den büyük olmalı",
    },
};

const customTranslations = {
    en: {
        required: 'This field is really required',
        'length.greaterThan': 'Believe me, this field should really have greater than ${comparisonValue} characters',
        'length.equalTo': 'You should be careful because this field should have ${comparisonValue} characters',
        myCustomRule2: "Believe me, this field should have letter 'a' or its length should be greater than 4",
        email: (
            <span>
                Do you think this is an <b> email </b>?
            </span>
        ),
    },
    de: {
        required: 'Dieses Feld wird benötigt',
        myCustomRule2: 'Dieses Feld sollte den Buchstaben „a“ haben oder länger als 4 sein',
    },
};

const customDateFormatterFunction = (dateParam) => {
    const strArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const d = dateParam.getDate();
    const m = strArray[dateParam.getMonth()];
    const y = dateParam.getFullYear();
    return '' + (d <= 9 ? '0' + d : d) + '-' + m + '-' + y;
};

const customDateWithTimeFormatterFunction = (dateParam) => {
    const strArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const d = dateParam.getDate();
    const m = strArray[dateParam.getMonth()];
    const y = dateParam.getFullYear();
    const h = dateParam.getHours();
    const mi = dateParam.getMinutes();
    return '' + (d <= 9 ? '0' + d : d) + '-' + m + '-' + y + ' ' + h + ':' + mi;
};

const defaultLangOptions = ['en', 'tr'];

function MyApp({Component, pageProps}) {

    const isMobile = useMediaQuery('(max-width:1024px)');
    const [currentSettings, setCurrentSettings] = useState(defaultSettings);
    const [settingsDialogOpen, setSettingsDialogOpen] = useState(false);
    const [menuIsHidden, setMenuIsHidden] = useState(false);
    const [anchor, setAnchor] = useState(false);

    useEffect(() => {
        setMenuIsHidden(isMobile);
    }, [isMobile]);

    const handleOutsideClick = () => {
        if (isMobile) {
            setMenuIsHidden(true);
        }
    };

    const openSettingsDialog = () => {
        setSettingsDialogOpen(true);
    };

    const handleSettingChange = (key, value) => {
        const newSettings = {...currentSettings};
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
    } else {
        translations = defaultTranslations;
    }

    let dateFormatterFunction = null;
    if (currentSettings.customDateFormatterFunctionEnabled) {
        dateFormatterFunction = customDateFormatterFunction;
    }

    let dateWithTimeFormatterFunction = null;
    if (currentSettings.customDateWithTimeFormatterFunctionEnabled) {
        dateWithTimeFormatterFunction = customDateWithTimeFormatterFunction;
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
                    console.log(newValue);
                }}
                options={currentLangOptions}
                renderInput={(params) => <TextField {...params} label="lang"/>}
                style={{width: 200}}
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
                        checked={currentSettings.customDateFormatterFunctionEnabled}
                        onChange={(e) => handleSettingChange('customDateFormatterFunctionEnabled', e.target.checked)}
                    />
                }
                label="custom dateFormatterFunction"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={currentSettings.customDateWithTimeFormatterFunctionEnabled}
                        onChange={(e) =>
                            handleSettingChange('customDateWithTimeFormatterFunctionEnabled', e.target.checked)
                        }
                    />
                }
                label="custom dateWithTimeFormatterFunction"
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

    const toggleDrawer = (open) => {
        setAnchor(open);
    };

    const handleMenuButton = () => {
        if (isMobile) {
            toggleDrawer(!anchor);
        } else {
            setMenuIsHidden(!menuIsHidden);
        }
    };

    return <div>
        <div className={'obssTriangle'}>
            <a className={'triangleIcon'} href={'https://obss.com.tr/'} target={'_blank'} rel="noreferrer">
                <img src={`${prefix}/obss.png`} width={'50px'} height={'50px'} alt={'obss'}/>
            </a>
        </div>
        <Box flexGrow={1}>
            <AppBar color={"transparent"} position={"relative"}>
                <Toolbar>
                    <IconButton onClick={handleMenuButton} className="menuButton">
                        <MenuIcon/>
                    </IconButton>
                        <Link href={'/'}>
                            <a>
                                <img src={`${prefix}/logo.png`} alt={'logo'} width={"48px"} height={"48px"} />
                            </a>
                        </Link>
                    <Link href={'/'}>
                        <a className={"bannerText"}>
                            <div className={"bannerLink"}>
                                react-validatable-form
                            </div>
                        </a>
                    </Link>
                    <Box flexGrow={1}/>
                    <Settings openSettingsDialog={openSettingsDialog}/>
                </Toolbar>
            </AppBar>
        </Box>
        <MainDrawer anchor={anchor} open={anchor} toggleDrawer={toggleDrawer}/>
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
        <div style={{display: "flex"}}>
            <div className={"navbarDiv"}>
                <NavSidebar toggleDrawer={toggleDrawer} menuIsHidden={menuIsHidden}/>
            </div>
            <div className={"generalDiv"}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <ReactValidatableFormProvider
                        lang={currentSettings.lang}
                        customRules={customRules}
                        translations={translations}
                        dateFormatterFunction={dateFormatterFunction}
                        dateWithTimeFormatterFunction={dateWithTimeFormatterFunction}
                        hideBeforeSubmit={currentSettings.hideBeforeSubmit}
                        showAfterBlur={currentSettings.showAfterBlur}
                        focusToErrorAfterSubmit={currentSettings.focusToErrorAfterSubmit}
                        elementFocusHandler={customElementFocusHandler}
                    >
                        <Component {...pageProps} />
                    </ReactValidatableFormProvider>
                </LocalizationProvider>
            </div>
        </div>
    </div>
}

export default MyApp
