import React from "react";
import PageSection from "components/PageSection";
import IntlMessages from "components/utility/intlMessages";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import styled from "styled-components";
import SocialIcons from "components/SocialIcons";
import configs from "configs";

const Copyright = styled.p`
    text-align: center;
    font-size: 0.8rem;
    color: #a2a29e;
`;

const items = [
    {
        url: configs.social.github,
        icon: "fa-github",
    },
    {
        url: configs.social.twitter,
        icon: "fa-twitter",
    },
    {
        url: configs.social.instagram,
        icon: "fa-instagram",
    },
    {
        url: configs.social.telegram,
        icon: "fa-telegram-plane",
    },
    {
        url: configs.social.tel,
        icon: "fa-whatsapp",
    },
    {
        url: configs.social.blog,
        icon: "fa-blogger-b",
    },
];
const FooterLayout = () => {
    return (
        <PageSection title="contact.heading" size={3} bg="#e3e2dd" id="contact">
            <Row gutter={16} type="flex" justify="center">
                <Col span={24}>
                    <h3>
                        <IntlMessages id="contact.follow" />
                    </h3>
                    <SocialIcons items={items} size={2} />
                    <a href={`mailto:${configs.email}`} target="_blank">
                        <h3>
                            <IntlMessages id="contact.email" />
                        </h3>
                    </a>
                    <br />
                    <Copyright>
                        <IntlMessages id="contact.copyright.part1" />
                        <i className="fas fa-heart" />
                        <IntlMessages id="contact.copyright.part2" />
                    </Copyright>
                </Col>
            </Row>
        </PageSection>
    );
};
export default FooterLayout;
