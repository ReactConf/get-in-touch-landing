import React, { Fragment } from "react";
import IntlMessages from "helpers/intlMessages";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import MainMenu from "../main-menu";
import styled from "styled-components";

const HeaderStyle = styled.div`
  position: absolute;
  z-index: 99;
  width: 100%;
  transition: border 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955),
    background 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  height: 70px;
`;
const HeaderWrapper = styled.div`
  padding: 2em;
`;

const MenuItems = [
  {
    url: "#home",
    text: <IntlMessages id="topmenu.home" />,
    type: "internal"
  },
  // {
  //   url: "#sponsors",
  //   text: <IntlMessages id="topmenu.sponsors" />,
  //   type: "internal"
  // },
  {
    url: "#speaker",
    text: <IntlMessages id="topmenu.speaker" />,
    type: "internal"
  },
  {
    url: "#team",
    text: <IntlMessages id="topmenu.team" />,
    type: "internal"
  },
  {
    url: "#contact",
    text: <IntlMessages id="topmenu.contact" />,
    type: "internal"
  }
];
const HeaderItems = () => {
  return (
    <Fragment>
      <Row gutter={0} type="flex" justify="center" align="middle" id="home">
        <Col span={24}>
          <HeaderStyle>
            <HeaderWrapper>
              <Row gutter={0} type="flex" justify="end" align="top">
                <Col className="gutter-row" span={24}>
                  <MainMenu items={MenuItems} />
                </Col>
              </Row>
            </HeaderWrapper>
          </HeaderStyle>
        </Col>
      </Row>
    </Fragment>
  );
};

export default HeaderItems;
