import { useValidatableForm } from 'react-validatable-form';
import ExampleUsageWrapper from '../ExampleUsageWrapper';
import TextField from '@mui/material/TextField';
import ValidationResult from '../ValidationResult';
import CurrentRulesInfo from '../CurrentRulesInfo';

const initialFormData = {
    val1: '',
    val2: '',
    checkVal: false,
};

const rules = [
    { path: 'val1', ruleSet: ['required', { rule: 'length', greaterThan: 8 }] },
    { path: 'val2', ruleSet: ['required', { rule: 'length', equalTo: 5 }] },
];

const CustomTranslations = () => {
    const [isValid, validationError, formData, { setPathValue }] = useValidatableForm({
        rules,
        initialFormData,
    });

    return (
        <ExampleUsageWrapper
            header="translations"
            codeUrl={['components/customizations/CustomTranslations.js', 'components/Main.js']}
        >
            <div>
                <div>
                    <TextField
                        error={!!validationError.val1}
                        helperText={validationError.val1 || ' '}
                        label="val1 (requiredAndLengthGreaterThan)"
                        type="text"
                        value={formData.val1}
                        onChange={(e) => setPathValue('val1', e.target.value)}
                    />
                </div>
                <div>
                    <TextField
                        error={!!validationError.val2}
                        helperText={validationError.val2 || ' '}
                        label="val2 (requiredAndLengthEqualTo)"
                        type="text"
                        value={formData.val2}
                        onChange={(e) => setPathValue('val2', e.target.value)}
                    />
                </div>
                <ValidationResult isValid={isValid} />
                <CurrentRulesInfo currentRules={rules} />
            </div>
        </ExampleUsageWrapper>
    );
};

export default CustomTranslations;
