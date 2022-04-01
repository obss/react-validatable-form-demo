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
                <Link className="inner-link" href="/library-api/rules">
                    See rules API
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
                <Link className="inner-link" href="/advanced/hide-before-submit">
                    See Example
                </Link>
            </div>
        ),
        desc: 'Flag to hide validation errors before setFormIsSubmitted function is called.',
    },
    {
        label: (
            <div>
                showAfterBlur (boolean){' '}
                <Link className="inner-link" href="/advanced/show-after-blur">
                    See Example
                </Link>
            </div>
        ),
        desc: 'Flag to hide validation errors before setPathIsBlurred function is called for any path.',
    },
    {
        label: (
            <div>
                focusToErrorAfterSubmit (boolean){' '}
                <Link className="inner-link" href="/advanced/focus-to-error-after-submit">
                    See Example
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
                <Link className="inner-link" href="/customizations/custom-element-focus-handler">
                    See Example
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
                <Link className="inner-link" href="/examples/validation-error">
                    See Example
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
                <Link className="inner-link" href="/examples/validation-error-original-result">
                    See Example
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
                <Link className="inner-link" href="/examples/form-data">
                    See Example
                </Link>
            </div>
        ),
        desc: 'Returns current formData.',
    },
    {
        label: (
            <div>
                setPathValue(path, value){' '}
                <Link className="inner-link" href="/library-api/path">
                    See Path API
                </Link>
                {' - '}
                <Link className="inner-link" href="/examples/set-path-value">
                    See Example
                </Link>
            </div>
        ),
        desc: 'Function to update given path of formData with given value.',
    },
    {
        label: (
            <div>
                unsetPathValue(path, value){' '}
                <Link className="inner-link" href="/library-api/path">
                    See Path API
                </Link>
                {' - '}
                <Link className="inner-link" href="/examples/unset-path-value">
                    See Example
                </Link>
            </div>
        ),
        desc: 'Function to remove value and key for given path of formData.',
    },
    {
        label: (
            <div>
                setFormIsSubmitted(){' '}
                <Link className="inner-link" href="/advanced/hide-before-submit">
                    See Example
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
                <Link className="inner-link" href="/library-api/path">
                    See Path API
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
                <Link className="inner-link" href="/library-api/path">
                    See Path API
                </Link>
                {' - '}
                <Link className="inner-link" href="/examples/unset-path-is-blurred">
                    See Example
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
                <Link className="inner-link" href="/examples/set-form-data">
                    See Example
                </Link>
            </div>
        ),
        desc: 'Function to update whole formData and run validation rules of given pathToBeRun array.',
    },
    {
        label: (
            <div>
                setRules(newRules){' '}
                <Link className="inner-link" href="/examples/set-rules">
                    See Example
                </Link>
            </div>
        ),
        desc: 'Function to update rules and run all validations according to these rules.',
    },
    {
        label: (
            <div>
                setFormDataAndRules(newFormData, newRules){' '}
                <Link className="inner-link" href="/examples/set-form-data-and-rules">
                    See Example
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
                <Link className="inner-link" href="/advanced/show-after-blur">
                    See Example
                </Link>
            </div>
        ),
        desc: 'Function to reset form submitted info and elements blurred info.',
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
