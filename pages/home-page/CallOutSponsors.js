import React, {Fragment} from "react";
import PageSection from "components/PageSection/index";
import SponsorsCall from "components/SponsorsCall/index";
import config from "config";

const items =
    {
        image: "https://reactconf.am/sponsors.png",
        title: "How to Join Sponsers",
        desc: "Every event we reserve at least 50 tickets for people from underrepresented groups in technology allowing them free access to the conference. With your support we can take this number even higher.\n" +
            "\n" +
            "Donations amounts can vary. Diversity support partners will be specially highlighted during the event by our MC, and company logos will be placed under special conference website section.",
    };

const CallOutSponsors = () => {
    return (
        <Fragment>
            <PageSection title="Call Out Sponsors" size={2} bg={"#edece8"}>
                <br/>
                <SponsorsCall items={items}/>
            </PageSection>
        </Fragment>
    );
};
export default CallOutSponsors;
