import React, {Fragment} from "react";
import MasterLayout from "components/layouts/Master";
import {Helmet} from "react-helmet";
import HomeSection from "./home-page/HomeSection";
import SponsorsSection from "./home-page/SponsorsSection";
import BecomeSpeakerSection from "./home-page/BecomeSpeakerSection";
import TeamSection from "./home-page/TeamSection";
import HeaderItems from "components/HeaderItems";
import HomeBackground from "./home-page/HomeBackground";
import SpeakersSection from './home-page/SpeakersSection';
import JurySection from './home-page/JurySection';
import CallOutSponsors from './home-page/CallOutSponsors'

const HomePage = () => {
    return (
        <Fragment>
            <Helmet>
                <title>React Conf Iran 2019</title>
                <meta
                    name="description"
                    content="First Javascript & ReactJS Conference in IRAN, Algorithm, Data Structure,ReactJS,NodeJS,Graphql and etc…"
                />
            </Helmet>
            <MasterLayout>
                <HeaderItems/>
                <HomeSection/>
                <HomeBackground/>
                {/*<SponsorsSection/>*/}
                <SpeakersSection/>
                <JurySection/>
                {/*<BecomeSpeakerSection />*/}
                <CallOutSponsors/>
                <TeamSection/>
            </MasterLayout>
        </Fragment>
    );
};

export default HomePage;
