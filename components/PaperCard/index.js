import React, { Fragment } from "react";
import PropTypes from "prop-types";
import IntlMessages from "components/utility/intlMessages";
import styled from "styled-components";
import {Icon} from 'antd';
import media from "components/layouts/Master/MediaQuery";

const CardTitle = styled.h4`
    font-size: 1.4rem;
    text-align: center;
`;
const CardParagraph = styled.p`
    font-size: 0.95rem;
    color: #8591b0;
`;
const CardFace = styled.div`
    text-align: center;
    padding: 0 4.6rem;
    border-radius: 0.5rem;
    background: rgba(255, 255, 255, 1);
    width: 100%;
    margin: 4rem auto;
    box-shadow: 0 2rem 50px rgba(50, 60, 90, 0.13);
    position: relative;
    z-index: 11;
    &::before {
        content: " ";
        display: block;
        background: rgba(255, 255, 255, 1);
        border-radius: 0.5rem;
        position: absolute;
        left: 1.7rem;
        top: -0.7rem;
        width: calc(100% - 3.4rem);
        height: calc(100% + 1.4rem);
        z-index: -1;
        box-shadow: 0 2rem 50px rgba(50, 60, 90, 0.13);
    }
    &::after {
        content: " ";
        display: block;
        background: rgba(255, 255, 255, 1);
        border-radius: 0.5rem;
        position: absolute;
        left: 3rem;
        top: -2rem;
        width: calc(100% - 6rem);
        height: calc(100% + 4rem);
        z-index: -1;
        box-shadow: 0 2rem 50px rgba(50, 60, 90, 0.13);
    }
    ${media.smallPhone`
        background: transparent;
        box-shadow: none;
         padding: 0 0rem;
   &::before {
        background: transparent;
        box-shadow: none;
    }
     &::after {
        background: transparent;
        box-shadow: none;
    }
  `};
`;

const PaperCard = ({ title, body, btn, btnlink, withSample }) => {
    return (
        <Fragment>
            <CardFace>
                <CardTitle>
                    <Icon type="bulb" />
                    <br/>
                    <IntlMessages id={title} />
                </CardTitle>
                <CardParagraph>
                    <IntlMessages id={body} />
                </CardParagraph>
                <a
                    target="_blank"
                    href={btnlink}
                    className="ant-btn ant-btn-lg ant-btn-primary"
                >
                    <IntlMessages id={btn} />
                </a>
                {withSample ?
                    <Fragment>
                        <br />
                        <br />
                        <a
                            target="_blank"
                            href="https://docs.google.com/document/d/1Obnipcy4l8_uPEfLB6jS-v0ND3JycxAnoSfOE1GocQQ"
                            className="ant-btn  ant-btn-lg "
                        >
                            <i className="fas fa-download" />{" "}
                            <span>
                        {" "}
                                <IntlMessages id="btnDlTemplate" />
                    </span>
                        </a>
                    </Fragment> : <Fragment/>}
            </CardFace>
        </Fragment>
    );
};
PaperCard.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    btnlink: PropTypes.string.isRequired,
    btn: PropTypes.string.isRequired,
};
export default PaperCard;
