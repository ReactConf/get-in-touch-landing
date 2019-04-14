import React from "react";
import PageSection from "components/PageSection/index";
import Sponsors from "components/Sponsors/index";
import config from "config";
const items = [
    {
        image: "/static/image/sponsors/karlib.svg",
        name: "karlib",
        url: "http://karlib.com",
    },
    {
        image: "/static/image/sponsors/karlib.svg",
        name: "karlib",
        url: "http://karlib.com",
    },
    {
        image: "/static/image/sponsors/karlib.svg",
        name: "karlib",
        url: "http://karlib.com" ,
    },
];
const SponsorsSection = () => {
    return (
        <PageSection title="sponsors.heading" size={2} bg={"#fff"}>
            <Sponsors items={items} />
        </PageSection>
    );
};
export default SponsorsSection;
