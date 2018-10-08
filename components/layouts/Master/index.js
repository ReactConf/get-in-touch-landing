import React, {Component, Fragment} from "react";
import {IntlProvider} from "react-intl";
import AppLocale from "../../../languageProvider";
import "./injectGlobal";
import antStyle from './style.less';
import FooterLayout from "../Footer";

class MasterLayout extends Component {
    render() {
        const currentAppLocale = AppLocale["fa"];
        return (
            <Fragment>
                <style dangerouslySetInnerHTML={{__html: antStyle}}/>
                <IntlProvider locale={"fa"}  messages={currentAppLocale.messages} >
                    <div id='reactconf'>
                      {this.props.children}
                      <FooterLayout/>
                    </div>
                </IntlProvider>
            </Fragment>
        );
    }
}

export default MasterLayout;
