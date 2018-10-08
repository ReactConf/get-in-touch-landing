import React from "react";
import {Row, Col} from 'antd';
import styled from "styled-components";
import media from 'components/layouts/Master/MediaQuery';
const HomeBackgroundBox = styled.div`
    with : 100%;
    position: relative;
    padding-bottom: 1em;
    ${media.desktop`
      padding-bottom: 5.5em;
    `};
    ${media.tablet`
      display : none;
    `};
`;
const Bars = styled.div`
    position:absolute;
    bottom : 0;
    left: 0;
     ${media.desktop`
     img{
      max-width:70px;
     }
    `};
`;
const HomeBackground = () => {
    return (
      <HomeBackgroundBox>
        <Row gutter={0} type="flex" justify="end" align="top">
          <Col className="gutter-row"
               xs={{span: 0}}
               sm={{span: 0}}
               md={{span: 18}}
               lg={{span: 16}}
               xl={{span: 14}}
          >
            <img src="/static/image/splash.svg" />
          </Col>
        </Row>
        <Bars><img src="/static/image/bars.svg" /></Bars>
      </HomeBackgroundBox>
    );
}

export default HomeBackground;
