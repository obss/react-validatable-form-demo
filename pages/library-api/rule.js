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
                <Link href="/rules/custom-on-hook" className={'inner-link'}>
                    custom function
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
                <Link href="/rules/number" className={'inner-link'}>
                    number
                </Link>
                {', '}
                <Link href="/rules/length" className={'inner-link'}>
                    length
                </Link>
                {', '}
                <Link href="/rules/list-size" className={'inner-link'}>
                    listSize
                </Link>
                {' and '}
                <Link href="/rules/date" className={'inner-link'}>
                    date
                </Link>{' '}
                rules.
            </span>
        ),
    },
    {
        label: (
            <div>
                equalTo{' '}
                <Link href="/rules/equality" className={'inner-link'}>
                    See Example
                </Link>
            </div>
        ),
        desc: (
            <span>
                The equality identifier that can be used with the{' '}
                <Link href={'/rules/equality'} className={'inner-link'}>
                    equality
                </Link>{' '}
                rule.
            </span>
        ),
    },
    {
        label: (
            <div>
                isOneOf{' '}
                <Link href="/rules/equality" className={'inner-link'}>
                    See Example
                </Link>
            </div>
        ),
        desc: (
            <span>
                Checking that it is included in the list available with the{' '}
                <Link href={'/rules/equality'} className={'inner-link'}>
                    equality
                </Link>{' '}
                rule
            </span>
        ),
    },
    {
        label: 'onlyIntegers (boolean)',
        desc: (
            <span>
                Decides whether only integer are allowed that can be used only by{' '}
                <Link href="/rules/number" className={'inner-link'}>
                    number
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
                <Link href="/rules/date" className={'inner-link'}>
                    date
                </Link>{' '}
                rule.
            </span>
        ),
    },
    {
        label: (
            <div>
                applyToNulls (boolean){' '}
                <Link href="/customizations/apply-to-nulls" className={'inner-link'}>
                    See Example
                </Link>
            </div>
        ),
        desc: 'Decides whether the rule should also be run on null values.',
    },
    {
        label: (
            <div>
                disableIf (func){' '}
                <Link href="/customizations/conditional-rules" className={'inner-link'}>
                    See Example
                </Link>
            </div>
        ),
        desc: 'Disables running the rule if the return value of the function is truthy.',
    },
    {
        label: (
            <div>
                enableIf (func){' '}
                <Link href="/customizations/conditional-rules" className={'inner-link'}>
                    See Example
                </Link>
            </div>
        ),
        desc: 'Enables running the rule if the return value of the function is truthy.',
    },
    {
        label: (
            <div>
                customMessage (string || func){' '}
                <Link href="/customizations/custom-message" className={'inner-link'}>
                    See Example
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
