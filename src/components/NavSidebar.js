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
            },
            {
                title: 'Usage',
                itemId: '/getting-started/usage',
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
        itemId: 'group4',
        subNav: [
            {
                title: 'Validate Lists',
                itemId: '/advanced/validate-lists',
            },
            {
                title: 'Hide Before Submit',
                itemId: '/advanced/hide-before-submit',
            },
            {
                title: 'Show After Blur',
                itemId: '/advanced/show-after-blur',
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
        itemId: 'group3',
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
            },
            {
                title: 'useValidatableForm',
                itemId: '/api/use-validatable-form',
            },
            {
                title: 'rules',
                itemId: '/api/rules',
            },
            {
                title: 'Rule',
                itemId: '/api/rule',
            },
            {
                title: 'path & listPath',
                itemId: '/api/path',
            },
        ],
    },
];

export const NavSidebar = ({ menuIsHidden }) => {
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
    };

    const onItemSelect = ({ itemId }) => {
        if (itemId.includes('/') && location.pathname !== itemId) {
            history.push(itemId);
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
                    if (
                        subEl.title.toUpperCase().includes(searchInputUpper) ||
                        subEl.title.replaceAll(/\s/g, '').toUpperCase().includes(searchInputUpper)
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
        let activeItemId = firstPathname;
        if (searchInput) {
            activeItemId = itemWithSubItems[0].itemId;
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
                <div className="flex items-center justify-center text-center py-6">
                    <span className="mx-2 text-xl font-semibold text-black libraryName" onClick={onNameClick}>
                        react-validatable-form
                    </span>
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
