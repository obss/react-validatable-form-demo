import ApiInfo from '../ApiInfo';
import CodeAccordion from '../CodeAccordion';
import ExampleUsageWrapper from '../ExampleUsageWrapper';

const providerFormCode = `<ReactValidatableFormProvider
lang={lang}
customRules={customRules}
translations={translations}
hideBeforeSubmit={hideBeforeSubmit}
showAfterBlur={showAfterBlur}
focusToErrorAfterSubmit={focusToErrorAfterSubmit}
elementFocusHandler={elementFocusHandler}
>
    <App />
</ReactValidatableFormProvider>`;

const providerParametersApiInfoList = [
    {
        label: 'lang (string)',
        desc: 'Selected language to show validation errors.',
    },
    {
        label: 'customRules (object)',
        desc: 'Custom rules that are specific to app and that can used at any component wrapped by the provider.',
    },
    {
        label: 'translations (object)',
        desc:
            'Custom translation objects to override default error messages or to add a new language for error messages.',
    },
    {
        label: 'hideBeforeSubmit (boolean)',
        desc: 'Flag to hide validation errors before setFormIsSubmitted function is called.',
    },
    {
        label: 'showAfterBlur (boolean)',
        desc: 'Flag to hide validation errors before setPathIsBlurred function is called for any path.',
    },
    {
        label: 'focusToErrorAfterSubmit (boolean)',
        desc:
            'Flag to automatically focus to first HTML element with validation error after setFormIsSubmitted function is called.',
    },
    {
        label: 'elementFocusHandler (function)',
        desc:
            'Function that accepts the first "elementId" of current validation errors as parameter that is used to customly manage DOM after submit.',
    },
];

const ApiReactValidatableFormProvider = (props) => {
    return (
        <ExampleUsageWrapper header="ReactValidatableFormProvider">
            <CodeAccordion code={providerFormCode} />
            <div className="apiInfoSectionHeader">
                Provider Parameters
                <div>
                    ruleSet (array){' '}
                    <span className="inner-link" onClick={props.openSettingsDialog}>
                        See Example Usages
                    </span>
                </div>
            </div>
            <ApiInfo apiInfoList={providerParametersApiInfoList} />
        </ExampleUsageWrapper>
    );
};

export default ApiReactValidatableFormProvider;
