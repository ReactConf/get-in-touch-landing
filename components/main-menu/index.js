import React, { Component } from "react";
import PropTypes from 'prop-types';
import Menu from "antd/lib/menu";
import Anchor from "antd/lib/anchor";
import Link from "next/link";
import IntlMessages from "helpers/intlMessages";
import styled from "styled-components";
import media from "components/layouts/Master/MediaQuery";
import dynamic from 'next/dynamic'

const SlideMenu = dynamic(import('./SlideMenu'))

const Btn = styled.div`
a {
  color: #fff !important;
  text-decoration: none;
  padding: 0 15px;
  height: 40px;
  line-height: 40px;
  display: inline-block;
  border-radius: 0.5em;
  &:hover {
    color: #fff !important;
    background: rgba(255, 255, 255, 0.1);
  }
}

`;

const MainMenuStyle = styled.div`
  display: block;
  text-align: right;
  .ant-menu {
    background: none;
    font-family: "LatoWeb", Arial, Tahoma !important;
  }
  .ant-menu-horizontal {
    border-bottom: none;
    margin-right: 2em;
    display: inline-block;
    vertical-align: middle;
  }
  .ant-menu-horizontal > .ant-menu-item,
  .ant-menu-horizontal > .ant-menu-submenu {
    float: right;
    border-bottom: none;
  }
  .menu-fold {
    display: inline-block;
    font-size: 1.6rem;
    color: #fff;
    vertical-align: middle;
    cursor: pointer;
  }
  ${media.desktop`
  .main-menu {
    display:none;
  }
  `};
`;

class MainMenu extends Component {
  state = {
    visible: false
  };

  showDrawer = () => {
    this.setState((prevState) => ({
      visible: !prevState.visible
    }));
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  render() {
	  const { items } = this.props;
	  const { visible } = this.state;
    return (
      <MainMenuStyle>
        <Menu mode="horizontal" className="main-menu">
          <Link href="/">
            <Btn>
                <Anchor affix={false}><Anchor.Link href="#speaker" title={<IntlMessages id="topmenu.speaker" />} /></Anchor>
            </Btn>
          </Link>
        </Menu>
        <i className="fas fa-bars menu-fold" onClick={this.showDrawer} />
				{ visible && <SlideMenu items={items} onClose={this.onClose} /> }
      </MainMenuStyle>
    );
  }
}
MainMenu.propTypes = {
    items: PropTypes.array.isRequired,
};
export default MainMenu;
