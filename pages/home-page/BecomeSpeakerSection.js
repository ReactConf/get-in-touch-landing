import React from "react";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import PageSection from "components/PageSection/index";
import PaperCard from "components/PaperCard/index";
import config from 'config';

const BecomeSpeakerSection = () => {
  return (
    <PageSection
      title="speaker.heading"
      size={8}
      bg={"#edece8"}
      id="speaker"
    >
      <Row type="flex" justify="center" align="middle">
        <Col xs={24} sm={24} md={16} lg={8} xl={8}>
          <PaperCard
            title="speaker.title"
            body="speaker.body"
            btn="speaker.btn"
            btnlink={`mailto:${config.email}`}
          />
        </Col>
      </Row>
    </PageSection>
  );
};

export default BecomeSpeakerSection;
