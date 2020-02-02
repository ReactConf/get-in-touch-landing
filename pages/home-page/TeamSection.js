import React from "react";
import PageSection from "components/PageSection/index";
import TeamMembers from "components/TeamMembers/index";

const items = [
    {
        image: "/static/image/people/milad.jpg",
        name: "Milad Heydari",
        desc: "Founder of React Conf",
        socials: [
            {
                url: "https://linkedin.com/in/miladheydari",
                icon: "fa-linkedin",
            },
            {
                url: "https://twitter.com/iammilaad",
                icon: "fa-twitter",
            },
            {
                url: "https://twitter.com/miladbruce",
                icon: "fa-github",
            },
        ],
    },
    {
        image: "/static/image/people/pourya.jpg",
        name: "Pourya Sharifi",
        desc: "React Conf Project Manager",
        socials: [
            {
                url: "https://www.linkedin.com/in/alaki/",
                icon: "fa-linkedin",
            },
            {
                url: "https://twitter.com/alaki",
                icon: "fa-twitter",
            },
        ],
    },
    {
        image: "/static/image/people/behrouz.jpg",
        name: "Behrouz Omran",
        desc: "BUSINESS ANALYSIS",
        socials: [
            {
                url: "https://www.linkedin.com/in/behrouz-omran-3aaa2086/",
                icon: "fa-linkedin",
            },
        ],
    },
    {
        image: "/static/image/people/ali.jpg",
        name: "Ali Hariri",
        desc: "Business Developer",
        socials: [
            {
                url: "https://www.linkedin.com/in/malihariri/",
                icon: "fa-linkedin",
            },
        ],
    },
    {
        image: "/static/image/people/samaneh.jpg",
        name: "samaneh rabiee",
        desc: "Business Developer",
        socials: [
            {
                url: "https://dribbble.com/samane",
                icon: "fa-dribbble",
            },
        ],
    },
    {
        image: "/static/image/people/arash.jpg",
        name: "Arash Shams",
        desc: "React Conf Devops",
        socials: [
            {
                url: "https://www.linkedin.com/in/ara4sh/",
                icon: "fa-linkedin",
            },
            {
                url: "https://github.com/Ara4Sh",
                icon: "fa-github",
            },
        ],
    },
    // {
    //     image: "/static/image/people/iman.jpg",
    //     name: "Iman Aletaha",
    //     desc: "Community Lounge",
    //     socials: [
    //         {
    //             url: "https://www.linkedin.com/in/iman-aletaha-b296234b",
    //             icon: "fa-linkedin",
    //         },
    //         {
    //             url: "https://twitter.com/idrstreet",
    //             icon: "fa-twitter",
    //         },
    //     ],
    // },
];
const TeamSection = () => {
    return (
        <PageSection title="team.heading" size={7} bg="#e3e2dd" id="team">
            <TeamMembers items={items} type={"team"} />
        </PageSection>
    );
};

export default TeamSection;
