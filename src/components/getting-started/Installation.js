import ExampleUsageWrapper from '../ExampleUsageWrapper';
import './Installation.css';

const npmCommand = '// with npm\nnpm install react-validatable-form';
const yarnCommand = '// with yarn\nyarn add react-validatable-form';

const Installation = () => {
    return (
        <ExampleUsageWrapper header="Installation">
            <span className="outsideUrlSpan">
                <a href={'https://www.npmjs.com/package/react-validatable-form'} target="_blank" rel="noreferrer">
                    View on npmjs
                </a>
            </span>

            <div className="commandBox">
                <span>{npmCommand}</span>
            </div>
            <div className="commandBox">
                <span>{yarnCommand}</span>
            </div>
        </ExampleUsageWrapper>
    );
};

export default Installation;
