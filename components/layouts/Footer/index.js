import React from "react";
import PageSection from "components/PageSection";
import IntlMessages from "components/utility/intlMessages";
import Link from 'next/link';
import { Col, Row } from "antd";
import styled from "styled-components";
import SocialIcons from "components/SocialIcons";

const Copyright = styled.p`
    text-align: center;
    font-size: .8rem;
    color: #a2a29e;
`;

const items = [
  {
    url: 'https://linkedin.com',
    icon: 'fa-linkedin'
  },
  {
    url: 'https://github.com',
    icon: 'fa-github'
  },
  {
    url: 'https://twitter.com',
    icon: 'fa-twitter'
  },
  {
    url: 'https://instagram.com',
    icon: 'fa-instagram'
  },
  {
    url: 'https://t.me',
    icon: 'fa-telegram-plane'
  },
]
const FooterLayout = () => {
    return (
      <PageSection title={<IntlMessages id="contact.heading"/>} size={3} bg={'#e3e2dd'}>
            <Row gutter={16} type="flex" justify="center">
                      <Col span={24}>
                        <h3><IntlMessages id="contact.follow"/></h3>
                        <SocialIcons items={items} size={2}/>
                        <Link href='mailto:info@reactconf.ir'>
                          <a>
                            <h3><IntlMessages id="contact.email"/></h3>
                          </a>
                        </Link>
                        <br/>
                        <Copyright>
                          <IntlMessages id="contact.copyright.part1"/>
                            <i className="fas fa-heart"></i>
                          <IntlMessages id="contact.copyright.part2"/>
                        </Copyright>
                      </Col>
            </Row>
      </PageSection>
    );
}
export default FooterLayout;
