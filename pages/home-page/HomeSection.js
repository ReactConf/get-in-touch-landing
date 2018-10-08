import React from "react";
import {Row, Col} from 'antd';
import IntlMessages from "components/utility/intlMessages";
import Link from 'next/link';
import styled from "styled-components";
import media from 'components/layouts/Master/MediaQuery';
import SubscribeForm from 'components/SubscribeForm';

const HomeContentBox = styled.div`
    padding: 4em 0 0 0;
    with : 100%;
    ${media.tablet`
      background : #363fa2  url("/static/image/mobilebg.svg") no-repeat center bottom;      
      padding: 2em 5% 9.75em 5%;
    `};
`;

const CityText = styled.span`
    color : #03A9f4;
    font-size: 1.2rem;
    font-family: 'LatoWebMedium';
    display : block;
    with : 100%;
    margin : .4em 0 .4em 0 ;
`;
const Describe = styled.h2`
    color : #03A9f4;
    font-size: 2rem;
    font-family: 'LatoWebBlack';
    display : block;
    with : 100%;
    margin : .3em 0 .15em 0 ;
    ${media.tablet`
      color : #fff !important;
    `};
`;

const HomeSection = () => {
    return (
              <div className="absolute-container">
                <div className="full-container">
                  <Row gutter={0} type="flex" justify="start" align="top">
                    <Col className="gutter-row"
                         xs={{span: 24}}
                         sm={{span: 24}}
                         md={{span: 14}}
                         lg={{span: 10}}
                         xl={{span: 8}}
                    >
                      <HomeContentBox>
                        <Link href='/'>
                          <a>
                            <img src='/static/image/logo.svg'/>
                          </a>
                        </Link>
                        <br/>
                        <CityText><IntlMessages id="logo.tehran"/></CityText>
                        <Describe><IntlMessages id="home.describe"/></Describe>
                      </HomeContentBox>
                    </Col>
                  </Row>
                  <Row gutter={0} type="flex" justify="start" align="top">
                    <Col className="gutter-row"
                         xs={{span: 24}}
                         sm={{span: 24}}
                         md={{span: 14}}
                         lg={{span: 12}}
                         xl={{span: 10}}
                    >
                      <SubscribeForm
                        describe={<IntlMessages id="form.describe"/>}
                        btn={<IntlMessages id="form.btn"/>}
                        inputPlaceholder={<IntlMessages id="form.input"/>}
                      />
                    </Col>
                  </Row>
                </div>
              </div>

    );
}

export default HomeSection;
