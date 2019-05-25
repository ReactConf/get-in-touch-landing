import React from "react";
import PageSection from "components/PageSection/index";
import Speakers from 'components/Speakers/index'



const items = [
    {
        image: "/static/image/people/pedram.jpg",
        name: "Pedram Marandi",
        desc : 'full-stack Javascript web developer and a full-time Software Engineering student.developer at Ezerus.com, and we make enterprise Javascript applications with React, powered by lovely GraphQL, Apollo and Prisma.',
        lecture : 'What is Graphql and how to implement a scalable GraphQL project with React & Apollo?',
        socials: [
            {
                url: "https://www.linkedin.com/in/pedrammarandi/",
                icon: "fa-linkedin",
            },
            {
                url: "https://github.com/PedramMarandi",
                icon: "fa-github",
            },
        ],
    },
    {
        image: "/static/image/people/ana.jpg",
        name: "Ana Lava",
        desc : 'having +4 years of experience in backend development utilizing various technologies and concepts such as Nodejs, mongodb, Elasticsearch, Microservices Architecture, Docker and etc.',
        lecture : 'An Introduction to Real-Time programming in Javascript',
        socials: [
            {
                url: "https://www.linkedin.com/in/ana-lava-4466348a/",
                icon: "fa-linkedin",
            },
        ],
    },
    {
        image: "/static/image/people/sajjad.jpg",
        name: "Sajjad Beiraghdar",
        desc : 'How React Native works, What issues it has and how they will be addressed in the React Native new architecture.',
        lecture : 'React Native Architecture',
        socials: [
            {
                url: "https://www.linkedin.com/in/smbeiragh/",
                icon: "fa-linkedin",
            },
            {
                url: "https://twitter.com/smbeiragh",
                icon: "fa-twitter",
            },
            {
                url: "https://github.com/smbeiragh",
                icon: "fa-github",
            },
        ],
    },
    {
        image: "/static/image/people/jeremy.jpg",
        name: "Jeremy Webster",
        desc : 'The talk will be about where Innovation in technology comes from, based on my own research and experience, and how your choice of technologies in a project can stop innovation',
        lecture : 'How Your Technology Choices Sop Innovation',
        socials: [
            {
                url: "https://www.linkedin.com/in/jeremywebstercc/",
                icon: "fa-linkedin",
            },
        ],
    },
    {
        image: "/static/image/people/amirabbas.jpg",
        name: "Amir abbas abdolali",
        desc : 'why SVG is such an important part of building websites. From why SVG is useful and how to get your hands on it all the way to implementing it as a system and fancy stuff like animating it.',
        lecture : 'Everything You Need To Know About SVG',
        socials: [
            {
                url: "https://www.linkedin.com/in/abdolali/",
                icon: "fa-linkedin",
            },
            {
                url: "https://twitter.com/amir_abbas",
                icon: "fa-twitter",
            },
        ],
    },
    {
        image: "/static/image/people/mojtaba.jpg",
        name: "Mojtaba Esparipour",
        desc : 'An overview on how React works and what features are added to it in version 16.x',
        lecture : 'React 16 Overview',
        socials: [
            {
                url: "https://www.linkedin.com/in/mojtabast/",
                icon: "fa-linkedin",
            },
            {
                url: "http://www.twitter.com/mojtabast_fa",
                icon: "fa-twitter",
            },
        ],
    },
    {
        image: "/static/image/people/milad.jpg",
        name: "Milad Heydari",
        desc : 'Developers looking for good companies and companies looking for good developers. We have issues regarding this matter, milad wants to go deep and talk about encounter between knowledge and companies.',
        lecture : 'hiring issues in Front-End Community',
        socials: [
            {
                url: "http://www.linkedin.com/in/miladheydari",
                icon: "fa-linkedin",
            },
            {
                url: "http://www.instagram.com/iammilaad",
                icon: "fa-twitter",
            },
            {
                url: "https://github.com/miladbruce",
                icon: "fa-github",
            },
        ],
    },
    {
        image: "/static/image/people/ehsun.jpg",
        name: "Ehsan Mohammadi",
        desc : 'Advanced Efficiency, Reusability of React Components,Performance,Modularity and the market job, ... and everything is Javascript.',
        lecture : 'Why are we using React.js in our project?',
        socials: [
            {
                url: "https://www.linkedin.com/in/ehsanmohammadi/",
                icon: "fa-linkedin",
            },
        ],
    },
    {
        image: "/static/image/people/hamed.jpg",
        name: "Hamed Esmaili",
        desc : 'Manipulating the DOM‌ is an intensive operation in the browser world, react uses VDOM concept to do that with its own diffing algorithm to improve performance which we aim to go through it to understand what is under the hood.',
        lecture : 'How Diffing Algorithm Works In React',
        socials: [
            {
                url: "http://linkedin.com/in/theham3d",
                icon: "fa-linkedin",
            },
            {
                url: "https://twitter.com/theham3d",
                icon: "fa-twitter",
            },
            {
                url: "https://github.com/theham3d",
                icon: "fa-github",
            },
        ],
    },
    {
        image: "/static/image/people/samaneh.jpg",
        name: "Samaneh Mohammadi",
        desc : 'how to make Dynamic interactive user interface based on components and how to use it for building complex interfaces.',
        lecture : 'Styled-Component Architecture',
        socials: [
            {
                url: "https://www.linkedin.com/in/samaneh-1994-13-mohammadi/",
                icon: "fa-linkedin",
            },
        ],
    },
    {
        image: "/static/image/people/mamal.jpg",
        name: "Mohamad Jahani",
        desc : 'Hooks are the new/hot feature of React 16.8. The talk is going to cover everything you need to know about Hooks and provide some answers to the questions like "What are Hooks?", "Why we should use them?", and "How to use them?"',
        lecture : 'useHooks!',
        socials: [
            {
                url: "https://www.linkedin.com/in/mamal72/",
                icon: "fa-linkedin",
            },
            {
                url: "https://github.com/mamal72",
                icon: "fa-github",
            },
            {
                url: "https://twitter.com/mamal72",
                icon: "fa-twitter",
            },
        ],
    },
    {
        image: "/static/image/people/negar.jpg",
        name: "Negar Jamalifard",
        desc : 'Does CORS error haunts you in every project? Are you tired of asking backend team to handle it? This talk is going to give you all the power to handle this error in development.',
        lecture : 'How to deal with CORS error in Webpack?',
        socials: [
            {
                url: "https://www.linkedin.com/in/negarjamalifard",
                icon: "fa-linkedin",
            },
            {
                url: "https://github.com/negarjf",
                icon: "fa-github",
            },
            {
                url: "https://twitter.com/NegarJamalifard",
                icon: "fa-twitter",
            },
            {
                url: "https://medium.com/@negarjf",
                icon: "fa-medium",
            },
        ],
    },
    {
        image: "/static/image/people/ahmad.jpg",
        name: "Ahmad Karimpour",
        desc : 'Understanding the communication between JS & Native, Error Tracking, Codepush, VirtualizedList...',
        lecture : 'A Cup of React-Native',
        socials: [
            {
                url: "https://www.linkedin.com/in/ahmadina/",
                icon: "fa-linkedin",
            },
            {
                url: "https://twitter.com/iahmadina",
                icon: "fa-twitter",
            },
        ],
    },
    {
        image: "/static/image/people/hasan.jpg",
        name: "Mohammad Hassan Gilak",
        desc : 'render on the server rather than in the browser. talk about Cons of Rendering React on the Server, Architecture, Performance and challenges.',
        lecture : 'React Server-Side Rendering',
        socials: [
            {
                url: "https://www.linkedin.com/in/mohammad-hassan-gilak-9248268a/",
                icon: "fa-linkedin",
            },
            {
                url: "https://twitter.com/hasangilak",
                icon: "fa-twitter",
            },
            {
                url: "https://github.com/hasangilak",
                icon: "fa-github",
            },
        ],
    },
    {
        image: "/static/image/people/ehsun-h.jpg",
        name: "Ehsan Hosseini",
        desc : 'What do you do if you need an enterprise Front-end application? How to develop each part of the application completely in an independent team with their structure, libraries, and framework as a separate application? And how these applications will communicate with each other? These questions will be answered by Micro-Frontend concept.',
        lecture : 'Micro-Frontend',
        socials: [
            {
                url: "http://-www.linkedin.com/in/ehsan-hosseini-a92a676b",
                icon: "fa-linkedin",
            },
            {
                url: "https://github.com/zerob4wl",
                icon: "fa-github",
            },
        ],
    },
];
const SpeakersSection = () => {
    return (
        <PageSection
            title="speakers.title"
            size={13}
            bg={"#fff"}
            id="speaker"
        >
           <Speakers items={items} type={"team"} />
        </PageSection>
    );
};

export default SpeakersSection;
