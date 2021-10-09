import ExampleUsageWrapper from '../ExampleUsageWrapper';
import './Installation.css';

const npmCommandHeader = '// with npm';
const npmCommand = 'npm install react-validatable-form';
const yarnCommandHeader = '// with yarn';
const yarnCommand = 'yarn add react-validatable-form';

const Installation = () => {
    return (
        <ExampleUsageWrapper header="Installation">
            <div className="outsideUrlSpan">
                <a href={'https://www.npmjs.com/package/react-validatable-form'} target="_blank" rel="noreferrer">
                    View on npmjs
                </a>
            </div>

            <div className="outsideUrlSpan">
                <a href={'https://github.com/obss/react-validatable-form'} target="_blank" rel="noreferrer">
                    View on GitHub
                </a>
            </div>

            <div className="commandBox">
                <p>{npmCommandHeader}</p>
                <p className="commandText">{npmCommand}</p>
            </div>
            <div className="commandBox">
                <p>{yarnCommandHeader}</p>
                <p className="commandText">{yarnCommand}</p>
            </div>
        </ExampleUsageWrapper>
    );
};

export default Installation;
