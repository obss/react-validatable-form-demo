import { useState } from 'react';
import { useValidatableForm } from 'react-validatable-form';
import get from 'lodash.get';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { ruleOptions } from '../../constants/Constants';
import ExampleUsageWrapper from '../ExampleUsageWrapper';
import TextField from '@mui/material/TextField';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import Autocomplete from '@mui/material/Autocomplete';
import ValidationResult from '../ValidationResult';
import CurrentRulesInfo from '../CurrentRulesInfo';

const today = new Date();
const defaultComparisonValue = today;
var yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);
const dateRule = { rule: 'date' };
dateRule[ruleOptions[0]] = defaultComparisonValue;
const rules = [{ path: 'val', ruleSet: ['required', dateRule], dependantPaths: ['comparisonValue'] }];
const initialFormData = {
    val: yesterday,
    ruleOption: ruleOptions[0],
    comparisonValue: defaultComparisonValue,
};

const RuleDate = () => {
    const [isValid, validationError, formData, { setPathValue, setRules }] = useValidatableForm({
        rules,
        initialFormData,
    });
    const [currentRules, setCurrentRules] = useState(rules);
    const [ruleOption, setRuleOption] = useState(ruleOptions[0]);
    const [isFunc, setIsFunc] = useState(false);

    const updateRules = (funcParam, ruleParam) => {
        const newRules = JSON.parse(JSON.stringify(rules));
        const newRuleSet = [...newRules[0].ruleSet];
        const newRule = { rule: 'date' };
        if (funcParam) {
            newRule[ruleParam] = (formData) => formData['comparisonValue'];
        } else {
            newRule[ruleParam] = defaultComparisonValue;
        }
        newRuleSet.splice(1, 1, newRule);
        newRules[0].ruleSet = newRuleSet;
        setCurrentRules(newRules);
        setRules(newRules);
    };

    const handleSetIsFunc = (newValue) => {
        updateRules(newValue, ruleOption);
        setIsFunc(newValue);
    };

    const handleRuleOptionChange = (newValue) => {
        updateRules(isFunc, newValue);
        setRuleOption(newValue);
    };

    return (
        <ExampleUsageWrapper header="date" codeUrl="components/rules/RuleDate.js">
            <div className="comparisonDiv">
                <DesktopDatePicker
                    label="val"
                    inputFormat="MM/dd/yyyy"
                    value={get(formData, 'val')}
                    onChange={(val) => setPathValue('val', val)}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            error={!!get(validationError, 'val')}
                            helperText={get(validationError, 'val') || ' '}
                        />
                    )}
                />

                <Autocomplete
                    className="ruleOptionComponent"
                    value={ruleOption}
                    onChange={(event, newValue) => {
                        handleRuleOptionChange(newValue);
                    }}
                    options={ruleOptions}
                    disableClearable={true}
                    renderInput={(params) => <TextField {...params} label="ruleOption" />}
                />
                {isFunc ? (
                    <DesktopDatePicker
                        label="comparisonValue"
                        inputFormat="MM/dd/yyyy"
                        value={get(formData, 'comparisonValue')}
                        onChange={(val) => setPathValue('comparisonValue', val)}
                        renderInput={(params) => <TextField className="comparisonComponent" {...params} />}
                    />
                ) : (
                    <DesktopDatePicker
                        disabled={true}
                        style={{ width: 200 }}
                        label="comparisonValue"
                        inputFormat="MM/dd/yyyy"
                        value={today}
                        onChange={() => {}}
                        renderInput={(params) => <TextField className="comparisonComponent" {...params} />}
                    />
                )}
                <FormGroup className={'checkboxOnRight'}>
                    <FormControlLabel
                        control={<Checkbox checked={isFunc} onChange={(e) => handleSetIsFunc(e.target.checked)} />}
                        label="as Function"
                    />
                </FormGroup>
            </div>
            <ValidationResult isValid={isValid} />
            <CurrentRulesInfo currentRules={currentRules} />
        </ExampleUsageWrapper>
    );
};

export default RuleDate;
