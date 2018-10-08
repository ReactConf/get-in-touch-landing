import FaLang from "./entries/fa-IR";
import {addLocaleData} from "react-intl";

const AppLocale = {
    fa: FaLang
};
addLocaleData(AppLocale.fa.data);

export default AppLocale;
