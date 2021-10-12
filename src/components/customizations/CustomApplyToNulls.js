import { useValidatableForm } from 'react-validatable-form';
import get from 'lodash.get';
import ExampleUsageWrapper from '../ExampleUsageWrapper';
import TextField from '@mui/material/TextField';
import ValidationResult from '../ValidationResult';
import CurrentRulesInfo from '../CurrentRulesInfo';
import { Autocomplete, Button } from '@mui/material';
import { options } from '../../constants/Data';
import { DesktopDatePicker } from '@mui/lab';

const initialFormData = { listChild: ['', ''] };

const today = new Date();
const rules = [
    { path: 'val1', ruleSet: [{ rule: 'required', applyToNulls: true }] },
    { path: 'val2', ruleSet: [{ rule: 'number', equalTo: 3, applyToNulls: true }] },
    { path: 'val3', ruleSet: [{ rule: 'length', equalTo: 3, applyToNulls: true }] },
    { path: 'val4', ruleSet: [{ rule: 'listSize', equalTo: 3, applyToNulls: true }] },
    { path: 'val5', ruleSet: [{ rule: 'date', equalTo: today, applyToNulls: true }] },
    { path: 'val6', ruleSet: [{ rule: 'email', applyToNulls: true }] },
    { path: 'val7', ruleSet: [{ rule: 'url', applyToNulls: true }] },
    { path: 'val8', ruleSet: [{ rule: 'iban', applyToNulls: true }] },
    { path: 'val9', ruleSet: [{ rule: 'equality', equalTo: 'aaa', applyToNulls: true }] },
    { path: 'val10', ruleSet: [{ rule: 'regex', regex: /a/, applyToNulls: true }] },
    {
        listPath: 'listChild',
        ruleSet: [{ rule: 'unique', applyToNulls: true }],
    },
];

const CustomApplyToNulls = () => {
    const [isValid, validationError, formData, { setPathValue }] = useValidatableForm({
        rules,
        initialFormData,
    });

    let listChildJsx = null;

    const handleAddElement = () => {
        const newListChild = formData.listChild ? [...formData.listChild] : [];
        newListChild.push('');
        setPathValue('listChild', newListChild);
    };

    const handleDeleteElement = (index) => {
        const newListChild = formData.listChild.filter((el, ind) => ind !== index);
        setPathValue('listChild', newListChild);
    };

    if (formData.listChild && formData.listChild.length > 0) {
        listChildJsx = formData.listChild.map((lc, index) => {
            return (
                <div key={index}>
                    <TextField
                        error={!!get(validationError, `listChild{${index}}`)}
                        helperText={get(validationError, `listChild{${index}}`) || ' '}
                        label="unique"
                        type="text"
                        value={get(formData, `listChild[${index}]`) || ''}
                        onChange={(e) => setPathValue(`listChild[${index}]`, e.target.value)}
                    />
                    <Button className="myDeleteButton" variant="contained" onClick={() => handleDeleteElement(index)}>
                        Delete Element
                    </Button>
                </div>
            );
        });
    }

    return (
        <ExampleUsageWrapper header="applyToNulls" codeUrl="components/customizations/CustomApplyToNulls.js">
            <div>
                <TextField
                    error={!!get(validationError, 'val1')}
                    helperText={get(validationError, 'val1') || ' '}
                    label="requiredApplyToNulls"
                    type="text"
                    value={get(formData, 'val1') || ''}
                    onChange={(e) => setPathValue('val1', e.target.value)}
                />
            </div>
            <div>
                <TextField
                    error={!!get(validationError, 'val2')}
                    helperText={get(validationError, 'val2') || ' '}
                    label="numberApplyToNulls"
                    type="number"
                    value={get(formData, 'val2') || ''}
                    onChange={(e) => setPathValue('val2', e.target.value)}
                />
            </div>
            <div>
                <TextField
                    error={!!get(validationError, 'val3')}
                    helperText={get(validationError, 'val3') || ' '}
                    label="lengthApplyToNulls"
                    type="text"
                    value={get(formData, 'val3') || ''}
                    onChange={(e) => setPathValue('val3', e.target.value)}
                />
            </div>
            <div>
                <Autocomplete
                    multiple
                    value={get(formData, 'val4') || []}
                    onChange={(event, newValue) => {
                        setPathValue('val4', newValue);
                    }}
                    options={options}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            error={!!get(validationError, 'val4')}
                            helperText={get(validationError, 'val4') || ' '}
                            label="listSizeApplyToNulls"
                        />
                    )}
                />
            </div>
            <div>
                <DesktopDatePicker
                    label="dateApplyToNulls"
                    inputFormat="MM/dd/yyyy"
                    value={get(formData, 'val5') || null}
                    onChange={(val) => setPathValue('val5', val)}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            error={!!get(validationError, 'val5')}
                            helperText={get(validationError, 'val5') || ' '}
                        />
                    )}
                />
            </div>
            <div>
                <TextField
                    error={!!get(validationError, 'val6')}
                    helperText={get(validationError, 'val6') || ' '}
                    label="emailApplyToNulls"
                    type="text"
                    value={get(formData, 'val6') || ''}
                    onChange={(e) => setPathValue('val6', e.target.value)}
                />
            </div>
            <div>
                <TextField
                    error={!!get(validationError, 'val7')}
                    helperText={get(validationError, 'val7') || ' '}
                    label="urlApplyToNulls"
                    type="text"
                    value={get(formData, 'val7') || ''}
                    onChange={(e) => setPathValue('val7', e.target.value)}
                />
            </div>
            <div>
                <TextField
                    error={!!get(validationError, 'val8')}
                    helperText={get(validationError, 'val8') || ' '}
                    label="ibanApplyToNulls"
                    type="text"
                    value={get(formData, 'val8') || ''}
                    onChange={(e) => setPathValue('val8', e.target.value)}
                />
            </div>
            <div>
                <TextField
                    error={!!get(validationError, 'val9')}
                    helperText={get(validationError, 'val9') || ' '}
                    label="equalityApplyToNulls"
                    type="text"
                    value={get(formData, 'val9') || ''}
                    onChange={(e) => setPathValue('val9', e.target.value)}
                />
            </div>
            <div>
                <TextField
                    error={!!get(validationError, 'val10')}
                    helperText={get(validationError, 'val10') || ' '}
                    label="regexApplyToNulls"
                    type="text"
                    value={get(formData, 'val10') || ''}
                    onChange={(e) => setPathValue('val10', e.target.value)}
                />
            </div>
            <div>
                <Button className="myAddButton" variant="contained" onClick={() => handleAddElement()}>
                    Add New Element
                </Button>
            </div>
            <div className={'formListField'}>{listChildJsx}</div>
            <div className={'errorInfoText'}>{get(validationError, 'listChild')}</div>

            <ValidationResult isValid={isValid} />
            <CurrentRulesInfo currentRules={rules} />
        </ExampleUsageWrapper>
    );
};

export default CustomApplyToNulls;
