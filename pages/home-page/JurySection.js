import React from "react";
import PageSection from "components/PageSection/index";
import TeamMembers from "components/TeamMembers/index";

const items = [
  {
    image: "/static/image/people/ilia.jpg",
    name: "Ilia Vakili",
    socials: [
      {
        url: "https://www.linkedin.com/in/ilia-vakili-01b8a844/",
        icon: "fa-linkedin"
      },
      {
        url: "https://twitter.com/thereticent",
        icon: "fa-twitter"
      }
    ]
  },
  {
    image: "/static/image/people/pourya.jpg",
    name: "Pourya Sharifi",
    socials: [
      {
        url: "https://www.linkedin.com/in/alaki",
        icon: "fa-linkedin"
      },
      {
        url: "https://twitter.com/alaki",
        icon: "fa-twitter"
      }
    ]
  },
    {
        image: "/static/image/people/armin.jpg",
        name: "Armin Ebrahimi",
        socials: [
            {
                url: "https://www.linkedin.com/in/arm1ne/",
                icon: "fa-linkedin"
            },
            {
                url: "https://twitter.com/Arm1nE",
                icon: "fa-twitter"
            }
        ]
    },
];
const JurySection = () => {
  return (
      <TeamMembers items={items} />
  );
};

export default JurySection;
