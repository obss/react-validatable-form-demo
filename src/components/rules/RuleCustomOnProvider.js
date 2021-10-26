import { useValidatableForm } from 'react-validatable-form';
import { Link } from 'react-router-dom';
import get from 'lodash.get';
import ExampleUsageWrapper from '../ExampleUsageWrapper';
import TextField from '@mui/material/TextField';
import ValidationResult from '../ValidationResult';
import CurrentRulesInfo from '../CurrentRulesInfo';

const initialFormData = {
    val: 'b',
};

const rules = [{ path: 'val', ruleSet: [{ rule: 'required' }, { rule: 'myCustomRule' }] }];

const RuleCustomOnProvider = () => {
    const { isValid, validationError, formData, setPathValue } = useValidatableForm({
        rules,
        initialFormData,
    });

    return (
        <ExampleUsageWrapper
            header="custom on provider"
            codeUrl={['components/rules/RuleCustomOnProvider.js', 'components/Main.js']}
        >
            <p className="infoParagraph">
                Custom rules can be defined as a function and passed to{' '}
                <Link className="inner-link" to="/api/react-validatable-form-provider">
                    ReactValidatableFormProvider
                </Link>{' '}
                with a unique name and can be used anywhere in the app.
            </p>
            <div>
                <TextField
                    error={!!get(validationError, 'val')}
                    helperText={get(validationError, 'val') || ' '}
                    label="val"
                    type="text"
                    value={get(formData, 'val') || ''}
                    onChange={(e) => setPathValue('val', e.target.value)}
                />
            </div>
            <ValidationResult isValid={isValid} />
            <CurrentRulesInfo currentRules={rules} />
        </ExampleUsageWrapper>
    );
};

export default RuleCustomOnProvider;
