import { useValidatableForm } from 'react-validatable-form';
import ExampleUsageWrapper from '../../components/ExampleUsageWrapper';
import TextField from '@mui/material/TextField';
import ValidationResult from '../../components/ValidationResult';
import CurrentRulesInfo from '../../components/CurrentRulesInfo';

const initialFormData = {};

const rules = [{ path: 'val', ruleSet: [{ rule: 'required' }] }];

const Required = () => {
    const { isValid, setPathValue, getValue, getError } = useValidatableForm({
        rules,
        initialFormData,
    });

    return (
        <ExampleUsageWrapper header="required" codeUrl="components/rules/Required.js">
            <p className="infoParagraph">
                <b>required</b> rule checks if the given value is <b>undefined</b>, <b>null</b>, <b>empty string</b> or{' '}
                <b>empty array</b>.
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

export default Required;
