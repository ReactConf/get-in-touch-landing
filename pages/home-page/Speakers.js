import React from "react";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import PageSection from "components/PageSection/index";
import PaperCard from "components/PaperCard/index";
import config from "config";
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

const sperakersData = [
    {
        name:"sdf",
        title:'sdf',
        image:"sdf",
        description:"sdf",
        twitter:"sdf",
        linkedin: "sdf",
        github:"sdf"
    },
];

const Speakers = () => {
    return (
        <PageSection
            title="speakers.title"
            size={8}
            bg={"#edece8"}
            id="speaker"
        >
            <Row type="flex" justify="center">

            </Row>
        </PageSection>
    );
};

export default Speakers;
