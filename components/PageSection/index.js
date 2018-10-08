import React, { Component, Fragment } from "react";
import styled from "styled-components";
import media from 'components/layouts/Master/MediaQuery'
import {Row, Col} from 'antd';

const Page = styled.div`
    text-align: center;
    background : ${({ background }) => background };
    width: 100%;
    padding:${({ padding }) => padding + 'rem 0'};
`;
const PageHeading = styled.h2`
      font-family: 'LatoWebMedium';
      font-size: 1.7rem;
      text-transform: uppercase ;
      text-align: center;
      margin:0 0 2rem 0;
`;
class PageSection extends Component {
  render() {
    const {title,size,bg,children}=this.props;
    return (
      <section>
        <Page padding={size} background={bg}>
          <div className="container">
            <Row  type="flex" justify="center">
              <Col span={24}>
                <PageHeading>{title}</PageHeading>
              </Col>
            </Row>
            {children}
          </div>
        </Page>
      </section>
    )
  }
}
export default PageSection;
