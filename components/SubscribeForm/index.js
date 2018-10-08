import React, {Component} from "react";
import { Button } from "antd";
import styled from "styled-components";
import media from 'components/layouts/Master/MediaQuery';

const FormBox = styled.div`
    with : 100%; 
    .form-describe{
      font-size: 1.35rem;
      ${media.phone`
       font-size: 1rem;
      `};
    }
    ${media.tablet`
      padding: .75em 5% 1em 5%;
      margin-bottom: 2em;
    `};
`;

const InputBox = styled.div`
    margin-top: 1em;
    width : 100%; 
    background: #fff;
    border-radius: 2em;
    border:1px solid #f1f1f1;
    padding : .4em;
    box-shadow : 0 8px 30px rgba(0,0,0,.15);
    ${media.phone`
      margin-top: .4em;
      border:1px solid #eee;
      box-shadow : 0 4px 15px rgba(0,0,0,.2);
      `}
    .input{
      width : calc(100% - 100px);
      ${media.phone`
         width : calc(100% - 80px);
      `}
      background: #fff;
      border-radius: 1.6em;
      font-size : 1rem;
      height: 48px;
      line-height: 48px;
      border:none;
      outline:none;
      padding-left:.9em;
      &:focus{
        background: #fff;
        border:none;
        outline:none;
      }
    }
    .ant-btn{
      padding: 0 5px;
      font-size : 1rem;
    }
    .ant-btn-primary{
      width:100px;
      ${media.phone`
         width:80px;
      `}
      border-radius: 1.6em;
      height: 48px;
      line-height: 48px;
      border:none;
      background: rgb(132,104,245);
      background: -moz-linear-gradient(-45deg, rgb(132,104,245) 0%, rgb(236,116,231) 100%);
      background: -webkit-linear-gradient(-45deg, rgba(132,104,245) 0%,rgb(236,116,231) 100%);
      background: linear-gradient(135deg, rgba(132,104,245) 0%,rgb(236,116,231) 100%);
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#8468f5', endColorstr='#ec74e7',GradientType=1 );
      &:focus,&:hover{
        background: rgb(132,104,245);
        background: -moz-linear-gradient(-45deg, rgb(132,104,245) 0%, rgb(236,116,231) 100%);
        background: -webkit-linear-gradient(-45deg, rgba(132,104,245) 0%,rgb(236,116,231) 100%);
        background: linear-gradient(135deg, rgba(132,104,245) 0%,rgb(236,116,231) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#8468f5', endColorstr='#ec74e7',GradientType=1 );
        box-shadow : 0 2px 10px rgba(0,0,0,.4);
      }
    }
`;

class SubscribeForm extends Component {
  constructor(props){
    super(props);
  };
    render() {
      const {describe,inputPlaceholder,btn} = this.props;
        return (
          <FormBox>
            <span className="form-describe">{describe}</span>
            <InputBox>
              <form>
                <input type="text" className="input" placeholder={{inputPlaceholder}}/>
                <Button  type="primary" >{btn}</Button>
              </form>
            </InputBox>
          </FormBox>
        );
    }
}

export default SubscribeForm;
