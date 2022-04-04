import Link from 'next/link';
import ApiInfo from '../../components/ApiInfo';
import CodeAccordion from '../../components/CodeAccordion';
import ExampleUsageWrapper from '../../components/ExampleUsageWrapper';


const rulesFormCode = `ruleSet: [
    { rule: 'required', customMessage: 'This list should not be empty' },
    { rule: 'listSize', greaterThan: 2 },
],`;

const ruleParametersApiInfoList = [
    {
        label: 'rule (string || func)',
        desc: (
            <span>
                Identifier (name) of the rule to be run. (Can also be a{' '}
                <Link href="/rules/custom-on-hook">
                    <a className={"inner-link"}> custom function </a>
                </Link>
                )
            </span>
        ),
    },
    {
        label: 'equalTo, lessThan, lessThanOrEqualTo, greaterThan, greaterThanOrEqualTo, notEqualTo (any || function)',
        desc: (
            <span>
                Comparison identifier that can be used only by{' '}
                <Link href="/rules/number">
                    <a className={"inner-link"}> number </a>
                </Link>
                {', '}
                <Link href="/rules/length">
                    <a className={"inner-link"}> length </a>
                </Link>
                {', '}
                <Link href="/rules/list-size">
                    <a className={"inner-link"}> listSize </a>
                </Link>
                {' and '}
                <Link href="/rules/date">
                    <a className={"inner-link"}> date </a>
                </Link>{' '}
                rules.
            </span>
        ),
    },
    {
        label: 'onlyIntegers (boolean)',
        desc: (
            <span>
                Decides whether only integer are allowed that can be used only by{' '}
                <Link href="/rules/number">
                    <a className={"inner-link"}> number </a>
                </Link>{' '}
                rule.
            </span>
        ),
    },
    {
        label: 'withTime (boolean)',
        desc: (
            <span>
                Decides whether hours and minutes are taken into account that can be used only by{' '}
                <Link href="/rules/date">
                    <a className={"inner-link"}> date </a>
                </Link>{' '}
                rule.
            </span>
        ),
    },
    {
        label: (
            <div>
                applyToNulls (boolean){' '}
                <Link href="/customizations/apply-to-nulls">
                    <a className={"inner-link"}> See Example </a>
                </Link>
            </div>
        ),
        desc: 'Decides whether the rule should also be run on null values.',
    },
    {
        label: (
            <div>
                disableIf (func){' '}
                <Link href="/customizations/conditional-rules">
                    <a className={"inner-link"}> See Example </a>
                </Link>
            </div>
        ),
        desc: 'Disables running the rule if the return value of the function is truthy.',
    },
    {
        label: (
            <div>
                enableIf (func){' '}
                <Link href="/customizations/conditional-rules">
                    <a className={"inner-link"}> See Example </a>
                </Link>
            </div>
        ),
        desc: 'Enables running the rule if the return value of the function is truthy.',
    },
    {
        label: (
            <div>
                customMessage (string || func){' '}
                <Link href="/customizations/custom-message">
                    <a className={"inner-link"}> See Example </a>
                </Link>
            </div>
        ),
        desc: 'Function to override default error message for the rule.',
    },
];

const Rule = () => {
    return (
        <ExampleUsageWrapper header="Rule">
            <CodeAccordion code={rulesFormCode} />
            <div className="apiInfoSectionHeader">Rule Definition Parameters</div>
            <ApiInfo apiInfoList={ruleParametersApiInfoList} />
        </ExampleUsageWrapper>
    );
};

export default Rule;
