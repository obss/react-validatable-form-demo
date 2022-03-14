import { Switch, Route } from 'react-router-dom';
import { NavSidebar } from './NavSidebar';
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
import ExamplePureUsage from './examples/ExamplePureUsage';
import ExampleMuiUsage from './examples/ExampleMuiUsage';
import ExamplePrimeReact from './examples/ExamplePrimeReact';
import ExampleReactBootstrap from './examples/ExampleReactBootstrap';
import ExampleSetFormData from './examples/ExampleSetFormData';
import ExampleSetPathValue from './examples/ExampleSetPathValue';
import ExampleSetFormDataAndRules from './examples/ExampleSetFormDataAndRules';
import ExampleFormData from './examples/ExampleFormData';
import ApiUseValidatableForm from './api/ApiUseValidatableForm';
import ApiReactValidatableFormProvider from './api/ApiReactValidatableFormProvider';
import ApiRules from './api/ApiRules';
import ApiRule from './api/ApiRule';
import ApiPath from './api/ApiPath';
import ExampleValidationError from './examples/ExampleValidationError';
import ExampleSetRules from './examples/ExampleSetRules';
import ExampleUnsetPathValue from './examples/ExampleUnsetPathValue';
import ExampleValidationErrorOriginalResult from './examples/ExampleValidationErrorOriginalResult';
import ExampleUnsetPathIsBlurred from './examples/ExampleUnsetPathIsBlurred';
import RuleIncludes from './rules/RuleIncludes';
import Home from './getting-started/Home';
import ExampleAntUsage from './examples/ExampleAntUsage';
import '../App.css';
import ExampleReactNativeUsage from './examples/ExampleReactNativeUsage';

const Routes = (props) => {
    return (
        <>
            <NavSidebar toggleDrawer={props.toggleDrawer} menuIsHidden={props.menuIsHidden} />
            <div className="generalDiv" onClick={props.onOutsideClick}>
                <Switch>
                    <Route exact path="/getting-started/home">
                        <Home />
                    </Route>
                    <Route exact path="/getting-started/installation">
                        <Installation />
                    </Route>
                    <Route exact path="/getting-started/usage">
                        <Usage openSettingsDialog={props.openSettingsDialog} />
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
                    <Route exact path="/rules/includes">
                        <RuleIncludes />
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
                    <Route exact path="/examples/antd">
                        <ExampleAntUsage />
                    </Route>
                    <Route exact path="/examples/prime-react">
                        <ExamplePrimeReact />
                    </Route>
                    <Route exact path="/examples/react-bootstrap">
                        <ExampleReactBootstrap />
                    </Route>
                    <Route exact path="/examples/react-native">
                        <ExampleReactNativeUsage />
                    </Route>
                    <Route exact path="/examples/set-form-data">
                        <ExampleSetFormData />
                    </Route>
                    <Route exact path="/examples/set-path-value">
                        <ExampleSetPathValue />
                    </Route>
                    <Route exact path="/examples/unset-path-value">
                        <ExampleUnsetPathValue />
                    </Route>
                    <Route exact path="/examples/set-rules">
                        <ExampleSetRules />
                    </Route>
                    <Route exact path="/examples/set-form-data-and-rules">
                        <ExampleSetFormDataAndRules />
                    </Route>
                    <Route exact path="/examples/form-data">
                        <ExampleFormData />
                    </Route>
                    <Route exact path="/examples/validation-error">
                        <ExampleValidationError />
                    </Route>
                    <Route exact path="/examples/validation-error-original-result">
                        <ExampleValidationErrorOriginalResult />
                    </Route>
                    <Route exact path="/examples/unset-path-is-blurred">
                        <ExampleUnsetPathIsBlurred />
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
        </>
    );
};

export default Routes;
