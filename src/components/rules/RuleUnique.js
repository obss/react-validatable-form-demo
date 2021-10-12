import { useValidatableForm } from 'react-validatable-form';
import get from 'lodash.get';
import ExampleUsageWrapper from '../ExampleUsageWrapper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ValidationResult from '../ValidationResult';
import CurrentRulesInfo from '../CurrentRulesInfo';
import { useState } from 'react';

const rules = [
    {
        listPath: 'listChild',
        ruleSet: ['required', { rule: 'unique' }],
    },
    {
        listPath: 'listOfObjectsChild',
        subRules: [
            {
                path: 'subkey1',
                ruleSet: ['required', { rule: 'unique' }],
            },
        ],
    },
];

const RuleUnique = () => {
    const [isValid, validationError, formData, { setPathValue }] = useValidatableForm({
        rules,
        initialFormData: { listChild: ['', ''], listOfObjectsChild: [{ id: 1 }, { id: 2 }] },
    });
    const [nextId, setNextId] = useState(3);

    let listChildJsx = null;

    const handleAddElement = () => {
        const newListChild = [...formData.listChild];
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

    const handleAddObjectElement = () => {
        const newListOfObjectsChild = [...formData.listOfObjectsChild];
        newListOfObjectsChild.push({ id: nextId });
        setNextId(nextId + 1);
        setPathValue('listOfObjectsChild', newListOfObjectsChild);
    };

    const handleDeleteObjectElement = (id) => {
        const newListOfObjectsChild = formData.listOfObjectsChild.filter((el) => el.id !== id);
        setPathValue('listOfObjectsChild', newListOfObjectsChild);
    };

    let listOfObjectsChildJsx = null;

    if (formData.listOfObjectsChild && formData.listOfObjectsChild.length > 0) {
        listOfObjectsChildJsx = formData.listOfObjectsChild.map((lc, index) => {
            return (
                <div key={lc.id}>
                    <TextField
                        error={!!get(validationError, `listOfObjectsChild{${index}}.subkey1`)}
                        helperText={get(validationError, `listOfObjectsChild{${index}}.subkey1`) || ' '}
                        label="unique subkey"
                        type="text"
                        value={get(formData, `listOfObjectsChild[${index}].subkey1`) || ''}
                        onChange={(e) => setPathValue(`listOfObjectsChild[${index}].subkey1`, e.target.value)}
                        id={`listOfObjectsChild{${index}}.subkey1`}
                    />
                    <Button
                        className="myDeleteButton"
                        variant="contained"
                        onClick={() => handleDeleteObjectElement(lc.id)}
                    >
                        Delete Element
                    </Button>
                </div>
            );
        });
    }

    return (
        <ExampleUsageWrapper header="Unique" codeUrl="components/rules/RuleUnique.js">
            <div>
                <div>
                    <Button className="myAddButton" variant="contained" onClick={() => handleAddElement()}>
                        Add New Element
                    </Button>
                </div>
                <div className={'formListField'}>{listChildJsx}</div>
                <div className={'errorInfoText'}>{get(validationError, 'listChild')}</div>

                <div>
                    <Button className="myAddButton" variant="contained" onClick={() => handleAddObjectElement()}>
                        Add New Element
                    </Button>
                </div>
                <div className={'formListField'}>{listOfObjectsChildJsx}</div>
                <div className={'errorInfoText'}>{get(validationError, 'listOfObjectsChild')}</div>
                <ValidationResult isValid={isValid} />
                <CurrentRulesInfo currentRules={rules} />
            </div>
        </ExampleUsageWrapper>
    );
};

export default RuleUnique;
