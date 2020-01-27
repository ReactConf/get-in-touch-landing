import React from "react";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import PageSection from "components/PageSection/index";
import PaperCard from "components/PaperCard/index";
import configs from "configs";
import styled from "styled-components";
import IntlMessages from "components/utility/intlMessages";
import JurySection from "./JurySection";

const PageDescription = styled.p`
    font-size: 1rem;
    text-align: center;
    max-width: 750px;
    margin: 0 auto;
`;
const PageHeading2 = styled.h2`
    font-family: "LatoWebMedium";
    font-size: 1.7rem;
    text-transform: uppercase;
    text-align: center;
    margin: 2rem 0;
`;

const BecomeSpeakerSection = () => {
    return (
        <PageSection
            title="speaker.heading"
            size={8}
            bg={"#edece8"}
            id="speaker"
        >
            <PageDescription>
                <IntlMessages id={"speaker.header"} />
            </PageDescription>
            <Row type="flex" justify="center" align="middle">
                <Col xs={24} sm={24} md={16} lg={8} xl={8}>
                    <PaperCard
                        title="speaker.title"
                        body="speaker.body"
                        btn="speaker.btn"
                        withSample={true}
                        btnlink={`mailto:${configs.email}`}
                    />
                </Col>
            </Row>
            {/* <Row type="flex" justify="center">
                <Col span={24}>
                    <PageHeading2>
                        <IntlMessages id="jury.heading" />
                    </PageHeading2>
                </Col>
            </Row>
            <JurySection /> */}
        </PageSection>
    );
};

export default BecomeSpeakerSection;
