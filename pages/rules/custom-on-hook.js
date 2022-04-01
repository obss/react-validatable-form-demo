import { useValidatableForm } from 'react-validatable-form';
import ExampleUsageWrapper from '../../components/ExampleUsageWrapper';
import TextField from '@mui/material/TextField';
import ValidationResult from '../../components/ValidationResult';
import CurrentRulesInfo from '../../components/CurrentRulesInfo';

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

const CustomOnHook = () => {
    const { isValid, setPathValue, getValue, getError } = useValidatableForm({
        rules,
        initialFormData,
    });

    return (
        <ExampleUsageWrapper header="customly defined on hook" codeUrl="components/rules/custom-on-hook.js">
            <p className="infoParagraph">Custom rules can be defined as a function and given as a rule definition.</p>
            <div>
                <TextField
                    error={!!getError('val')}
                    helperText={getError('val') || ' '}
                    label="val"
                    type="text"
                    value={getValue('val') || ''}
                    onChange={(e) => setPathValue('val', e.target.value)}
                />
            </div>
            <ValidationResult isValid={isValid} />
            <CurrentRulesInfo currentRules={rules} />
        </ExampleUsageWrapper>
    );
};

export default CustomOnHook;
