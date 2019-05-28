import React, { Fragment } from "react";
import PageSection from "components/PageSection/index";
import Sponsors from "components/Sponsors/index";

const media = [
    {
        image: "/static/image/partners/rocket.png",
        name: "rocket",
        url: "https://roocket.ir",
    },
    {
        image: "/static/image/partners/arjang.png",
        name: "arjang",
        url: "https://arjang.ac.ir/",
    },
    {
        image: "/static/image/partners/ciw.png",
        name: "ciwiran",
        url: "https://ciwiran.com/",
    },
    {
        image: "/static/image/partners/radismedia.png",
        name: "radismedia",
        url: "https://www.instagram.com/radismedia/",
    },
    {
        image: "/static/image/partners/virgool.png",
        name: "virgool.io",
        url: "https://virgool.io/",
    },
    {
        image: "/static/image/partners/frontcast.png",
        name: "frontcast",
        url: "http://frontcast.ir/",
    },
    {
        image: "/static/image/partners/aasaam.png",
        name: "aasaam.com",
        url: "https://aasaam.com/",
    },
    {
        image: "/static/image/partners/Binosha.png",
        name: "Binosha",
        url: "https://binosha.com",
    },
    {
        image: "/static/image/partners/zoomtech.png",
        name: "zoomtech.org",
        url: "https://zoomtech.org/",
    },
    {
        image: "/static/image/partners/macneed.png",
        name: "macneed.ir",
        url: "http://macneed.ir",
    },
    {
        image: "/static/image/partners/afkar.png",
        name: "afkarnews",
        url: "https://www.afkarnews.com/",
    },
    {
        image: "/static/image/partners/gadgetnews.png",
        name: "gadgetnews.net",
        url: "https://gadgetnews.net",
    },
    {
        image: "/static/image/partners/giftak.png",
        name: "giftak.net",
        url: "https://giftak.net/",
    },
];
const SponsorsSection = () => {
    return (
        <Fragment>
            <PageSection title="Media Partners" size={2} bg={"#fff"}>
                <br />
                <Sponsors items={media} />
            </PageSection>
            <br />
            <br />
        </Fragment>
    );
};
export default SponsorsSection;
