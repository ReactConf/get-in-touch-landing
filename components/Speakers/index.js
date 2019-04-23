import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import SocialIcons from "components/SocialIcons";
import media from "components/layouts/Master/MediaQuery";

const SpSubject = styled.p`
    text-align: left;
    font-size : 1rem;
    color:#000;
    margin:0;
            ${media.phone`
         text-align: center;
  `};
    
`;
const SpDesc = styled.p`
    text-align: left;
    font-size : 1rem;
                ${media.phone`
         text-align: center;
  `};
 
`;
const Titles = styled.h3`
   text-align: left;
    font-family: "LatoWebMedium";
    font-weight: 900;
    font-size: 1.5em;
                    ${media.phone`
         text-align: center;
  `};
`;
const Avatar = styled.div`
    &:hover ${SocialOverlay} {
      opacity: 1  ;
    }
    text-align: center;
    width: 80%;
    max-width: 200px;
    margin: 0 auto 10px auto;
    border: 5px solid #fff;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    img {
        border-radius: 50%;
        width: 100%;
        //filter: grayscale(100%);
    }
        ${media.phone`
         max-width: 100%;
  `};
`;
const AvatarEffect = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    /*background: rgb(3, 241, 244, 0.25);
  background: -moz-linear-gradient(
    -45deg,
    rgba(3, 241, 244, 0.25) 0%,
    rgba(95, 3, 244, 0.25) 100%
  );
  background: -webkit-linear-gradient(
    -45deg,
    rgba(3, 241, 244, 0.25) 0%,
    rgba(95, 3, 244, 0.25) 100%
  );
  background: linear-gradient(
    135deg,
    rgba(3, 241, 244, 0.25) 0%,
    rgba(95, 3, 244, 0.25) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#03f1f4', endColorstr='#5f03f4',GradientType=1 );*/
`;
const SocialOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background: linear-gradient( 135deg,rgba(132, 104, 245, 0.51) 0%,rgba(236, 116, 231, 0.55) 50% );  `;

const AvatarEffectJury = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    /*background: rgb(198, 40, 40, 0.25);
  background: -moz-linear-gradient(
    -45deg,
    rgba(198, 40, 40, 0.25) 0%,
    rgba(255, 213, 79, 0.25) 100%
  );
  background: -webkit-linear-gradient(
    -45deg,
    rgba(198, 40, 40, 0.25) 0%,
    rgba(255, 213, 79, 0.25) 100%
  );
  background: linear-gradient(
    135deg,
    rgba(198, 40, 40, 0.25) 0%,
    rgba(255, 213, 79, 0.25) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#FFD54F', endColorstr='#c62828',GradientType=1 );*/
`;

const Wrapper = styled.div`
  .ant-col-xs-24:hover ${SocialOverlay} {
     opacity:1
  }
  .ant-col-xs-23 .i :{
    color: white
  }

`;

function renderFarm(items, type) {
    const effect = type == "team" ? <AvatarEffect /> : <AvatarEffectJury />;
    return items.map((item, index) => {
        return (
            <Col xs={24} sm={12} md={24} lg={12} xl={12} key={index} style={{marginBottom:20}}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Avatar>
                        <img src={item.image} alt={item.name} />
                        {effect}
                        <SocialOverlay>
                            <SocialIcons type={'speakers'} items={item.socials} size={1.4} />
                        </SocialOverlay>
                    </Avatar>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Titles>{item.name}</Titles>
                    <SpSubject> {item.lecture}</SpSubject>
                    <SpDesc> {item.desc} </SpDesc>
                    <br />
                </Col>
            </Col>
        );
    });
}

const Speakers = ({ items, type }) => {
    return (
        <Wrapper>
            <Row type="flex" justify="center">
                {renderFarm(items, type)}
            </Row>
        </Wrapper>
    );
};
Speakers.propTypes = {
    items: PropTypes.array.isRequired,
    type: PropTypes.string.isRequired,
};
export default Speakers;
