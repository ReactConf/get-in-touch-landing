import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const SocialIconsBox = styled.div`
  text-align: center;
  width: 100%;
  margin: 0.75rem 0;
  color: #000;
  font-size: ${({ iconsize }) => iconsize + "rem"};
  a {
    display: inline-block;
    margin: 0 5px;
    color: #82848d !important;
    &:hover {
      color: #111 !important;
    }
  }
`;

function renderFarm(items) {
    return items.map((item, index) => {
        return (
            <a target="_blank" href={item.url} key={index}>
                <i className={"fab " + item.icon} />
            </a>
        );
    });
}

const SocialIcons = ({ items, size }) => {
    return <SocialIconsBox iconsize={size}>{renderFarm(items)}</SocialIconsBox>;
};
SocialIcons.propTypes = {
    items: PropTypes.array.isRequired,
    size: PropTypes.number
};
export default SocialIcons;
