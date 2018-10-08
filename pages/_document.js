import Document, {Head, Main, NextScript} from "next/document";
import flush from "styled-jsx/server";
import {ServerStyleSheet} from "styled-components";
import Helmet from "react-helmet";

export default class Tavanito extends Document {
    static async getInitialProps(...args) {
        const documentProps = await super.getInitialProps(...args);
        const styles = flush();
        return {...documentProps, helmet: Helmet.renderStatic(), styles};
    }

    // should render on <html>
    get helmetHtmlAttrComponents() {
        return this.props.helmet.htmlAttributes.toComponent();
    }

    // should render on <body>
    get helmetBodyAttrComponents() {
        return this.props.helmet.bodyAttributes.toComponent();
    }

    // should render on <head>
    get helmetHeadComponents() {
        return Object.keys(this.props.helmet)
            .filter(el => el !== "htmlAttributes" && el !== "bodyAttributes")
            .map(el => this.props.helmet[el].toComponent());
    }

    get helmetJsx() {
        return (
            <Helmet
                htmlAttributes={{lang: "en", dir: "ltr"}}
                title="ReactConf"
                meta={[
                    {name: "viewport", content: "width=device-width, initial-scale=1"}
                ]}
            />
        );
    }

    render() {
        const sheet = new ServerStyleSheet();
        const main = sheet.collectStyles(<Main/>);
        const styleTags = sheet.getStyleElement();
        return (
            <html {...this.helmetHtmlAttrComponents} >
            <Head>
                {this.helmetJsx}
                {this.helmetHeadComponents}
                <style>{`body { margin: 0 }`}</style>
                {styleTags}
            </Head>
            <body {...this.helmetBodyAttrComponents}>
            {main}
            <NextScript/>
            </body>
            </html>
        );
    }
}
