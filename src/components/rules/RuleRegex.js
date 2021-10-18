import { useValidatableForm } from 'react-validatable-form';
import get from 'lodash.get';
import ExampleUsageWrapper from '../ExampleUsageWrapper';
import TextField from '@mui/material/TextField';
import ValidationResult from '../ValidationResult';
import CurrentRulesInfo from '../CurrentRulesInfo';

const initialFormData = {
    val: 'ab',
    val2: 'a1',
};

const rules = [
    { path: 'val', ruleSet: [{ rule: 'required' }, { rule: 'regex', regex: /ab+c/ }] },
    { path: 'val2', ruleSet: [{ rule: 'required' }, { rule: 'regex', regex: /\D\d\D/ }] },
];

const RuleRegex = () => {
    const [isValid, validationError, formData, { setPathValue }] = useValidatableForm({
        rules,
        initialFormData,
    });

    return (
        <ExampleUsageWrapper header="regex" codeUrl="components/rules/RuleRegex.js">
            <div>
                <TextField
                    error={!!get(validationError, 'val')}
                    helperText={get(validationError, 'val') || ' '}
                    label="val"
                    type="text"
                    value={get(formData, 'val') || ''}
                    onChange={(e) => setPathValue('val', e.target.value)}
                />
                <span className="regexInfo">regex: /ab+c/</span>
            </div>
            <div>
                <TextField
                    error={!!get(validationError, 'val2')}
                    helperText={get(validationError, 'val2') || ' '}
                    label="val2"
                    type="text"
                    value={get(formData, 'val2') || ''}
                    onChange={(e) => setPathValue('val2', e.target.value)}
                />
                <span className="regexInfo">regex: /\D\d\D/</span>
            </div>
            <ValidationResult isValid={isValid} />
            <CurrentRulesInfo currentRules={rules} />
        </ExampleUsageWrapper>
    );
};

export default RuleRegex;
