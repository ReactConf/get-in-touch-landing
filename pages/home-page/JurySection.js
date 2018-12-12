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
        image: "/static/image/people/farzad.jpg",
        name: "Farzad YousefZadeh",
        socials: [
            {
                url: "https://www.linkedin.com/in/farzadyz/",
                icon: "fa-linkedin"
            },
            {
                url: "https://twitter.com/Farzad_YZ",
                icon: "fa-twitter"
            }
        ]
    },
    {
        image: "/static/image/people/reza.jpg",
        name: "Reza Shadman",
        socials: [
            {
                url: "https://www.linkedin.com/in/bigsinoos",
                icon: "fa-linkedin"
            },
            {
                url: "https://twitter.com/reshadman",
                icon: "fa-twitter"
            }
        ]
    },
    {
        image: "/static/image/people/mohammad.jpg",
        name: "Mohamad Mohebifar",
        socials: [
            {
                url: "https://www.linkedin.com/in/mohebifar",
                icon: "fa-linkedin"
            },
            {
                url: "https://twitter.com/mohebifar",
                icon: "fa-twitter"
            }
        ]
    },
];
const JurySection = () => {
  return (
      <TeamMembers items={items}  type={'jury'} />
  );
};

export default JurySection;
