import React, {Fragment} from "react";
import PageSection from "components/PageSection/index";
import Sponsors from "components/Sponsors/index";
import config from "config";

const media = [
    {
        image: "/static/image/sponsors/virgool.png",
        name: "virgool.io",
        url: "https://virgool.io/",
    },
    {
        image: "/static/image/sponsors/frontcast.png",
        name: "frontcast",
        url: "http://frontcast.ir/",
    },
    {
        image: "/static/image/sponsors/aasaam.png",
        name: "aasaam.com",
        url: "https://aasaam.com/",
    },
    {
        image: "/static/image/sponsors/zoomtech.png",
        name: "zoomtech.org",
        url: "https://zoomtech.org/",
    },
    {
        image: "/static/image/sponsors/afkar.png",
        name: "afkarnews",
        url: "https://www.afkarnews.com/",
    },
    {
        image: "/static/image/sponsors/gadgetnews.png",
        name: "gadgetnews.net",
        url: "https://gadgetnews.net",
    },
    {
        image: "/static/image/sponsors/giftak.png",
        name: "giftak.net",
        url: "https://giftak.net/",
    },
];
const SponsorsSection = () => {
    return (
        <Fragment>
            <PageSection title="Media Sponsors" size={2} bg={"#fff"}>
                <br/>
                <Sponsors items={media}/>
            </PageSection>
            <br/>
            <br/>

        </Fragment>
    );
};
export default SponsorsSection;
