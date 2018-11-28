import React from "react";
import PageSection from "components/PageSection/index";
import TeamMembers from "components/TeamMembers/index";

const items = [
  {
    image: "/static/image/people/milad.jpg",
    name: "Milad Heydari",
    socials: [
      {
        url: "https://linkedin.com/in/miladheydari",
        icon: "fa-linkedin"
      },
      {
        url: "https://twitter.com/iammilaad",
        icon: "fa-twitter"
      }
    ]
  },
  {
    image: "/static/image/people/mohsen.jpg",
    name: "Mohsen Barati",
    socials: [
      {
        url: "https://linkedin.com/in/mohsenbarati",
        icon: "fa-linkedin"
      },
      {
        url: "https://twitter.com/mohsenـbarati",
        icon: "fa-twitter"
      }
    ]
  },
  {
    image: "/static/image/people/ahmad.jpg",
    name: "Ahmad Karimpour",
    socials: [
      {
        url: "https://www.linkedin.com/in/ahmadina",
        icon: "fa-linkedin"
      },
      {
        url: "https://twitter.com/iahmadina",
        icon: "fa-twitter"
      }
    ]
  },
    {
        image: "/static/image/people/arash.jpg",
        name: "Arash Shams",
        socials: [
            {
                url: "https://www.linkedin.com/in/ara4sh",
                icon: "fa-linkedin"
            },
            {
                url: "https://twitter.com/Ara4Sh",
                icon: "fa-twitter"
            }
        ]
    },
    {
        image: "/static/image/people/idin.jpg",
        name: "Idin Khayami",
        socials: [
            {
                url: "https://ir.linkedin.com/in/idin-khayami-93163aa3",
                icon: "fa-linkedin"
            },
            {
                url: "https://twitter.com/iiciigiirl",
                icon: "fa-twitter"
            }
        ]
    },
    {
        image: "/static/image/people/samir.jpg",
        name: "Samir Rad",
        socials: [
            {
                url: "http://www.linkedin.com/in/radismedia",
                icon: "fa-linkedin"
            },
            {
                url: "http://www.instagram.com/radismedia",
                icon: "fa-instagram"
            }
        ]
    }
];
const TeamSection = () => {
  return (
    <PageSection
      title="team.heading"
      size={7}
      bg="#e3e2dd"
      id="team"
    >
      <TeamMembers items={items} type={'team'} />
    </PageSection>
  );
};

export default TeamSection;
