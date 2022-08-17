import ApiInfo from '../../components/ApiInfo';
import CodeAccordion from '../../components/CodeAccordion';
import ExampleUsageWrapper from '../../components/ExampleUsageWrapper';
import Link from 'next/link';

const useValidatableFormCode = `const {isValid, validationError, validationErrorOriginalResult, formData, setPathValue, 
    unsetPathValue, setFormIsSubmitted, setPathIsBlurred, unsetPathIsBlurred, setFormData, 
    setRules, setFormDataAndRules, resetForm, getValue, getError, forceRunAllValidations } = 
    useValidatableForm({
        rules,
        initialFormData,
        hideBeforeSubmit,
        showAfterBlur,
        focusToErrorAfterSubmit,
});`;

const hookParametersApiInfoList = [
    {
        label: (
            <div>
                rules (array){' '}
                <Link href="/library-api/rules">
                    <a className={'inner-link'}> See rules API </a>
                </Link>
            </div>
        ),
        desc: 'Array of validation rules to be run on current form.',
    },
    {
        label: 'initialFormData (object)',
        desc: 'Initial form data to set default values of current form.',
    },
    {
        label: (
            <div>
                hideBeforeSubmit (boolean){' '}
                <Link href="/advanced/hide-before-submit">
                    <a className={'inner-link'}> See Example </a>
                </Link>
            </div>
        ),
        desc: 'Flag to hide validation errors before setFormIsSubmitted function is called.',
    },
    {
        label: (
            <div>
                showAfterBlur (boolean){' '}
                <Link href="/advanced/show-after-blur">
                    <a className={'inner-link'}> See Example </a>
                </Link>
            </div>
        ),
        desc: 'Flag to hide validation errors before setPathIsBlurred function is called for any path.',
    },
    {
        label: (
            <div>
                focusToErrorAfterSubmit (boolean){' '}
                <Link href="/advanced/focus-to-error-after-submit">
                    <a className={'inner-link'}> See Example </a>
                </Link>
            </div>
        ),
        desc:
            'Flag to automatically focus to first HTML element with validation error after setFormIsSubmitted function is called.',
    },
    {
        label: (
            <div>
                elementFocusHandler (function){' '}
                <Link href="/customizations/custom-element-focus-handler">
                    <a className={'inner-link'}> See Example </a>
                </Link>
            </div>
        ),
        desc:
            'Function that accepts the first "elementId" of current validation errors as parameter that is used to customly manage DOM after submit.',
    },
];

const returnValuesApiInfoList = [
    {
        label: 'isValid (boolean)',
        desc: "Always returns the form's combined validation result according to current formData and rules.",
    },
    {
        label: (
            <div>
                validationError (object){' '}
                <Link href="/examples/validation-error">
                    <a className={'inner-link'}> See Example </a>
                </Link>
            </div>
        ),
        desc:
            'Returns the validation result info of each rule with each path according to current formData and rules. Some validation results can be hide before submit or before blur.',
    },
    {
        label: (
            <div>
                validationErrorOriginalResult (object){' '}
                <Link href="/examples/validation-error-original-result">
                    <a className={'inner-link'}> See Example </a>
                </Link>
            </div>
        ),
        desc:
            'Returns the validation result info of each rule with each path according to current formData and rules. (is not hidden before submit or before blur).',
    },
    {
        label: (
            <div>
                formData (object){' '}
                <Link href="/examples/form-data">
                    <a className={'inner-link'}> See Example </a>
                </Link>
            </div>
        ),
        desc: 'Returns current formData.',
    },
    {
        label: (
            <div>
                formIsSubmitted (boolean){' '}
                <Link href="/advanced/hide-before-submit">
                    <a className={'inner-link'}> See Example </a>
                </Link>
            </div>
        ),
        desc: 'Returns current formIsSubmitted info.',
    },
    {
        label: (
            <div>
                blurredPathList (array){' '}
                <Link href="/advanced/show-after-blur">
                    <a className={'inner-link'}> See Example </a>
                </Link>
            </div>
        ),
        desc: 'Returns current blurredPathList info.',
    },
    {
        label: (
            <div>
                setPathValue(path, value){' '}
                <Link href="/library-api/path">
                    <a className={'inner-link'}> See Path API </a>
                </Link>
                {' - '}
                <Link href="/examples/set-path-value">
                    <a className={'inner-link'}> See Example </a>
                </Link>
            </div>
        ),
        desc: 'Function to update given path of formData with given value.',
    },
    {
        label: (
            <div>
                unsetPathValue(path, value){' '}
                <Link href="/library-api/path">
                    <a className={'inner-link'}> See Path API </a>
                </Link>
                {' - '}
                <Link href="/examples/unset-path-value">
                    <a className={'inner-link'}> See Example </a>
                </Link>
            </div>
        ),
        desc: 'Function to remove value and key for given path of formData.',
    },
    {
        label: (
            <div>
                setFormIsSubmitted(){' '}
                <Link href="/advanced/hide-before-submit">
                    <a className={'inner-link'}> See Example </a>
                </Link>
            </div>
        ),
        desc:
            'Function to set form is submitted info true and show all current validation results if hideBeforeSubmit parameter is set true.',
    },
    {
        label: (
            <div>
                setPathIsBlurred(path){' '}
                <Link href="/library-api/path">
                    <a className={'inner-link'}> See Path API </a>
                </Link>
            </div>
        ),
        desc:
            'Function to set element of path is blurred info true and unhide its current validation result if showAfterBlur parameter is set true.',
    },
    {
        label: (
            <div>
                unsetPathIsBlurred(path){' '}
                <Link href="/library-api/path">
                    <a className={'inner-link'}> See Path API </a>
                </Link>
                {' - '}
                <Link href="/examples/unset-path-is-blurred">
                    <a className={'inner-link'}> See Example </a>
                </Link>
            </div>
        ),
        desc:
            'Function to unset element of path is blurred info and hide its current validation result if showAfterBlur parameter is set true.',
    },
    {
        label: (
            <div>
                setFormData(newFormData, pathToBeRun){' '}
                <Link href="/examples/set-form-data">
                    <a className={'inner-link'}> See Example </a>
                </Link>
            </div>
        ),
        desc: 'Function to update whole formData and run validation rules of given pathToBeRun array.',
    },
    {
        label: (
            <div>
                setRules(newRules){' '}
                <Link href="/examples/set-rules">
                    <a className={'inner-link'}> See Example </a>
                </Link>
            </div>
        ),
        desc: 'Function to update rules and run all validations according to these rules.',
    },
    {
        label: (
            <div>
                setFormDataAndRules(newFormData, newRules){' '}
                <Link href="/examples/set-form-data-and-rules">
                    <a className={'inner-link'}> See Example </a>
                </Link>
            </div>
        ),
        desc:
            'Function to update whole formData and rules simultaneously and run all validations according to these formData and rules.',
    },
    {
        label: (
            <div>
                resetForm(){' '}
                <Link href="/advanced/show-after-blur">
                    <a className={'inner-link'}> See Example </a>
                </Link>
            </div>
        ),
        desc: 'Function to reset form submitted info and elements blurred info.',
    },
    {
        label: (
            <div>
                isPathValid(path){' '}
                <Link href="/examples/is-path-valid">
                    <a className={'inner-link'}> See Example </a>
                </Link>
            </div>
        ),
        desc: 'Function to get if path can be interpreted as valid.',
    },
    {
        label: 'getValue(path)',
        desc: 'Function to get value of given path on formData object.',
    },
    {
        label: 'getError(path)',
        desc: 'Function to get validation error of given path on validationError object.',
    },
    {
        label: 'forceRunAllValidations()',
        desc: 'Function to run all validations according to current rules.',
    },
];

const UseValidatableForm = () => {
    return (
        <ExampleUsageWrapper header="useValidatableForm">
            <CodeAccordion code={useValidatableFormCode} />
            <div className="apiInfoSectionHeader">Hook Parameters</div>
            <ApiInfo apiInfoList={hookParametersApiInfoList} />
            <div className="apiInfoSectionHeader">Return Values</div>
            <ApiInfo apiInfoList={returnValuesApiInfoList} />
        </ExampleUsageWrapper>
    );
};

export default UseValidatableForm;
