import Image from 'next/image'
import {prefix} from "../utils/prefix";

const ValidationResult = ({ isValid }) => {
    let imgSrc;
    let validationResultText = '';
    if (isValid) {
        imgSrc = `${prefix}/valid.png`;
        validationResultText = 'valid';
    } else {
        imgSrc = `${prefix}/invalid.png`;
        validationResultText = 'invalid';
    }

    return (
        <div className={'validationResultDiv'}>
            <span>Validation Result: </span>
            <img src={imgSrc} alt="validationresult" width={24} height={24} className={'validationResultIcon'} />
            <span className={isValid ? 'validationResultInfoSuccess' : 'validationResultInfoFail'}>
                {validationResultText}
            </span>
        </div>
    );
};

export default ValidationResult;
