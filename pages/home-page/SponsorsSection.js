import React, { Fragment } from "react";
// import PageSection from "components/PageSection/index";
import Sponsors from "components/Sponsors/index";

const media = [
    {
        image: "/static/image/partners/hastnama.png",
        name: "hastnama.com",
        url: "https://hastnama.com/",
    },
    {
        image: "/static/image/partners/adviter.png",
        name: "adviter.se",
        url: "https://adviter.se/",
    },
    {
        image: "/static/image/partners/hastnama-academy.png",
        name: "hastnama.com/academy",
        url: "https://hastnama.com/academy",
    }
];
const SponsorsSection = () => {
    return (
        <Fragment>
            {/* <PageSection title="" size={2} bg={"#fff"}> */}
              
                <Sponsors items={media} />
            {/* </PageSection> */}

        </Fragment>
    );
};
export default SponsorsSection;
