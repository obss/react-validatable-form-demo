import { HashRouter, Switch, Route } from 'react-router-dom';
import { NavSidebar } from './NavSidebar';
import ExamplePureUsage from './examples/ExamplePureUsage';
import ExampleMuiUsage from './examples/ExampleMuiUsage';
import Homepage from './Homepage';
import RuleRequired from './rules/RuleRequired';
import RuleNumber from './rules/RuleNumber';
import RuleLength from './rules/RuleLength';
import RuleListSize from './rules/RuleListSize';
import RuleDate from './rules/RuleDate';
import RuleEmail from './rules/RuleEmail';
import RuleUrl from './rules/RuleUrl';
import RuleIban from './rules/RuleIban';
import RuleCustomOnHook from './rules/RuleCustomOnHook';
import RuleCustomOnProvider from './rules/RuleCustomOnProvider';
import AdvancedHideBeforeSubmit from './advanced/AdvancedHideBeforeSubmit';
import AdvancedShowAfterBlur from './advanced/AdvancedShowAfterBlur';
import AdvancedFocusToErrorAfterSubmit from './advanced/AdvancedFocusToErrorAfterSubmit';
import CustomMessage from './customizations/CustomMessage';
import CustomTranslations from './customizations/CustomTranslations';
import AdvancedValidateComplexForms from './advanced/AdvancedValidateComplexForms';
import AdvancedValidateLists from './advanced/AdvancedValidateLists';
import CustomConditionalRules from './customizations/CustomConditionalRules';
import RuleRegex from './rules/RuleRegex';
import AdvancedFocusToErrorOnListAfterSubmit from './advanced/AdvancedFocusToErrorOnListAfterSubmit';
import AdvancedValidateListOfObjects from './advanced/AdvancedValidateListOfObjects';
import Installation from './getting-started/Installation';
import Usage from './getting-started/Usage';
import CustomApplyToNulls from './customizations/CustomApplyToNulls';
import CustomElementFocusHandler from './customizations/CustomElementFocusHandler';
import RuleUnique from './rules/RuleUnique';
import RuleEquality from './rules/RuleEquality';
import ExamplePrimeReact from './examples/ExamplePrimeReact';
import ExampleReactBootstrap from './examples/ExampleReactBootstrap';
import ApiUseValidatableForm from './api/ApiUseValidatableForm';
import ApiReactValidatableFormProvider from './api/ApiReactValidatableFormProvider';
import ApiRules from './api/ApiRules';
import ApiRule from './api/ApiRule';
import Settings from './Settings';
import ApiPath from './api/ApiPath';

const Routes = (props) => {
    return (
        <HashRouter>
            <NavSidebar menuIsHidden={props.menuIsHidden} />
            <div>
                <Settings openSettingsDialog={props.openSettingsDialog} />
                <Switch>
                    <Route exact path="/getting-started/installation">
                        <Installation />
                    </Route>
                    <Route exact path="/getting-started/usage">
                        <Usage />
                    </Route>
                    <Route exact path="/rules/required">
                        <RuleRequired />
                    </Route>
                    <Route exact path="/rules/number">
                        <RuleNumber />
                    </Route>
                    <Route exact path="/rules/length">
                        <RuleLength />
                    </Route>
                    <Route exact path="/rules/list-size">
                        <RuleListSize />
                    </Route>
                    <Route exact path="/rules/date">
                        <RuleDate />
                    </Route>
                    <Route exact path="/rules/email">
                        <RuleEmail />
                    </Route>
                    <Route exact path="/rules/url">
                        <RuleUrl />
                    </Route>
                    <Route exact path="/rules/iban">
                        <RuleIban />
                    </Route>
                    <Route exact path="/rules/equality">
                        <RuleEquality />
                    </Route>
                    <Route exact path="/rules/regex">
                        <RuleRegex />
                    </Route>
                    <Route exact path="/rules/unique">
                        <RuleUnique />
                    </Route>
                    <Route exact path="/rules/custom-on-hook">
                        <RuleCustomOnHook />
                    </Route>
                    <Route exact path="/rules/custom-on-provider">
                        <RuleCustomOnProvider />
                    </Route>
                    <Route exact path="/advanced/validate-lists">
                        <AdvancedValidateLists />
                    </Route>
                    <Route exact path="/advanced/hide-before-submit">
                        <AdvancedHideBeforeSubmit />
                    </Route>
                    <Route exact path="/advanced/show-after-blur">
                        <AdvancedShowAfterBlur />
                    </Route>
                    <Route exact path="/advanced/focus-to-error-after-submit">
                        <AdvancedFocusToErrorAfterSubmit />
                    </Route>
                    <Route exact path="/advanced/focus-to-error-on-list-after-submit">
                        <AdvancedFocusToErrorOnListAfterSubmit />
                    </Route>
                    <Route exact path="/advanced/validate-list-of-objects">
                        <AdvancedValidateListOfObjects />
                    </Route>
                    <Route exact path="/advanced/validate-complex-forms">
                        <AdvancedValidateComplexForms />
                    </Route>
                    <Route exact path="/customizations/custom-message">
                        <CustomMessage />
                    </Route>
                    <Route exact path="/customizations/translations">
                        <CustomTranslations />
                    </Route>
                    <Route exact path="/customizations/conditional-rules">
                        <CustomConditionalRules />
                    </Route>
                    <Route exact path="/customizations/apply-to-nulls">
                        <CustomApplyToNulls />
                    </Route>
                    <Route exact path="/customizations/custom-element-focus-handler">
                        <CustomElementFocusHandler />
                    </Route>
                    <Route exact path="/examples/pure">
                        <ExamplePureUsage />
                    </Route>
                    <Route exact path="/examples/mui">
                        <ExampleMuiUsage />
                    </Route>
                    <Route exact path="/examples/prime-react">
                        <ExamplePrimeReact />
                    </Route>
                    <Route exact path="/examples/react-bootstrap">
                        <ExampleReactBootstrap />
                    </Route>
                    <Route exact path="/api/react-validatable-form-provider">
                        <ApiReactValidatableFormProvider openSettingsDialog={props.openSettingsDialog} />
                    </Route>
                    <Route exact path="/api/use-validatable-form">
                        <ApiUseValidatableForm />
                    </Route>
                    <Route exact path="/api/rules">
                        <ApiRules />
                    </Route>
                    <Route exact path="/api/rule">
                        <ApiRule />
                    </Route>
                    <Route exact path="/api/path">
                        <ApiPath />
                    </Route>
                    <Route exact path="/">
                        <Homepage />
                    </Route>
                </Switch>
            </div>
        </HashRouter>
    );
};

export default Routes;
