import React, {Fragment} from "react";
import MasterLayout from "components/layouts/Master";
import {Helmet} from 'react-helmet';
import HomeSection from "./home-page/HomeSection";
import SponsorsSection from "./home-page/SponsorsSection";
import BecomeSpeakerSection from "./home-page/BecomeSpeakerSection";
import TeamSection from "./home-page/TeamSection";
import HeaderItems from 'components/HeaderItems';
import HomeBackground from "./home-page/HomeBackground";

const HomePage = () => {
    return (
        <Fragment>
            <Helmet>
                <title>ReactConf 2019</title>
                <meta name="keywords" content="ReactConf"/>
                <meta name="description" content="ReactConf"/>
            </Helmet>
            <MasterLayout>
                <HeaderItems/>
                <HomeSection/>
                <HomeBackground/>
                <SponsorsSection/>
                <BecomeSpeakerSection/>
                <TeamSection/>
            </MasterLayout>
        </Fragment>
    );
}

export default HomePage;
