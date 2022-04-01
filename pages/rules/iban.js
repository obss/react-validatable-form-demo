import { useValidatableForm } from 'react-validatable-form';
import ExampleUsageWrapper from '../../components/ExampleUsageWrapper';
import TextField from '@mui/material/TextField';
import ValidationResult from '../../components/ValidationResult';
import CurrentRulesInfo from '../../components/CurrentRulesInfo';

const initialFormData = {
    val: 'aa',
};

const rules = [{ path: 'val', ruleSet: [{ rule: 'required' }, { rule: 'iban' }] }];

const Iban = () => {
    const { isValid, setPathValue, getValue, getError } = useValidatableForm({
        rules,
        initialFormData,
    });

    return (
        <ExampleUsageWrapper header="iban" codeUrl="components/rules/iban.js">
            <p className="infoParagraph">
                <b>iban</b> rule checks if the given value is a valid IBAN.
            </p>
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

export default Iban;
