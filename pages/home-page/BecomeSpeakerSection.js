import React from "react";
import {Row, Col} from 'antd';
import IntlMessages from 'components/utility/intlMessages';
import PageSection from "components/PageSection/index";
import PaperCard from "components/PaperCard/index";

const BecomeSpeakerSection = () => {
    return (
      <PageSection title={<IntlMessages id="speaker.heading"/>} size={8} bg={'#edece8'}>
        <Row  type="flex" justify="center" align="middle">
          <Col xs={24} sm={24} md={16} lg={8} xl={8} >
            <PaperCard
              title={<IntlMessages id="speaker.title"/>}
              body={<IntlMessages id="speaker.body"/>}
              btn={<IntlMessages id="speaker.btn"/>}
              btnlink={'mailto:info@reactconf.ir'}
            />
          </Col>
        </Row>
      </PageSection>
    );
}

export default BecomeSpeakerSection;
