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
    // {
    //     image: "/static/image/people/pourya.jpg",
    //     name: "Pourya Sharifi",
    //     desc: "React Conf Project Manager",
    //     socials: [
    //         {
    //             url: "https://www.linkedin.com/in/alaki/",
    //             icon: "fa-linkedin",
    //         },
    //         {
    //             url: "https://twitter.com/alaki",
    //             icon: "fa-twitter",
    //         },
    //     ],
    // },
    {
        image: "/static/image/people/samir.jpg",
        name: "Samir Rad",
        desc: "Creative Generalist",
        socials: [
            {
                url: "http://www.linkedin.com/in/radismedia",
                icon: "fa-linkedin",
            },
            {
                url: "http://www.instagram.com/radismedia",
                icon: "fa-instagram",
            },
        ],
    },
    {
        image: "/static/image/people/ahmad.jpg",
        name: "Ahmad Karimpour",
        desc: "React Conf Organizer",
        socials: [
            {
                url: "https://www.linkedin.com/in/ahmadina",
                icon: "fa-linkedin",
            },
            {
                url: "https://twitter.com/iahmadina",
                icon: "fa-twitter",
            },
        ],
    },
    {
        image: "/static/image/people/arya.jpg",
        name: "Arya Sadeghi",
        desc: "Community Lounge",
        socials: [
            {
                url: "https://www.linkedin.com/in/aryasadeghy/",
                icon: "fa-linkedin",
            },
            {
                url: "https://twitter.com/aryasadeghy",
                icon: "fa-twitter",
            },
            {
                url: "https://twitter.com/aryasadeghy",
                icon: "fa-github",
            },
        ],
    },
    {
        image: "/static/image/people/idin.jpg",
        name: "Idin Khayami",
        desc: "Community Lounge",
        socials: [
            {
                url: "https://ir.linkedin.com/in/idin-khayami-93163aa3",
                icon: "fa-linkedin",
            },
            {
                url: "https://twitter.com/iiciigiirl",
                icon: "fa-twitter",
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
    {
        image: "/static/image/people/iman.jpg",
        name: "Iman Aletaha",
        desc: "Community Lounge",
        socials: [
            {
                url: "https://www.linkedin.com/in/iman-aletaha-b296234b",
                icon: "fa-linkedin",
            },
            {
                url: "https://twitter.com/idrstreet",
                icon: "fa-twitter",
            },
        ],
    },
];
const TeamSection = () => {
    return (
        <PageSection title="team.heading" size={7} bg="#e3e2dd" id="team">
            <TeamMembers items={items} type={"team"} />
        </PageSection>
    );
};

export default TeamSection;
