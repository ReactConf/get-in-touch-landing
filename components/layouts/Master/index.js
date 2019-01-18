import React, { Component, Fragment } from "react";
import { IntlProvider } from "react-intl";
import AppLocale from "languageProvider";
import "./injectGlobal";
import antStyle from "./style.less";
import FooterLayout from "../Footer";
import { language } from "config";

class MasterLayout extends Component {
    render() {
        const currentAppLocale = AppLocale[language];
        return (
            <Fragment>
                <style dangerouslySetInnerHTML={{ __html: antStyle }} />
                <IntlProvider
                    locale={language}
                    messages={currentAppLocale.messages}
                >
                    <div id="reactconf">
                        {this.props.children}
                        <FooterLayout id="footer" />
                    </div>
                </IntlProvider>
            </Fragment>
        );
    }
}

export default MasterLayout;
