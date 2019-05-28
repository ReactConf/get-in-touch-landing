import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import SocialIcons from "../SocialIcons";

const Link = styled.a`
    display: block;
    transition: opacity 0.26s ease-in-out;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Image = styled.img`
    display: block;
    margin: 0 auto;
    max-width: 80%;
    max-height: 200px;
    width: 90%;
    // filter: grayscale(100%);
    // fill: black;
    -webkit-transition: all 0.5s ease-in-out;
    &:hover {
        filter: none;
        -webkit-filter: grayscale(0%);
    }
`;

function renderFarm(items) {
    return items.map((item, index) => {
        return (
            <Col
                xs={12}
                sm={12}
                md={6}
                lg={5}
                xl={4}
                key={index}
                style={{ marginBottom: 20 }}
            >
                <Link target="_blank" href={item.url} key={index}>
                    <Image src={item.image} alt={item.name} />
                </Link>
            </Col>
        );
    });
}

const Sponsors = ({ items }) => {
    return (
        <Row type="flex" justify="center">
            {renderFarm(items)}
        </Row>
    );
};
Sponsors.propTypes = {
    items: PropTypes.array.isRequired,
};
export default Sponsors;
