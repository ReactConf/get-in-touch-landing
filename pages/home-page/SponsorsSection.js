import React, {Fragment} from "react";
import PageSection from "components/PageSection/index";
import Sponsors from "components/Sponsors/index";
import config from "config";

const items = [
    {
        image: "http://coderconf.org/static/image/logos/neshan.png",
        name: "sibapp",
        url: "http://coderconf.org/static/image/logos/sibapp.svg",
    },
    {
        image: "http://coderconf.org/static/image/logos/sibapp.svg",
        name: "karlib",
        url: "http://coderconf.org/static/image/logos/neshan.png",
    },
    {
        image: "http://coderconf.org/static/image/logos/azinro.svg",
        name: "karlib",
        url: "http://coderconf.org/static/image/logos/arvan.png",
    },
    {
        image: "http://coderconf.org/static/image/logos/IranServer.png",
        name: "sibapp",
        url: "http://coderconf.org/static/image/logos/sibapp.svg",
    },
    {
        image: "http://coderconf.org/static/image/logos/hamyarwp.jpg",
        name: "karlib",
        url: "http://coderconf.org/static/image/logos/neshan.png",
    }, {
        image: "http://coderconf.org/static/image/logos/neshan.png",
        name: "sibapp",
        url: "http://coderconf.org/static/image/logos/sibapp.svg",
    },

];
const SponsorsSection = () => {
    return (
        <Fragment>
            <PageSection title="Gold Sponsors" size={2} bg={"#fff"}>
                <br/>
                <Sponsors items={items}/>
            </PageSection>
            <br/>
            <br/>
            <PageSection title="Gold Sponsors" size={2} bg={"#fff"}>
                <br/>
                <Sponsors items={items}/>
            </PageSection>
            <br/>
            <br/>

            <PageSection title="Gold Sponsors" size={2} bg={"#fff"}>
                <br/>
                <Sponsors items={items}/>
            </PageSection>
            <br/>
            <br/>

        </Fragment>
    );
};
export default SponsorsSection;
