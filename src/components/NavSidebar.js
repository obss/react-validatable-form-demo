import { Navigation } from 'react-minimal-side-navigation';
import { useHistory, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { InputAdornment, TextField } from '@mui/material';
import { Search } from '@mui/icons-material';

const allMenuItems = [
    {
        title: 'Getting Started',
        itemId: 'group1',
        subNav: [
            {
                title: 'Installation',
                itemId: '/getting-started/installation',
                keywords: ['npm', 'yarn'],
            },
            {
                title: 'Usage',
                itemId: '/getting-started/usage',
                keywords: ['ReactValidatableFormProvider', 'useValidatableForm'],
            },
        ],
    },
    {
        title: 'Rules',
        itemId: 'group2',
        subNav: [
            {
                title: 'required',
                itemId: '/rules/required',
            },
            {
                title: 'number',
                itemId: '/rules/number',
                keywords: ['onlyIntegers'],
            },
            {
                title: 'length',
                itemId: '/rules/length',
            },
            {
                title: 'listSize',
                itemId: '/rules/list-size',
            },
            {
                title: 'date',
                itemId: '/rules/date',
            },
            {
                title: 'email',
                itemId: '/rules/email',
            },
            {
                title: 'url',
                itemId: '/rules/url',
            },
            {
                title: 'iban',
                itemId: '/rules/iban',
            },
            {
                title: 'equality',
                itemId: '/rules/equality',
            },
            {
                title: 'regex',
                itemId: '/rules/regex',
            },
            {
                title: 'unique',
                itemId: '/rules/unique',
            },
            {
                title: 'custom on hook',
                itemId: '/rules/custom-on-hook',
            },
            {
                title: 'custom on provider',
                itemId: '/rules/custom-on-provider',
            },
        ],
    },
    {
        title: 'Advanced Settings',
        itemId: 'group3',
        subNav: [
            {
                title: 'Validate Lists',
                itemId: '/advanced/validate-lists',
            },
            {
                title: 'Hide Before Submit',
                itemId: '/advanced/hide-before-submit',
                keywords: ['resetForm'],
            },
            {
                title: 'Show After Blur',
                itemId: '/advanced/show-after-blur',
                keywords: ['resetForm'],
            },
            {
                title: 'Focus to Error After Submit',
                itemId: '/advanced/focus-to-error-after-submit',
            },
            {
                title: 'Focus to Error on List After Submit',
                itemId: '/advanced/focus-to-error-on-list-after-submit',
            },
            {
                title: 'Validate List of Objects',
                itemId: '/advanced/validate-list-of-objects',
            },
            {
                title: 'Validate Complex Forms',
                itemId: '/advanced/validate-complex-forms',
            },
        ],
    },
    {
        title: 'Customizations',
        itemId: 'group4',
        subNav: [
            {
                title: 'Custom Message',
                itemId: '/customizations/custom-message',
            },
            {
                title: 'Custom Translations',
                itemId: '/customizations/translations',
            },
            {
                title: 'Conditional Rules',
                itemId: '/customizations/conditional-rules',
                keywords: ['disableIf', 'enableIf'],
            },
            {
                title: 'Apply to Nulls',
                itemId: '/customizations/apply-to-nulls',
            },
            {
                title: 'Element Focus Handler',
                itemId: '/customizations/custom-element-focus-handler',
            },
        ],
    },
    {
        title: 'Example Usages',
        itemId: 'group5',
        subNav: [
            {
                title: 'Pure React Components',
                itemId: '/examples/pure',
            },
            {
                title: 'MUI Components',
                itemId: '/examples/mui',
                keywords: ['materialui', 'material-ui'],
            },
            {
                title: 'PrimeReact Components',
                itemId: '/examples/prime-react',
            },
            {
                title: 'React-Bootstrap Components',
                itemId: '/examples/react-bootstrap',
            },
        ],
    },
    {
        title: 'API',
        itemId: 'group6',
        subNav: [
            {
                title: 'ReactValidatableFormProvider',
                itemId: '/api/react-validatable-form-provider',
                keywords: ['lang', 'customRules', 'translations'],
            },
            {
                title: 'useValidatableForm',
                itemId: '/api/use-validatable-form',
                keywords: [
                    'rules',
                    'initialFormData',
                    'hideBeforeSubmit',
                    'showAfterBlur',
                    'focusToErrorAfterSubmit',
                    'elementFocusHandler',
                    'isValid',
                    'validationError',
                    'setPathValue',
                    'setFormIsSubmitted',
                    'setPathIsBlurred',
                    'setFormData',
                    'setRules',
                    'resetForm',
                    'forceRunAllValidations',
                ],
            },
            {
                title: 'rules',
                itemId: '/api/rules',
                keywords: [
                    'path',
                    'listPath',
                    'ruleSet',
                    'elementId',
                    'listElementId',
                    'dependantPaths',
                    'disableFocusAfterSubmit',
                    'subRules',
                ],
            },
            {
                title: 'Rule',
                itemId: '/api/rule',
                keywords: [
                    'equalTo',
                    'lessThan',
                    'lessThanOrEqualTo',
                    'greaterThan',
                    'greaterThanOrEqualTo',
                    'notEqualTo',
                    'onlyIntegers',
                    'applyToNulls',
                    'disableIf',
                    'enableIf',
                    'customMessage',
                ],
            },
            {
                title: 'path & listPath',
                itemId: '/api/path',
                keywords: ['lodash', 'path', 'listPath'],
            },
        ],
    },
];

export const NavSidebar = ({ menuIsHidden, onMenuItemSelect }) => {
    const history = useHistory();
    const location = useLocation();
    const [searchInput, setSearchInput] = useState('');
    const [firstPathname, setFirstPathname] = useState(null);

    useEffect(() => {
        setSearchInput('');
        if (location.pathname === '/') {
            setFirstPathname('/getting-started/installation');
        } else {
            setFirstPathname(location.pathname);
        }
    }, [location]);

    const onNameClick = () => {
        history.push('/');
        onMenuItemSelect();
    };

    const onItemSelect = ({ itemId }) => {
        if (itemId.includes('/') && location.pathname !== itemId) {
            history.push(itemId);
            onMenuItemSelect();
        }
    };

    let filteredMenuItems = JSON.parse(JSON.stringify(allMenuItems));
    if (searchInput) {
        filteredMenuItems = filteredMenuItems.filter((m) => {
            let result = false;
            let searchInputUpper = searchInput.toUpperCase();
            if (m.subNav && m.subNav.length > 0) {
                let subsList = [];
                for (let i = 0; i < m.subNav.length; i++) {
                    const subEl = m.subNav[i];
                    const keywords = subEl.keywords || [];
                    if (
                        subEl.title.toUpperCase().includes(searchInputUpper) ||
                        subEl.title.replaceAll(/\s/g, '').toUpperCase().includes(searchInputUpper) ||
                        keywords.filter((k) => k.toUpperCase().includes(searchInputUpper)).length > 0
                    ) {
                        subsList.push(subEl);
                        result = true;
                    }
                }
                if (subsList && subsList.length > 0) {
                    m.subNav = subsList;
                }
            }
            return result;
        });
    }

    const navigations = filteredMenuItems.map((fm) => {
        const itemWithSubItems = filteredMenuItems.filter((m) => m.itemId === fm.itemId);
        const isActiveGroupElement = itemWithSubItems[0].subNav.filter((m) => m.itemId === firstPathname).length > 0;
        let activeItemId = firstPathname;
        if (!isActiveGroupElement && searchInput) {
            activeItemId = fm.itemId;
        }
        return (
            <Navigation key={fm.itemId} activeItemId={activeItemId} onSelect={onItemSelect} items={itemWithSubItems} />
        );
    });

    const menuStatus = menuIsHidden ? 'sideMenuHidden' : 'sideMenuOpen';

    return (
        <>
            <div
                className={`${menuStatus} mysidemenu fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 ease-out transform translate-x-0 bg-white border-r-2 lg:translate-x-0 lg:static lg:inset-0 ${'ease-out translate-x-0'}`}
            >
                <div className="flex items-center justify-center text-center py-6 libraryName" onClick={onNameClick}>
                    <span className="mx-2 text-xl font-semibold text-black">react-validatable-form</span>
                </div>

                <div className="flex items-center justify-center text-center">
                    <TextField
                        className="menu-search-input"
                        label="search"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Search />
                                </InputAdornment>
                            ),
                        }}
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                </div>
                {navigations}
            </div>
        </>
    );
};
