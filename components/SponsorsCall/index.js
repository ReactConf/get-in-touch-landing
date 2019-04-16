import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Button from 'antd/lib/button';
import animType from 'rc-texty/lib/animTypes';
import IntlMessages from '../utility/intlMessages';
import media from '../layouts/Master/MediaQuery';

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

const SponsorsCall = ({items}) => {
    return (
            <Row type="flex" justify="center">
                <Col xs={24} sm={25} md={12} lg={12} xl={12} style={{alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <h2>{items.title} </h2>
                    <p> {items.desc}</p>
                    <ModalButton>
                        <Button
                            type="primary"
                            onClick={() => this.setModalVisible(true)}
                        >
                            Become Sponsor
                        </Button>
                    </ModalButton>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{marginBottom: 20}}>
                    <img src={items.image} alt={items.title}/>
                </Col>
            </Row>
    )
};
SponsorsCall.propTypes = {
    items: PropTypes.array.isRequired,
};
export default SponsorsCall;
