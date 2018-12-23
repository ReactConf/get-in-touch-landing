import React, { Fragment } from "react";
import MasterLayout from "components/layouts/Master";
import { Helmet } from "react-helmet";
import HomeSection from "./home-page/HomeSection";
import BecomeSpeakerSection from "./home-page/BecomeSpeakerSection";
import TeamSection from "./home-page/TeamSection";
import HeaderItems from "components/HeaderItems";
import HomeBackground from "./home-page/HomeBackground";
// import SponsorsSection from "./home-page/SponsorsSection";
// import JurySection from "./home-page/JurySection";

const HomePage = () => {
    return (
        <Fragment>
            <Helmet>
                <title>ReactConf 2019 | Javascript & ReactJS Conference</title>
                <meta name="keywords" content="ReactConf, react conference, js conference" />
                <meta name="description" content="First Javascript & ReactJS Conference in IRAN, Algorithm, Data Structure,ReactJS,NodeJS,Graphql and etc…" />
            </Helmet>
            <MasterLayout>
                <HeaderItems />
                <HomeSection />
                <HomeBackground />
                {/*<SponsorsSection />*/}
                <BecomeSpeakerSection />
                <TeamSection />
            </MasterLayout>
        </Fragment>
    );
};

export default HomePage;
