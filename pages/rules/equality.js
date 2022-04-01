import { useValidatableForm } from 'react-validatable-form';
import ExampleUsageWrapper from '../../components/ExampleUsageWrapper';
import TextField from '@mui/material/TextField';
import ValidationResult from '../../components/ValidationResult';
import CurrentRulesInfo from '../../components/CurrentRulesInfo';
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

const Equality = () => {
    const { isValid, setPathValue, getValue, getError } = useValidatableForm({
        rules,
        initialFormData,
    });

    return (
        <ExampleUsageWrapper header="equality" codeUrl="components/rules/Equality.js">
            <p className="infoParagraph">
                <b>equality</b> rule checks if the given value is equal to comparison value.
            </p>
            <div>
                <FormGroup className={'checkboxOnRight'}>
                    <FormControl error={!!getError('val')}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={getValue('val') || false}
                                    onChange={(e) => setPathValue('val', e.target.checked)}
                                />
                            }
                            label={<FormHelperText>{getError('val') || ' '}</FormHelperText>}
                        />
                    </FormControl>
                </FormGroup>
            </div>
            <div className="comparisonDiv">
                <TextField
                    error={!!getError('val2')}
                    helperText={getError('val2') || ' '}
                    label="val2"
                    type="text"
                    value={getValue('val2') || ''}
                    onChange={(e) => setPathValue('val2', e.target.value)}
                />
                <TextField
                    className="comparisonComponent"
                    label="comparisonValue"
                    type="text"
                    value={getValue('comparisonValue')}
                    onChange={(e) => setPathValue('comparisonValue', e.target.value)}
                />
            </div>
            <ValidationResult isValid={isValid} />
            <CurrentRulesInfo currentRules={rules} />
        </ExampleUsageWrapper>
    );
};

export default Equality;
