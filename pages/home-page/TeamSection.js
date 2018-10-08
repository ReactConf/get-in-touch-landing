import React from "react";
import IntlMessages from 'components/utility/intlMessages';
import PageSection from "components/PageSection/index";
import TeamMembers from "components/TeamMembers/index";
const items = [
  {
    image: '/static/image/people/milad.jpg',
    name: 'Mohsen Barati',
    socials :[{
      url: 'https://linkedin.com',
      icon: 'fa-linkedin'
    },{
      url: 'https://github.com',
      icon: 'fa-github'
    },
      {
        url: 'https://twitter.com',
        icon: 'fa-twitter'
      }
    ]
  },
  {
    image: '/static/image/people/mohsen.jpg',
    name: 'Mohsen Barati',
    socials :[{
      url: 'https://linkedin.com',
      icon: 'fa-linkedin'
    },{
      url: 'https://github.com',
      icon: 'fa-github'
    },
      {
        url: 'https://twitter.com',
        icon: 'fa-twitter'
      }
    ]
  },
  {
    image: '/static/image/people/ahmad.jpg',
    name: 'Mohsen Barati',
    socials :[{
      url: 'https://linkedin.com',
      icon: 'fa-linkedin'
    },{
      url: 'https://github.com',
      icon: 'fa-github'
    },
      {
        url: 'https://twitter.com',
        icon: 'fa-twitter'
      }
    ]
  },
  {
    image: '/static/image/people/arash.jpg',
    name: 'Mohsen Barati',
    socials :[{
      url: 'https://linkedin.com',
      icon: 'fa-linkedin'
    },{
      url: 'https://github.com',
      icon: 'fa-github'
    },
      {
        url: 'https://twitter.com',
        icon: 'fa-twitter'
      }
    ]
  },

]
const TeamSection = () => {
    return (
      <PageSection title={<IntlMessages id="team.heading"/>} size={7} bg={'#e3e2dd'}>
        <TeamMembers items={items} />
      </PageSection>
    );
}

export default TeamSection;
