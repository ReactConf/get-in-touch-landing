import React, {Fragment} from "react";
import styled from "styled-components";
import {Button} from "antd";
import Link from "next/link";

const CardTitle = styled.h4`
  font-size: 1.4rem;
  text-align: center;
`;
const CardParagraph = styled.p`
  font-size: .95rem;
  color: #8591b0;
`;
const CardFace = styled.div`
  text-align: center;
  padding: 0 4.6rem;
  border-radius: .5rem;
  background: rgba(255,255,255,1);
  width: 100%;
  margin : 4rem auto;
  box-shadow: 0 2rem 50px rgba(50,60,90,.13);
  position: relative;
  z-index : 11;
  &::before{
    content: ' ';
    display:block;
    background: rgba(255,255,255,1);
    border-radius: .5rem;
    position: absolute;
    left: 1.7rem;
    top : -0.7rem;
    width: calc(100% - 3.4rem);
    height: calc(100% + 1.4rem);
    z-index : -1;
    box-shadow: 0 2rem 50px rgba(50,60,90,.13);
  }
  &::after{
        content: ' ';
        display:block;
        background: rgba(255,255,255,1);
        border-radius: .5rem;
        position: absolute;
        left: 3rem;
        top : -2rem;
        width: calc(100% - 6rem);
        height: calc(100% + 4rem);
        z-index : -1;
        box-shadow: 0 2rem 50px rgba(50,60,90,.13);
  }
`;




const PaperCard = ({title,body,btn,btnlink}) => {
    return (
      <Fragment>
        <CardFace>
        <CardTitle>{title}</CardTitle>
        <CardParagraph>{body}</CardParagraph>
          <Link href={btnlink}  >
            <a target="_blank" className="ant-btn ant-btn-lg ant-btn-dashed">
              {btn}
            </a>
          </Link>
        </CardFace>
      </Fragment>
    )
}
export default PaperCard;
