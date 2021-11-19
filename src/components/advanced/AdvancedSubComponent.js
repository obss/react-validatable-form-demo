import get from 'lodash.get';
import TextField from '@mui/material/TextField';

const AdvancedSubComponent = (props) => {
    const { validationError, formData, setPathValue, setPathIsBlurred } = props;
    return (
        <div>
            <div className={'formField'}>
                <TextField
                    error={!!get(validationError, 'subComponentElement1')}
                    helperText={get(validationError, 'subComponentElement1') || ' '}
                    label="subComponentElement1"
                    type="text"
                    value={get(formData, 'subComponentElement1') || ''}
                    onChange={(e) => setPathValue('subComponentElement1', e.target.value)}
                    onBlur={() => setPathIsBlurred('subComponentElement1')}
                    id="subComponentElement1"
                />
                <TextField
                    error={!!get(validationError, 'subComponentElement2')}
                    helperText={get(validationError, 'subComponentElement2') || ' '}
                    label="subComponentElement2"
                    type="text"
                    value={get(formData, 'subComponentElement2') || ''}
                    onChange={(e) => setPathValue('subComponentElement2', e.target.value)}
                    onBlur={() => setPathIsBlurred('subComponentElement2')}
                    id="subComponentElement2"
                />
            </div>
        </div>
    );
};

export default AdvancedSubComponent;
