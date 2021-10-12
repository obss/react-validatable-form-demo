import { useState } from 'react';
import { useValidatableForm } from 'react-validatable-form';
import get from 'lodash.get';
import ExampleUsageWrapper from '../ExampleUsageWrapper';
import ValidationResult from '../ValidationResult';
import FormSubmitResult from '../FormSubmitResult';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Dialog, DialogTitle } from '@mui/material';
import { options } from '../../constants/Data';
import CurrentRulesInfo from '../CurrentRulesInfo';
import './MyBootstrap.css';

const rules = [
    { path: 'textVal1', ruleSet: [{ rule: 'required' }] },
    { path: 'textVal2', ruleSet: [{ rule: 'required' }] },
    { path: 'numVal', ruleSet: [{ rule: 'required' }] },
    { path: 'selectVal', ruleSet: [{ rule: 'required' }] },
];

const ExampleReactBootstrap = () => {
    const [
        isValid,
        validationError,
        formData,
        { setPathValue, setFormIsSubmitted, setPathIsBlurred },
    ] = useValidatableForm({
        rules,
        hideBeforeSubmit: true,
        showAfterBlur: true,
        focusToErrorAfterSubmit: true,
    });
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleFormSubmit = () => {
        const submitResultValid = setFormIsSubmitted();
        if (submitResultValid) {
            setDialogOpen(true);
        }
    };

    return (
        <ExampleUsageWrapper
            header="Example Usage with React-Bootstrap Components"
            codeUrl="components/examples/ExampleReactBootstrap.js"
        >
            <Form className="my-bootstrap-form">
                <Form.Group controlId="textVal1">
                    <Form.Label>Text1</Form.Label>
                    <Form.Control
                        placeholder="Text1"
                        value={get(formData, 'textVal1') || ''}
                        onBlur={() => setPathIsBlurred('textVal1')}
                        onChange={(e) => setPathValue('textVal1', e.target.value)}
                        isInvalid={!!get(validationError, 'textVal1')}
                    />
                    {get(validationError, 'textVal1') ? (
                        <Form.Control.Feedback type="invalid">
                            {get(validationError, 'textVal1') || ' '}
                        </Form.Control.Feedback>
                    ) : (
                        <div className={'my-bootstrap-empty-feedback'}></div>
                    )}
                </Form.Group>
                <Form.Group controlId="textVal2">
                    <Form.Label>Text2</Form.Label>
                    <Form.Control
                        placeholder="Text2"
                        value={get(formData, 'textVal2') || ''}
                        onBlur={() => setPathIsBlurred('textVal2')}
                        onChange={(e) => setPathValue('textVal2', e.target.value)}
                        isInvalid={!!get(validationError, 'textVal2')}
                    />
                    {get(validationError, 'textVal2') ? (
                        <Form.Control.Feedback type="invalid">
                            {get(validationError, 'textVal2') || ' '}
                        </Form.Control.Feedback>
                    ) : (
                        <div className={'my-bootstrap-empty-feedback'}></div>
                    )}
                </Form.Group>
                <Form.Group controlId="numVal">
                    <Form.Label>Num Val</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Num Val"
                        value={get(formData, 'numVal') || ''}
                        onBlur={() => setPathIsBlurred('numVal')}
                        onChange={(e) => setPathValue('numVal', e.target.value)}
                        isInvalid={!!get(validationError, 'numVal')}
                    />
                    {get(validationError, 'numVal') ? (
                        <Form.Control.Feedback type="invalid">
                            {get(validationError, 'numVal') || ' '}
                        </Form.Control.Feedback>
                    ) : (
                        <div className={'my-bootstrap-empty-feedback'}></div>
                    )}
                </Form.Group>
                <Form.Group controlId="selectVal">
                    <Form.Label>Select Val</Form.Label>
                    <Form.Select
                        value={get(formData, 'selectVal') || ''}
                        onBlur={() => setPathIsBlurred('selectVal')}
                        onChange={(e) => setPathValue('selectVal', e.target.value)}
                        isInvalid={!!get(validationError, 'selectVal')}
                    >
                        <option key={'empty'} value={''}>
                            {''}
                        </option>
                        {options.map((op) => {
                            return (
                                <option key={op} value={op}>
                                    {op}
                                </option>
                            );
                        })}
                    </Form.Select>
                    {get(validationError, 'selectVal') ? (
                        <Form.Control.Feedback type="invalid">
                            {get(validationError, 'selectVal') || ' '}
                        </Form.Control.Feedback>
                    ) : (
                        <div className={'my-bootstrap-empty-feedback'}></div>
                    )}
                </Form.Group>
                <Button className="mySubmitButton" variant="primary" type="submit" onClick={() => handleFormSubmit()}>
                    Submit
                </Button>
                <ValidationResult isValid={isValid} />
                <CurrentRulesInfo currentRules={rules} />
            </Form>
            <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
                <DialogTitle>Form Data Submitted</DialogTitle>
                <FormSubmitResult formData={formData} />
            </Dialog>
        </ExampleUsageWrapper>
    );
};

export default ExampleReactBootstrap;
