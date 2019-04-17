import React, {Fragment} from "react";
import PageSection from "components/PageSection/index";
import SponsorsCall from "components/SponsorsCall/index";
import config from "config";

const items =
    {
        image: "/static/image/sponsers.png",
        title: "Call for Sponsors",
        desc: "We are currently offering sponsorship packages for ReactConf 2019. Contact us to learn more about our available packages.Become a React Conf 2019 sponsor!",
    };

const CallOutSponsors = () => {
    return (
        <Fragment>
            <PageSection title="Become A Sponsor" size={1} bg="#edece8">
                <SponsorsCall/>
            </PageSection>
        </Fragment>
    );
};
export default CallOutSponsors;
