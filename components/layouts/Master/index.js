import React, { Fragment } from "react";
import { IntlProvider } from "react-intl";
import AppLocale from "languageProvider";
import "./injectGlobal";
import antStyle from "./style.less";
import FooterLayout from "../Footer";
import {language} from 'config';

const MasterLayout = (props) => {
	const { children } = props;
    const currentAppLocale = AppLocale[language];
    return (
      <Fragment>
        <style dangerouslySetInnerHTML={{ __html: antStyle }} />
        <IntlProvider locale={language} messages={currentAppLocale.messages}>
          <div id="reactconf">
            {children}
            <FooterLayout id="footer" />
          </div>
        </IntlProvider>
      </Fragment>
    );
}

export default MasterLayout;
