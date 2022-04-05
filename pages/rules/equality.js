import { useValidatableForm } from 'react-validatable-form';
import ExampleUsageWrapper from '../../components/ExampleUsageWrapper';
import TextField from '@mui/material/TextField';
import ValidationResult from '../../components/ValidationResult';
import CurrentRulesInfo from '../../components/CurrentRulesInfo';
import {
    Autocomplete,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormHelperText,
    Typography
} from '@mui/material';
import { options } from "../../constants/Data";


const initialFormData = {
    val: false,
    val2: 'aa',
    comparisonValue: 'aba',
    valIsOneOf1: 'Asia',
    valIsOneOf2: 'Asia',
    comparisonValueIsOneOf: ['North America', 'Africa', 'Europe'],
};

const rules = [
    { path: 'val', ruleSet: [{ rule: 'required' }, { rule: 'equality', equalTo: true }] },
    {
        path: 'val2',
        ruleSet: [{ rule: 'required' }, { rule: 'equality', equalTo: (formData) => formData['comparisonValue'] }],
        dependantPaths: ['comparisonValue'],
    },
    {
        path: 'valIsOneOf1',
        ruleSet: [{ rule: 'required' }, { rule: 'equality', isOneOf: ['North America', 'Africa', 'Europe'] }],
    },
    {
        path: 'valIsOneOf2',
        ruleSet: [
            { rule: 'required' },
            { rule: 'equality', isOneOf: (formData) => formData['comparisonValueIsOneOf'] },
        ],
        dependantPaths: ['comparisonValueIsOneOf'],
    },
];

const Equality = () => {
    const { isValid, setPathValue, getValue, getError } = useValidatableForm({
        rules,
        initialFormData,
    });


    return (
        <ExampleUsageWrapper header="equality" codeUrl="pages/rules/equality.js">
            <p className="infoParagraph">
                <b>equality</b> rule checks if the given value is equal to comparison value.
            </p>
            <div>
                <Typography className={"comparisonArea"} variant={'h6'}> equalTo </Typography>
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
                        label="valueEqualToVal"
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
            </div>
           <div>
               <Typography className={"comparisonArea"} variant={'h6'}> isOneOf </Typography>
               <div className="comparisonDiv">
                   <TextField
                       error={!!getError('valIsOneOf1')}
                       helperText={getError('valIsOneOf1') || ' '}
                       label="isOneOf"
                       type="text"
                       value={getValue('valIsOneOf1') || ''}
                       onChange={(e) => setPathValue('valIsOneOf1', e.target.value)}
                   />
                   {"['North America', 'Africa', 'Europe']"}
               </div>
               <div className="comparisonDiv">
                   <TextField
                       error={!!getError('valIsOneOf2')}
                       helperText={getError('valIsOneOf2') || ' '}
                       label="isOneOfFunc"
                       type="text"
                       value={getValue('valIsOneOf2') || ''}
                       onChange={(e) => setPathValue('valIsOneOf2', e.target.value)}
                   />
                   <Autocomplete
                       multiple
                       value={getValue('comparisonValueIsOneOf')}
                       onChange={(event, newValue) => {
                           setPathValue('comparisonValueIsOneOf', newValue);
                       }}
                       options={options}
                       renderInput={(params) => <TextField {...params} label="ruleOption" />}
                   />
               </div>
           </div>
            <ValidationResult isValid={isValid} />
            <CurrentRulesInfo currentRules={rules} />
        </ExampleUsageWrapper>
    );
};

export default Equality;
