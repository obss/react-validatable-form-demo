import ExampleUsageWrapper from '../ExampleUsageWrapper';
import './Usage.css';

const Usage = () => {
    const providerCode = `import { ReactValidatableFormProvider } from 'react-validatable-form';

    //....
    return <ReactValidatableFormProvider>
                <App />
        </ReactValidatableFormProvider>;
    `;

    const hookCode = `import { useValidatableForm } from 'react-validatable-form';
import { get } from 'lodash';
import TextField from '@mui/material/TextField';

//....
    
const initialFormData = {};
const rules = [{ path: 'val', ruleSet: [{ rule: 'required' }] }];

//....

    const [isValid, validationError, formData, { setPathValue }] = useValidatableForm({
        rules,
        initialFormData,
    });

    return <TextField
        error={!!get(validationError, 'val')}
        helperText={get(validationError, 'val') || ' '}
        label="val"
        type="text"
        value={get(formData, 'val') || ''}
        onChange={(e) => setPathValue('val', e.target.value)}
    />;
    `;

    return (
        <ExampleUsageWrapper header="Usage">
            <div className="codeHeader">Example Usage of ReactValidatableFormProvider:</div>
            <div className="codeBox">
                <span>{providerCode}</span>
            </div>
            <div className="codeHeader">Example Usage of useValidatableForm Hook:</div>
            <div className="codeBox">
                <span>{hookCode}</span>
            </div>
        </ExampleUsageWrapper>
    );
};

export default Usage;
