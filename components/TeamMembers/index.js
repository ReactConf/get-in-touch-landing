import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import SocialIcons from 'components/SocialIcons';

const Avatar = styled.div`
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
    filter: grayscale(100%);
  }
`;
const AvatarEffect = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgb(3, 241, 244, 0.25);
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
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#03f1f4', endColorstr='#5f03f4',GradientType=1 );
`;

function renderFarm(items) {
  return items.map((item, index) => {
    return (
      <Col xs={12} sm={12} md={6} lg={4} xl={4} key={index}>
        <Avatar>
          <img src={item.image} alt={item.name} />
          <AvatarEffect />
        </Avatar>
        <h3>{item.name}</h3>
        <SocialIcons items={item.socials} size={1.4} />
        <br />
      </Col>
    );
  });
}

const TeamMembers = ({ items }) => {
  return (
    <Row type="flex" justify="center">
      {renderFarm(items)}
    </Row>
  );
};
TeamMembers.propTypes = {
    items: PropTypes.array.isRequired
};
export default TeamMembers;
