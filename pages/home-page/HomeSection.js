import React, { Component } from "react";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import IntlMessages from "components/utility/intlMessages";
import Link from "next/link";
import styled from "styled-components";
import media from "components/layouts/Master/MediaQuery";
import SubscribeForm from "components/SubscribeForm";

const HomeContentBox = styled.div`
  padding: 4em 0 0 0;
  width: 100%;
  ${media.tablet`
      background : #363fa2  url("/static/image/mobilebg.svg") no-repeat center bottom;      
      padding: 2em 5% 9.75em 5%;
    `};
`;

const CityText = styled.span`
  color: #03a9f4;
  font-size: 1.2rem;
  font-family: "LatoWebMedium";
  display: block;
  width: 100%;
  margin: 0.4em 0 0.4em 0;
`;
const Describe = styled.h2`
  color: #03a9f4;
  font-size: 2rem;
  font-family: "LatoWebBlack";
  display: block;
  width: 100%;
  margin: 0.3em 0 0.15em 0;
  ${media.tablet`
      color : #fff !important;
    `};
`;

class HomeSection extends Component {
  render() {
    return (
      <div className="absolute-container">
        <div className="full-container">
          <Row gutter={0} type="flex" justify="start" align="top">
            <Col
              className="gutter-row"
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 14 }}
              lg={{ span: 10 }}
              xl={{ span: 8 }}
            >
              <HomeContentBox>
                <Link href="/">
                  <a rel="noopener noreferrer">
                    <img src="/static/image/logo.svg" />
                  </a>
                </Link>
                <br />
                <CityText>
                  <IntlMessages id="logo.tehran" />
                </CityText>
                <Describe>
                  <IntlMessages id="home.describe" />
                </Describe>
              </HomeContentBox>
            </Col>
          </Row>
          <Row gutter={0} type="flex" justify="start" align="top" style={{marginTop: '20px'}}>
            <Col
              className="gutter-row"
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 14 }}
              lg={{ span: 12 }}
              xl={{ span: 10 }}
            >
              <SubscribeForm
                describe="form.describe"
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default HomeSection;
