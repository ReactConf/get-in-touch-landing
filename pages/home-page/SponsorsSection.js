import React from "react";
import PageSection from "components/PageSection/index";
import Sponsors from "components/Sponsors/index";
import config from 'config';
const items = [
  {
    image: "/static/image/sponsors/karlib.svg",
    name: "karlib",
    url: "http://karlib.com"
  },
  {
    image: "/static/image/sponsors/karlib.svg",
    name: "karlib",
    url: "http://karlib.com"
  },
  {
    image: "/static/image/sponsors/karlib.svg",
    name: "karlib",
    url: "http://karlib.com"
  }
];
const SponsorsSection = () => {
  return (
    <PageSection
      title="sponsors.heading"
      size={2}
      bg={"#fff"}
      id={id}
    >
      <a
				target="_blank"
				rel="noopener noreferrer"
        href={`mailto:${config.email}`}
        className="ant-btn ant-btn-lg ant-btn-dashed"
      >
        become a sponsor
      </a>
      {/*<Sponsors items={items} />*/}
    </PageSection>
  );
};
export default SponsorsSection;
