import { useValidatableForm } from 'react-validatable-form';
import ExampleUsageWrapper from '../ExampleUsageWrapper';
import TextField from '@mui/material/TextField';
import ValidationResult from '../ValidationResult';
import CurrentRulesInfo from '../CurrentRulesInfo';

const initialFormData = {
    val1: 'a',
    val2: 'a',
    checkVal: false,
};

const customMessageFunc = (errorParams) => {
    if (errorParams.value > errorParams.comparisonValue) {
        return `This field's length should be ${errorParams.comparisonValue}, your input's (${errorParams.value}) is greater than this value`;
    }
    return `This field's length should be ${errorParams.comparisonValue}, your input's (${errorParams.value}) is less than this value`;
};

const rules = [
    {
        path: 'val1',
        ruleSet: [
            'required',
            {
                rule: 'length',
                greaterThan: 8,
                customMessage: "This field's length is ${value}, however it should be greater than ${comparisonValue}",
            },
        ],
    },
    { path: 'val2', ruleSet: ['required', { rule: 'length', equalTo: 5, customMessage: customMessageFunc }] },
];

const CustomMessage = () => {
    const [isValid, validationError, formData, { setPathValue }] = useValidatableForm({
        rules,
        initialFormData,
    });

    return (
        <ExampleUsageWrapper header="customMessage" codeUrl="components/customizations/CustomMessage.js">
            <div>
                <div>
                    <TextField
                        error={!!validationError.val1}
                        helperText={validationError.val1 || ' '}
                        label="val1 (customMessage as string)"
                        type="text"
                        value={formData.val1}
                        onChange={(e) => setPathValue('val1', e.target.value)}
                    />
                </div>
                <div>
                    <TextField
                        error={!!validationError.val2}
                        helperText={validationError.val2 || ' '}
                        label="val2 (customMessage as function)"
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

export default CustomMessage;
