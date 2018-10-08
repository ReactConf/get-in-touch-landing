import React, {Component} from "react";
import { Drawer, Menu} from 'antd';
import Link from 'next/link';
import IntlMessages from "helpers/intlMessages";

import styled from "styled-components";
import media from '../layouts/Master/MediaQuery';

const Btn = styled.a`
  color: #fff !important;
  text-decoration: none;
  padding:0 15px;
  height: 40px;
  line-height: 40px;
  display: inline-block;
  border-radius: .5em;
  &:hover{
   color: #fff !important;
   background: rgba(255,255,255,.1) ;
  }
`;

const MainMenuStyle = styled.div`
  display: block;
  text-align: right;
  .ant-menu {
    background: none;
    font-family: 'LatoWeb',Arial,Tahoma !important;
  }
  .ant-menu-horizontal {
      border-bottom: none;
      margin-right:2em;
      display : inline-block;
      vertical-align: middle;
  }
  .ant-menu-horizontal > .ant-menu-item, .ant-menu-horizontal > .ant-menu-submenu {
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
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }
    showDrawer = () => {
        this.setState({
            visible: !this.state.visible,
        });
    };
    onClose = () => {
        this.setState({
            visible: false,
        });
    };
    renderMenu = (items) => {
        return items.map((item, index) => {
            return (
                <Menu.Item key={index}>
                    {item.type === 'external' ? <a href={item.url} target="_blank">{item.text}</a> :
                        <Link href={`/${item.url}`}>{item.text}</Link>}
                </Menu.Item>
            )
        })
    }

    render() {
        return (
            <MainMenuStyle>
              <Menu
                mode="horizontal"
                className="main-menu"
              >
                <Link href="/"><Btn><IntlMessages id="topmenu.speaker"/></Btn></Link>
              </Menu>
                <i className="fas fa-bars menu-fold" onClick={this.showDrawer} ></i>
                <Drawer
                    title="Menu"
                    placement="right"
                    onClose={this.onClose}
                    visible={this.state.visible}
                    zIndex={99999}
                >
                    <Menu
                        mode="vertical"
                        className="main-menu"
                    >
                      {this.renderMenu(this.props.items)}
                    </Menu>
                </Drawer>
            </MainMenuStyle>
        );
    }
}

export default MainMenu;
