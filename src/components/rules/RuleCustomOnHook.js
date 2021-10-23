import { useValidatableForm } from 'react-validatable-form';
import get from 'lodash.get';
import ExampleUsageWrapper from '../ExampleUsageWrapper';
import TextField from '@mui/material/TextField';
import ValidationResult from '../ValidationResult';
import CurrentRulesInfo from '../CurrentRulesInfo';

const initialFormData = {
    val: 'aa',
};

const customRule = (ruleParams) => {
    const { value } = ruleParams;
    if (value && (!value.includes('g') || value.length < 5)) {
        return 'this field should include letter `g` and its length should be greater than 5';
    }
    return null;
};

const rules = [{ path: 'val', ruleSet: ['required', { rule: customRule }] }];

const RuleCustomOnHook = () => {
    const [isValid, validationError, formData, { setPathValue }] = useValidatableForm({
        rules,
        initialFormData,
    });

    return (
        <ExampleUsageWrapper header="customly defined on hook" codeUrl="components/rules/RuleCustomOnHook.js">
            <p className="infoParagraph">Custom rules can be defined as a function and given as a rule definition.</p>
            <div>
                <TextField
                    error={!!get(validationError, 'val')}
                    helperText={get(validationError, 'val') || ' '}
                    label="val"
                    type="text"
                    value={get(formData, 'val') || ''}
                    onChange={(e) => setPathValue('val', e.target.value)}
                />
            </div>
            <ValidationResult isValid={isValid} />
            <CurrentRulesInfo currentRules={rules} />
        </ExampleUsageWrapper>
    );
};

export default RuleCustomOnHook;
