import React, {Fragment} from "react";
import Link from "next/link";
import styled from "styled-components";

const SocialIconsBox = styled.div`
  text-align: center;
  width: 100%;
  margin: .75rem 0;
  color: #000;
  font-size: ${({ iconsize }) => iconsize + 'rem'};
  a{
    display:inline-block;
    margin: 0 5px;
    color: #82848d !important;
    &:hover{
      color : #111 !important;
    }
  }
`;

function renderFarm(items) {
    return items.map((item, index) => {
        return (
          <Link href={item.url}  key={index}>
            <a target="_blank">
              <i className={"fab "+ item.icon}></i>
            </a>
          </Link>
        )
    });
}

const SocialIcons = ({items,size}) => {
    return (
      <SocialIconsBox iconsize={size}>
              {renderFarm(items)}
      </SocialIconsBox>
    )

}
export default SocialIcons;
