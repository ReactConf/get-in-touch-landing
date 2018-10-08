import { injectGlobal } from "styled-components";
import media from "./MediaQuery";

injectGlobal`
html {
  font-size: 1rem;
}
body {
  font-family: 'LatoWeb',Arial,Tahoma !important;
  overflow-x: hidden;
  font-size: 1rem;
  line-height: 1.5;
  color: #666 !important;
}
a{
  color: #3b56b5;
  text-decoration: none !important;
  &:hover{
    color: #111;
  }
}
a.ant-btn-dashed {
    color: rgba(0, 0, 0, 0.65) !important;
    &:hover{
        color: #40a9ff !important;
     }
}
h1,h2{
  color: #323c5a !important;
}
h3,h4{
  color: #82848d !important;
}
h1,h2,h3,h4{
  color: #323c5a !important;
  width : 100%;
  line-height: 1.4;
}
p {
  font-size:1.2rem;
}
img {
  max-width: 100%;
}
.wrapper {
  width: 100%;
}
.wrapper-holder {
  margin: 0 10px;
}
.container {
    width: 100%;
    max-width: 1200px;
    margin: auto;
    position: relative;
    padding: 0 24px;
}
.full-container {
    width: 90%;
    margin:0 auto;
    max-width: 1400px;
    ${media.tablet`
        width: 100%;
    `};
}
.absolute-container {
    position: absolute;
    width: 100%;
    left: 0;
    top : 0;
    z-index: 999;
    ${media.tablet`
      position: relative;
    `};
}
.ant-row-flex {
    width: 100%;
    display: flex;
    flexFlow: row wrap;
}
.section {
width: 100%;
    margin: auto;
    overflow: hidden;
}

ul , li {
padding: 0;
}

.center {
text-align: center;
}



}
.ant-drawer-body {
    margin-top: 0 !important;
   font-size: 1rem  !important;
}
${media.desktop`
    .wrapper {
        width: 100%;
        padding: 0 5px;
    }
`}
.ant-menu-inline, .ant-menu-vertical, .ant-menu-vertical-left {
    border-right: none !important;
    text-align:right;
}

/* Webfont: Lato-Black */@font-face {
    font-family: 'LatoWebBlack';
    src: url('/static/fonts/lato/Lato-Black.eot'); /* IE9 Compat Modes */
    src: url('/static/fonts/lato/Lato-Black.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('/static/fonts/lato/Lato-Black.woff2') format('woff2'), /* Modern Browsers */
         url('/static/fonts/lato/Lato-Black.woff') format('woff'), /* Modern Browsers */
         url('/static/fonts/lato/Lato-Black.ttf') format('truetype');
    font-style: normal;
    font-weight: normal;
    text-rendering: optimizeLegibility;
}
/* Webfont: Lato-Medium */@font-face {
    font-family: 'LatoWebMedium';
    src: url('/static/fonts/lato/Lato-Medium.eot'); /* IE9 Compat Modes */
    src: url('/static/fonts/lato/Lato-Medium.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('/static/fonts/lato/Lato-Medium.woff2') format('woff2'), /* Modern Browsers */
         url('/static/fonts/lato/Lato-Medium.woff') format('woff'), /* Modern Browsers */
         url('/static/fonts/lato/Lato-Medium.ttf') format('truetype');
    font-style: normal;
    font-weight: normal;
    text-rendering: optimizeLegibility;
}
/* Webfont: Lato-Regular */@font-face {
    font-family: 'LatoWeb';
    src: url('/static/fonts/lato/Lato-Regular.eot'); /* IE9 Compat Modes */
    src: url('/static/fonts/lato/Lato-Regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('/static/fonts/lato/Lato-Regular.woff2') format('woff2'), /* Modern Browsers */
         url('/static/fonts/lato/Lato-Regular.woff') format('woff'), /* Modern Browsers */
         url('/static/fonts/lato/Lato-Regular.ttf') format('truetype');
    font-style: normal;
    font-weight: normal;
    text-rendering: optimizeLegibility;
}

@font-face {
    font-family: "Font Awesome 5 Brands";
    font-style: normal;
    font-weight: normal;
    src: url(/static/fonts/fontawesome/fa-brands-400.eot);
    src: url(/static/fonts/fontawesome/fa-brands-400.eot?#iefix) format("embedded-opentype"), url(/static/fonts/fontawesome/fa-brands-400.woff2) format("woff2"), url(/static/fonts/fontawesome/fa-brands-400.woff) format("woff"), url(/static/fonts/fontawesome/fa-brands-400.ttf) format("truetype"), url(/static/fonts/fontawesome/fa-brands-400.svg#fontawesome) format("svg")
}

.fab {
    font-family: "Font Awesome 5 Brands"
}

@font-face {
    font-family: "Font Awesome 5 Free";
    font-style: normal;
    font-weight: 400;
    src: url(/static/fonts/fontawesome/fa-regular-400.eot);
    src: url(/static/fonts/fontawesome/fa-regular-400.eot?#iefix) format("embedded-opentype"), url(/static/fonts/fontawesome/fa-regular-400.woff2) format("woff2"), url(/static/fonts/fontawesome/fa-regular-400.woff) format("woff"), url(/static/fonts/fontawesome/fa-regular-400.ttf) format("truetype"), url(/static/fonts/fontawesome/fa-regular-400.svg#fontawesome) format("svg")
}

.far {
    font-weight: 400
}

@font-face {
    font-family: "Font Awesome 5 Free";
    font-style: normal;
    font-weight: 900;
    src: url(/static/fonts/fontawesome/fa-solid-900.eot);
    src: url(/static/fonts/fontawesome/fa-solid-900.eot?#iefix) format("embedded-opentype"), url(/static/fonts/fontawesome/fa-solid-900.woff2) format("woff2"), url(/static/fonts/fontawesome/fa-solid-900.woff) format("woff"), url(/static/fonts/fontawesome/fa-solid-900.ttf) format("truetype"), url(/static/fonts/fontawesome/fa-solid-900.svg#fontawesome) format("svg")
}

.fa, .far, .fas {
    font-family: "Font Awesome 5 Free"
}

.fa, .fas {
    font-weight: 900
}
`;
