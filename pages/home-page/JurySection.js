import React from "react";
import TeamMembers from "components/TeamMembers/index";

const items = [
  {
    image: "/static/image/people/mahdieh.jpg",
    name: "Mahdieh Noroozian",
    socials: [
      {
        url: "https://www.linkedin.com/in/mahdieh-noroozian-90016b45/",
        icon: "fa-linkedin"
      },
      {
        url: "https://twitter.com/_mahdieh_",
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
