import { useValidatableForm } from 'react-validatable-form';
import get from 'lodash.get';
import ExampleUsageWrapper from '../ExampleUsageWrapper';
import ValidationResult from '../ValidationResult';
import { options } from '../../constants/Data';
import CurrentRulesInfo from '../CurrentRulesInfo';

const rules = [
    { path: 'textVal1', ruleSet: [{ rule: 'required' }] },
    { path: 'textVal2', ruleSet: [{ rule: 'required' }] },
    { path: 'numVal', ruleSet: [{ rule: 'required' }] },
    { path: 'selectVal', ruleSet: [{ rule: 'required' }] },
];

const ExamplePureUsage = () => {
    const [
        isValid,
        validationError,
        formData,
        { setPathValue, setFormIsSubmitted, setPathIsBlurred },
    ] = useValidatableForm({
        rules,
        hideBeforeSubmit: true,
        showAfterBlur: true,
        focusToErrorAfterSubmit: true,
    });

    const handleFormSubmit = () => {
        const submitResultValid = setFormIsSubmitted();
        if (submitResultValid) {
            alert(JSON.stringify(formData));
        }
    };
    return (
        <ExampleUsageWrapper
            header="Example Usage with Pure React Components"
            codeUrl="components/examples/ExamplePureUsage.js"
        >
            <div>
                <div className={get(validationError, 'textVal1') && 'hasError'}>
                    <label htmlFor="textVal1">Text1: </label>
                    <input
                        type="text"
                        value={get(formData, 'textVal1') || ''}
                        onChange={(e) => setPathValue('textVal1', e.target.value)}
                        onBlur={() => setPathIsBlurred('textVal1')}
                        id="textVal1"
                    />
                    <div className="errorText">{get(validationError, 'textVal1') || ' '}</div>
                </div>
                <div className={get(validationError, 'textVal2') && 'hasError'}>
                    <label htmlFor="textVal2">Text2: </label>
                    <input
                        type="text"
                        value={get(formData, 'textVal2') || ''}
                        onChange={(e) => setPathValue('textVal2', e.target.value)}
                        onBlur={() => setPathIsBlurred('textVal2')}
                        id="textVal2"
                    />
                    <div className="errorText">{get(validationError, 'textVal2') || ' '}</div>
                </div>
                <div className={get(validationError, 'numVal') && 'hasError'}>
                    <label htmlFor="numVal">Num Val: </label>
                    <input
                        type="number"
                        value={get(formData, 'numVal') || ''}
                        onChange={(e) => setPathValue('numVal', e.target.value)}
                        onBlur={() => setPathIsBlurred('numVal')}
                        id="numVal"
                    />
                    <div className="errorText">{get(validationError, 'numVal') || ' '}</div>
                </div>
                <div className={get(validationError, 'selectVal') && 'hasError'}>
                    <label htmlFor="selectVal">Select Val: </label>
                    <select
                        id="selectVal"
                        onBlur={() => setPathIsBlurred('selectVal')}
                        value={get(formData, 'selectVal') || ''}
                        onChange={(e) => setPathValue('selectVal', e.target.value)}
                    >
                        <option key={'empty'} value={''}>
                            {''}
                        </option>
                        {options.map((op) => {
                            return (
                                <option key={op} value={op}>
                                    {op}
                                </option>
                            );
                        })}
                    </select>
                    <div className="errorText">{get(validationError, 'selectVal') || ' '}</div>
                </div>
                <div>
                    <button className="mySubmitButton pureButton" onClick={() => handleFormSubmit()}>
                        Submit Form
                    </button>
                </div>
                <ValidationResult isValid={isValid} />
                <CurrentRulesInfo currentRules={rules} />
            </div>
        </ExampleUsageWrapper>
    );
};

export default ExamplePureUsage;
