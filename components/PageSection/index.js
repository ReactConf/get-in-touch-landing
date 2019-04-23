import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import IntlMessages from "components/utility/intlMessages";
import styled from "styled-components";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import media from "components/layouts/Master/MediaQuery";

const Page = styled.div`
    text-align: center;
    background: ${({ background }) => background};
    width: 100%;
    padding: ${({ padding }) => padding + "rem 0"};
               ${media.phone`
         padding: 1rem 0;
  `};
`;
const PageHeading = styled.h2`
    font-family: "LatoWebMedium";
    font-size: 1.7rem;
    text-transform: uppercase;
    text-align: center;
    margin: 0 0 2rem 0;
`;

class PageSection extends Component {
    render() {
        const { title, size, bg, children, id } = this.props;
        return (
            <Fragment>
                <Page padding={size} background={bg} id={id}>
                    <div className="container">
                        <Row type="flex" justify="center">
                            <Col span={24}>
                                <PageHeading>
                                    <IntlMessages id={title} />
                                </PageHeading>
                            </Col>
                        </Row>
                        {children}
                    </div>
                </Page>
            </Fragment>
        );
    }
}
PageSection.propTypes = {
    title: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    bg: PropTypes.string.isRequired,
    id: PropTypes.string,
};
export default PageSection;
