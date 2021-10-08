import { useState } from 'react';
import { useValidatableForm } from 'react-validatable-form';
import { get } from 'lodash';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { ruleOptions } from '../../constants/Constants';
import ExampleUsageWrapper from '../ExampleUsageWrapper';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import ValidationResult from '../ValidationResult';
import CurrentRulesInfo from '../CurrentRulesInfo';

const defaultComparisonValue = 5;
const numberRule = { rule: 'number' };
numberRule[ruleOptions[0]] = defaultComparisonValue;
const rules = [{ path: 'val', ruleSet: ['required', numberRule], dependantPaths: ['comparisonValue'] }];
const initialFormData = {
    val: 3,
    ruleOption: ruleOptions[0],
    comparisonValue: defaultComparisonValue,
};

const RuleNumber = () => {
    const [isValid, validationError, formData, { setPathValue, setRules }] = useValidatableForm({
        rules,
        initialFormData,
    });
    const [currentRules, setCurrentRules] = useState(rules);
    const [ruleOption, setRuleOption] = useState(ruleOptions[0]);
    const [isFunc, setIsFunc] = useState(false);

    const updateRules = (funcParam, ruleParam) => {
        const newRules = [...rules];
        const newRuleSet = [...newRules[0].ruleSet];
        const newRule = { rule: 'number' };
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
        <ExampleUsageWrapper header="number" codeUrl="components/rules/RuleNumber.js">
            <div className="comparisonDiv">
                <TextField
                    error={!!get(validationError, 'val')}
                    helperText={get(validationError, 'val') || ' '}
                    label="val"
                    type="number"
                    value={get(formData, 'val')}
                    onChange={(e) => setPathValue('val', e.target.value)}
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
                    <TextField
                        className="comparisonComponent"
                        label="comparisonValue"
                        type="number"
                        value={get(formData, 'comparisonValue')}
                        onChange={(e) => setPathValue('comparisonValue', e.target.value)}
                    />
                ) : (
                    <TextField
                        disabled={true}
                        className="comparisonComponent"
                        label="comparisonValue"
                        type="number"
                        value={defaultComparisonValue}
                        onChange={() => {}}
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

export default RuleNumber;
