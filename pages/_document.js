import Document, { Head, Main, NextScript } from "next/document";
import flush from "styled-jsx/server";
import { ServerStyleSheet } from "styled-components";
import Helmet from "react-helmet";
import config from 'config';

export default class ReactConf extends Document {
    static async getInitialProps(...args) {
        const documentProps = await super.getInitialProps(...args);
        const styles = flush();
        return { ...documentProps, helmet: Helmet.renderStatic(), styles };
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
                htmlAttributes={{ lang: "en", dir: "ltr" }}
                title="ReactConf"
                meta={[
                    { name: "viewport", content: "width=device-width, initial-scale=1" }
                ]}
            />
        );
    }

    render() {
        const sheet = new ServerStyleSheet();
        const main = sheet.collectStyles(<Main />);
        const styleTags = sheet.getStyleElement();
        return (
            <html {...this.helmetHtmlAttrComponents}>
            <Head>
                {this.helmetHeadComponents}
                <script dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer',${config.analyticsKey});`}} />
                <noscript
                    dangerouslySetInnerHTML={{__html: `
                        <iframe
                            src="https://www.googletagmanager.com/ns.html?id=${config.analyticsKey}"
                            height="0"
                            width="0"
                            style={{display:'none",visibility:"hidden"}}
                        >
                        </iframe>
                    `}} />
                <style>{`body { margin: 0 }`}</style>
                <link rel="stylesheet" href="/static/css/font-awesome.css" />
                <link rel="shortcut icon" href="/static/image/icon/favicon.ico" type="image/x-icon" />
                <meta charset="utf-8"/>
                <title>ReactConf 2019 | Javascript & ReactJS Conference</title>
                <meta name="robots" content="index, follow"/>
                <meta name="description" content="First Javascript & ReactJS Conference in IRAN, Algorithm, Data Structure,ReactJS,NodeJS,Graphql and etc…"/>
                <meta name="image" content="/static/image/icon/apple-touch-icon.png"/>
                <meta itemprop="name" content="React Conf | Javascript & ReactJS Conference"/>
                <meta itemprop="description" content="First Javascript & ReactJS Conference in IRAN, Algorithm, Data Structure,ReactJS,NodeJS,Graphql and etc…"/>
                <meta itemprop="image" content="/static/image/icon/apple-touch-icon.png"/>
                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:title" content="React Conf | Javascript & ReactJS Conference"/>
                <meta name="twitter:description" content="First Javascript & ReactJS Conference in IRAN, Algorithm, Data Structure,ReactJS,NodeJS,Graphql and etc…"/>
                <meta name="twitter:site" content="@reactconf_ir"/>
                <meta name="twitter:image:src" content="/static/image/icon/apple-touch-icon.png"/>
                <meta name="og:title" content="React Conf | Javascript & ReactJS Conference"/>
                <meta name="og:description" content="First Javascript & ReactJS Conference in IRAN, Algorithm, Data Structure,ReactJS,NodeJS,Graphql and etc…"/>
                <meta name="og:image" content="/static/image/icon/apple-touch-icon.png"/>
                <meta name="og:url" content="http://reactconf.ir"/>
                <meta name="og:site_name" content="React Conf | Javascript & ReactJS Conference"/>
                <meta name="og:locale" content="en_US"/>
                <meta name="og:type" content="website"/>
                <link rel="apple-touch-icon" href="/static/image/icon/apple-touch-icon.png" />
                <link rel="apple-touch-icon" sizes="57x57" href="/static/image/icon/apple-touch-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="/static/image/icon/apple-touch-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="/static/image/icon/apple-touch-icon-76x76.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="/static/image/icon/apple-touch-icon-114x114.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="/static/image/icon/apple-touch-icon-120x120.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="/static/image/icon/apple-touch-icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="/static/image/icon/apple-touch-icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/static/image/icon/apple-touch-icon-180x180.png" />
                {styleTags}
            </Head>
            <body {...this.helmetBodyAttrComponents}>
            {main}
            <NextScript />
            </body>
            </html>
        );
    }
}
