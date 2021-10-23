import { useValidatableForm } from 'react-validatable-form';
import get from 'lodash.get';
import ExampleUsageWrapper from '../ExampleUsageWrapper';
import TextField from '@mui/material/TextField';
import ValidationResult from '../ValidationResult';
import CurrentRulesInfo from '../CurrentRulesInfo';

const initialFormData = {
    val: 'aa',
};

const rules = [{ path: 'val', ruleSet: [{ rule: 'required' }, { rule: 'iban' }] }];

const RuleIban = () => {
    const [isValid, validationError, formData, { setPathValue }] = useValidatableForm({
        rules,
        initialFormData,
    });

    return (
        <ExampleUsageWrapper header="iban" codeUrl="components/rules/RuleIban.js">
            <p className="infoParagraph">
                <b>iban</b> rule checks if the given value is a valid IBAN.
            </p>
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

export default RuleIban;
