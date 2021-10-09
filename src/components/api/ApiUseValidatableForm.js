import ApiInfo from '../ApiInfo';
import CodeAccordion from '../CodeAccordion';
import ExampleUsageWrapper from '../ExampleUsageWrapper';

const useValidatableFormCode = `const [isValid, validationError, formData, { setPathValue, setFormIsSubmitted, setPathIsBlurred, setFormData, setRules, forceRunAllValidations }] = 
    useValidatableForm({
        rules,
        initialFormData,
        hideBeforeSubmit,
        showAfterBlur,
        focusToErrorAfterSubmit,
});`;

const hookParametersApiInfoList = [
    {
        label: 'rules (array)',
        desc: 'Array of validation rules to be run on current form.',
    },
    {
        label: 'initialFormData (object)',
        desc: 'Initial form data to set default values of current form.',
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
];

const returnValuesApiInfoList = [
    {
        label: 'isValid (boolean)',
        desc:
            "First parameter of the return array of the hook. Always returns the form's combined validation result according to current formData and rules.",
    },
    {
        label: 'validationError (object)',
        desc:
            'Second parameter of the return array of the hook. Returns the validation result info of each rule with each path according to current formData and rules. Some validation results can be hide before submit or before blur.',
    },
    {
        label: 'formData (object)',
        desc: 'Third parameter of the return array of the hook. Returns current formData.',
    },
    {
        label: 'restFunctions (object)',
        desc:
            'Fourth and last parameter of the return array of the hook. Returns the following functions to update validatable form at run time.',
    },
    {
        label: 'setPathValue(path, value)',
        desc: 'Function to update given path of formData with given value.',
        indent: 1,
    },
    {
        label: 'setFormIsSubmitted()',
        desc:
            'Function to set form is submitted info true and show all current validation results if hideBeforeSubmit parameter is set true.',
        indent: 1,
    },
    {
        label: 'setPathIsBlurred(path)',
        desc:
            'Function to set element of path is blurred info true and unhide its current validation result if showAfterBlur parameter is set true.',
        indent: 1,
    },
    {
        label: 'setFormData(newFormData, pathToBeRun)',
        desc: 'Function to update whole formData and run validation rules of given pathToBeRun array.',
        indent: 1,
    },
    {
        label: 'setRules(newRules)',
        desc: 'Function to update rules and run all validations according to these rules.',
        indent: 1,
    },
    {
        label: 'forceRunAllValidations()',
        desc: 'Function to run all validations according to current rules.',
        indent: 1,
    },
];

const ApiUseValidatableForm = () => {
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

export default ApiUseValidatableForm;
