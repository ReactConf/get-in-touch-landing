import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Button from "antd/lib/button";
import animType from "rc-texty/lib/animTypes";
import IntlMessages from "../utility/intlMessages";
import media from "../layouts/Master/MediaQuery";
import PaperCard from "../PaperCard";
import configs from "../../configs";
import PageSection from "../PageSection";

const Img = styled.img`
    max-width: 320px;
`;
const ModalButton = styled.div`
    .ant-btn {
        font-size: 1rem;
    }
    .ant-btn-primary {
        padding: 0 1.5em;
        ${media.tablet`
        padding: 0 2.5em;
    `};
        border-radius: 1.6em;
        height: 48px;
        line-height: 48px;
        border: none;
        background: rgb(132, 104, 245);
        background: -moz-linear-gradient(
            -45deg,
            rgb(132, 104, 245) 0%,
            rgb(236, 116, 231) 100%
        );
        background: -webkit-linear-gradient(
            -45deg,
            rgba(132, 104, 245) 0%,
            rgb(236, 116, 231) 100%
        );
        background: linear-gradient(
            135deg,
            rgba(132, 104, 245) 0%,
            rgb(236, 116, 231) 100%
        );
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#8468f5', endColorstr='#ec74e7',GradientType=1 );
        &:focus,
        &:hover {
            background: rgb(132, 104, 245);
            background: -moz-linear-gradient(
                -45deg,
                rgb(132, 104, 245) 0%,
                rgb(236, 116, 231) 100%
            );
            background: -webkit-linear-gradient(
                -45deg,
                rgba(132, 104, 245) 0%,
                rgb(236, 116, 231) 100%
            );
            background: linear-gradient(
                135deg,
                rgba(132, 104, 245) 0%,
                rgb(236, 116, 231) 100%
            );
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#8468f5', endColorstr='#ec74e7',GradientType=1 );
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
        }
    }
`;

const SponsorsCall = ({ items }) => {
    return (
        <Row type="flex" justify="center" align="middle">
            <Col xs={24} sm={24} md={16} lg={8} xl={8}>
                <PaperCard
                    title="sponsor.title"
                    body="sponsor.body"
                    btn="sponsor.btn"
                    btnlink={`mailto:${configs.email}`}
                />
            </Col>
        </Row>
    );
};
SponsorsCall.propTypes = {
    items: PropTypes.array.isRequired,
};
export default SponsorsCall;
