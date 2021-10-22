import { useValidatableForm } from 'react-validatable-form';
import get from 'lodash.get';
import ExampleUsageWrapper from '../ExampleUsageWrapper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
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
        initialFormData: {
            listChild: ['a', 'a'],
            listOfObjectsChild: [
                { id: 1, subkey1: 'b' },
                { id: 2, subkey1: 'b' },
            ],
        },
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
                        <span className="myShinkableButtonSpan">Delete Element</span>
                        <DeleteIcon className="myShinkableButtonIcon" />
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
                        <span className="myShinkableButtonSpan">Delete Element</span>
                        <DeleteIcon className="myShinkableButtonIcon" />
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
                        <span className="myShinkableButtonSpan">Add New Element</span>
                        <AddIcon className="myShinkableButtonIcon" />
                    </Button>
                </div>
                <div className={'formListField'}>{listChildJsx}</div>
                <div className={'errorInfoText'}>{get(validationError, 'listChild')}</div>

                <div>
                    <Button className="myAddButton" variant="contained" onClick={() => handleAddObjectElement()}>
                        <span className="myShinkableButtonSpan">Add New Element</span>
                        <AddIcon className="myShinkableButtonIcon" />
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
