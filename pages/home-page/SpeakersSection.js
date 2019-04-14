import React from "react";
import PageSection from "components/PageSection/index";
import styled from "styled-components";
import Speakers from 'components/Speakers/index'



const items = [
    {
        image: "/static/image/people/milad.jpg",
        name: "Milad Heydari",
        desc : 'technology addicted interested in sports and movies working as frontend developer in github.com',
        lecture : 'React Fiber',
        socials: [
            {
                url: "https://linkedin.com/in/miladheydari",
                icon: "fa-linkedin",
            },
            {
                url: "https://twitter.com/iammilaad",
                icon: "fa-twitter",
            },
        ],
    },
    {
        image: "/static/image/people/mohsen.jpg",
        name: "Mohsen Barati",
        desc : 'technology addicted interested in sports and movies working as frontend developer in github.com',
        lecture : 'React Fiber',
        socials: [
            {
                url: "https://linkedin.com/in/mohsenbarati",
                icon: "fa-linkedin",
            },
            {
                url: "https://twitter.com/mohsenـbarati",
                icon: "fa-twitter",
            },
        ],
    },
    {
        image: "/static/image/people/ahmad.jpg",
        name: "Ahmad Karimpour",
        desc : 'technology addicted interested in sports and movies working as frontend developer in github.com',
        lecture : 'React Fiber',
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
        image: "/static/image/people/armin.jpg",
        name: "Armin Ebrahimi",
        desc : 'technology addicted interested in sports and movies working as frontend developer in github.com',
        lecture : 'React Fiber',
        socials: [
            {
                url: "https://www.linkedin.com/in/arm1ne/",
                icon: "fa-linkedin",
            },
            {
                url: "https://twitter.com/Arm1nE",
                icon: "fa-twitter",
            },
        ],
    },
    {
        image: "/static/image/people/idin.jpg",
        name: "Idin Khayami",
        desc : 'technology addicted interested in sports and movies working as frontend developer in github.com',
        lecture : 'React Fiber',
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
        image: "/static/image/people/samir.jpg",
        name: "Samir Rad",
        desc : 'technology addicted interested in sports and movies working as frontend developer in github.com',
        lecture : 'React Fiber',
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
        image: "/static/image/people/iman.jpg",
        name: "Iman Aletaha",
        desc : 'technology addicted interested in sports and movies working as frontend developer in github.com',
        lecture : 'React Fiber',
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
const SpeakersSection = () => {
    return (
        <PageSection
            title="speakers.title"
            size={8}
            bg={"#edece8"}
            id="speaker"
        >
           <Speakers items={items} type={"team"} />
        </PageSection>
    );
};

export default SpeakersSection;
