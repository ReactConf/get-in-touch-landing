import React from "react";
import PageSection from "components/PageSection/index";
import TeamMembers from "components/TeamMembers/index";

const items = [
  {
    image: "/static/image/people/milad.jpg",
    name: "Milad Hrydari",
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
      <TeamMembers items={items} />
    </PageSection>
  );
};

export default TeamSection;
