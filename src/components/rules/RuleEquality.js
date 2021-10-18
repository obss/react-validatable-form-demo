import { useValidatableForm } from 'react-validatable-form';
import get from 'lodash.get';
import ExampleUsageWrapper from '../ExampleUsageWrapper';
import TextField from '@mui/material/TextField';
import ValidationResult from '../ValidationResult';
import CurrentRulesInfo from '../CurrentRulesInfo';
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText } from '@mui/material';

const initialFormData = {
    val: false,
    val2: 'aa',
    comparisonValue: 'aba',
};

const rules = [
    { path: 'val', ruleSet: [{ rule: 'required' }, { rule: 'equality', equalTo: true }] },
    {
        path: 'val2',
        ruleSet: [{ rule: 'required' }, { rule: 'equality', equalTo: (formData) => formData['comparisonValue'] }],
        dependantPaths: ['comparisonValue'],
    },
];

const RuleEquality = () => {
    const [isValid, validationError, formData, { setPathValue }] = useValidatableForm({
        rules,
        initialFormData,
    });

    return (
        <ExampleUsageWrapper header="equality" codeUrl="components/rules/RuleEquality.js">
            <div>
                <FormGroup className={'checkboxOnRight'}>
                    <FormControl error={!!get(validationError, 'val')}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={get(formData, 'val') || false}
                                    onChange={(e) => setPathValue('val', e.target.checked)}
                                />
                            }
                            label={<FormHelperText>{get(validationError, 'val') || ' '}</FormHelperText>}
                        />
                    </FormControl>
                </FormGroup>
            </div>
            <div className="comparisonDiv">
                <TextField
                    error={!!get(validationError, 'val2')}
                    helperText={get(validationError, 'val2') || ' '}
                    label="val2"
                    type="text"
                    value={get(formData, 'val2') || ''}
                    onChange={(e) => setPathValue('val2', e.target.value)}
                />
                <TextField
                    className="comparisonComponent"
                    label="comparisonValue"
                    type="text"
                    value={get(formData, 'comparisonValue')}
                    onChange={(e) => setPathValue('comparisonValue', e.target.value)}
                />
            </div>
            <ValidationResult isValid={isValid} />
            <CurrentRulesInfo currentRules={rules} />
        </ExampleUsageWrapper>
    );
};

export default RuleEquality;
