import React from 'react'
import IntlMessages from "components/utility/intlMessages";
import styled from "styled-components";
import media from "components/layouts/Master/MediaQuery";
import Button from "antd/lib/button";
import dynamic from 'next/dynamic'
const SubscribeFormModal = dynamic(import('./SubscribeFormModal'))

const FormBox = styled.div`
  width: 100%;
  
  .form-describe {
    font-size: 1.35rem;
    ${media.phone`
       font-size: 1rem;
      `};
  }
  ${media.tablet`
      padding: .75em 5% 1em 5%;
      margin-bottom: 2em;
      text-align: center;
    `};
`;

const ModalButton = styled.div`
  .ant-btn {
    font-size: 1rem;
  }
  .ant-btn-primary {
     padding: 0 1.5em;
     ${media.tablet`
        padding: 0 2.5em;
    `};
     border-radius: 1.6em;
    height: 48px;
    line-height: 48px;
    border: none;
    background: rgb(132, 104, 245);
    background: -moz-linear-gradient(
      -45deg,
      rgb(132, 104, 245) 0%,
      rgb(236, 116, 231) 100%
    );
    background: -webkit-linear-gradient(
      -45deg,
      rgba(132, 104, 245) 0%,
      rgb(236, 116, 231) 100%
    );
    background: linear-gradient(
      135deg,
      rgba(132, 104, 245) 0%,
      rgb(236, 116, 231) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#8468f5', endColorstr='#ec74e7',GradientType=1 );
    &:focus,
    &:hover {
      background: rgb(132, 104, 245);
      background: -moz-linear-gradient(
        -45deg,
        rgb(132, 104, 245) 0%,
        rgb(236, 116, 231) 100%
      );
      background: -webkit-linear-gradient(
        -45deg,
        rgba(132, 104, 245) 0%,
        rgb(236, 116, 231) 100%
      );
      background: linear-gradient(
        135deg,
        rgba(132, 104, 245) 0%,
        rgb(236, 116, 231) 100%
      );
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#8468f5', endColorstr='#ec74e7',GradientType=1 );
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
    }
  }
`;

class SubscribForm extends React.Component {

	state = {
		modalVisible: false,
	};

	setModalVisible = (modalVisible = true) => {
		this.setState({ modalVisible });
	}

	setModalInVisible = () => {
		this.setModalVisible(false);
	}

	render() {
		const { modalVisible } = this.state;
		return (
			<FormBox>
				<ModalButton>
						<Button type="primary" onClick={this.setModalVisible}><IntlMessages id="form.modal.btn" /></Button>
				</ModalButton>
				{modalVisible && <SubscribeFormModal setModalInVisible={this.setModalInVisible} {...this.props} />}
			</FormBox>
		)
	}
}

export default SubscribForm