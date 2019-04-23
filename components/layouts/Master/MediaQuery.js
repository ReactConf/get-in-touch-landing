import { css } from "styled-components";

const sizes = {
    xDesktop: 1200,
    desktop: 992,
    tablet: 767,
    phone: 575,
    smallPhone: 320,
};

const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (max-width: ${sizes[label] / 16}em) {
            ${css(...args)};
        }
    `;
    return acc;
}, {});

export default media;
