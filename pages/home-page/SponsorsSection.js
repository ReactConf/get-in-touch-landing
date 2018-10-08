import React from "react";
import IntlMessages from 'components/utility/intlMessages';
import PageSection from "components/PageSection/index";
import Sponsors from "components/Sponsors/index";
const items = [
  {
    image: '/static/image/sponsors/karlib.svg',
    name: 'karlib',
    url: 'http://karlib.com',
  },
  {
    image: '/static/image/sponsors/karlib.svg',
    name: 'karlib',
    url: 'http://karlib.com',
  },
  {
    image: '/static/image/sponsors/karlib.svg',
    name: 'karlib',
    url: 'http://karlib.com',
  },
]
const SponsorsSection = () => {
    return (
      <PageSection title={<IntlMessages id="sponsors.heading"/>} size={2} bg={'#fff'}>
        <Sponsors items={items} />
      </PageSection>
    );
}
export default SponsorsSection;
