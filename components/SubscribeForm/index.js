import React, { Component } from "react";
import PropTypes from 'prop-types';
import IntlMessages from "components/utility/intlMessages";
import Button from "antd/lib/button";
import Modal from "antd/lib/modal";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import Cascader from "antd/lib/cascader";
import notification from "antd/lib/notification";
import styled from "styled-components";
import media from "components/layouts/Master/MediaQuery";
import Texty from "rc-texty";
import "rc-texty/assets/index.css";
import animType from "rc-texty/lib/animTypes";
import config from 'config';
import axios from 'axios';
import _ from 'lodash';

const FormItem = Form.Item;
function filter(inputValue, path) {
    return (path.some(option => (option.label).toLowerCase().indexOf(inputValue.toLowerCase()) > -1));
}
function pickRandomProperty(obj) {
    let result;
    let count = 0;
    for (let prop in obj) if (Math.random() < 1 / ++count) result = prop;
    return result;
}

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

const options = [{
    value: 'Software Engineer',
    label: 'Software Engineer',
    children: [
        {
            value: 'Mobile Developer',
            label: 'Mobile Developer',
        },
        {
            value: 'Frontend Developer',
            label: 'Frontend Developer',
        },
        {
            value: 'Backend Developer',
            label: 'Backend Developer',
        },
        {
            value: 'Full-Stack Developer ',
            label: 'Full-Stack Developer',
        },
        {
            value: 'Engineering Manager',
            label: 'Engineering Manager',
        },
        {
            value: 'QA Engineer',
            label: 'QA Engineer',
        },
        {
            value: 'DevOps',
            label: 'DevOps',
        },
        {
            value: 'Software Architect',
            label: 'Software Architect',
        },
    ],
}, {
    value: 'Designer',
    label: 'Designer',
    children: [
        {
            value: 'UI/UX Designer',
            label: 'UI/UX Designer',
        },
        {
            value: 'Visual Designer',
            label: 'Visual Designer',
        },
        {
            value: 'Creative Designer',
            label: 'Creative Designer',
        },
        {
            value: 'Graphic & Brand Designer',
            label: 'Graphic & Brand Designer',
        },
    ],
},
    {
        value: 'Operations',
        label: 'Operations',
        children: [
            {
                value: 'H.R.',
                label: 'H.R.',
            },
            {
                value: 'Office Manager',
                label: 'Office Manager',
            },
            {
                value: 'Recruiter',
                label: 'Recruiter',
            },
            {
                value: 'Customer Service',
                label: 'Customer Service',
            },
            {
                value: 'Operations Manager',
                label: 'Operations Manager',
            }
        ],
    },
    {
        value: 'Sales',
        label: 'Sales',
        children: [
            {
                value: 'Business Development',
                label: 'Business Development',
            },
            {
                value: 'Account Manager',
                label: 'Account Manager',
            },
            {
                value: 'Sales',
                label: 'Sales',
            },
            {
                value: 'Sales Engineer',
                label: 'Sales Engineer',
            }
        ],
    },
    {
        value: 'Marketing',
        label: 'Marketing',
        children: [
            {
                value: 'Growth Hacker',
                label: 'Growth Hacker',
            },
            {
                value: 'Marketing Manager',
                label: 'Marketing Manager',
            },
            {
                value: 'Content Creator',
                label: 'Content Creator',
            },
            {
                value: 'Social Media Manager',
                label: 'Social Media Manager',
            }
        ],
    },
    {
        value: 'Finance',
        label: 'Finance',
        children: [
            {
                value: 'Accountant',
                label: 'Accountant',
            },
            {
                value: 'Bookkeeper',
                label: 'Bookkeeper',
            },
            {
                value: 'Controller',
                label: 'Controller',
            },
            {
                value: 'Financial Analyst',
                label: 'Financial Analyst',
            }
        ],
    },
    {
        value: 'Other Engineering',
        label: 'Other Engineering',
        children: [
            {
                value: 'Hardware Engineer',
                label: 'Hardware Engineer',
            },
            {
                value: 'Mechanical Engineer',
                label: 'Mechanical Engineer',
            },
            {
                value: 'Systems Engineer',
                label: 'Systems Engineer',
            },
        ],
    },
    {
        value: 'C-Level',
        label: 'C-Level',
        children: [
            {
                value: 'CEO',
                label: 'CEO',
            },
            {
                value: 'CFO',
                label: 'CFO',
            },
            {
                value: 'CTO',
                label: 'CTO',
            },
            {
                value: 'CAO',
                label: 'CAO',
            },
            {
                value: 'CMO',
                label: 'CMO',
            },
        ],
    },
    {
        value: 'Other',
        label: 'Other',
        children: [
            {
                value: 'Attorney',
                label: 'Attorney',
            },
            {
                value: 'Business Analyst',
                label: 'Business Analyst',
            },
            {
                value: 'Data Scientist',
                label: 'Data Scientist',
            },
            {
                value: 'Product Manager',
                label: 'Product Manager',
            },
            {
                value: 'Other',
                label: 'Other',
            },
        ],
    },
];



class SubscribeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            loading: false,
            show: false,
            mode: "smooth",
            type: pickRandomProperty(animType)
        };
    }

    componentDidMount = () => {
        this.setState({
            show: true
        });
    };
    setModalVisible = modalVisible => {
        this.setState({ modalVisible });
    };
    filter = (inputValue, path) => {
        console.log(inputValue, path);
        return (path.some(option => (option.label).toLowerCase().indexOf(inputValue.toLowerCase()) > -1));
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields( async (err, values)  => {
            try {
                if (!err) {
                    await this.setState({loading: true});
                    Object.assign(values, {experience : values.experience.toString()});
                    const response = await axios.post(config.apiUrl,values);
                    await this.setState({
                        loading: false,
                        modalVisible: false,
                    });
                    await this.props.form.resetFields();
                    await notification['success']({
                        message: 'Success',
                        description: response.data.message
                    });
                }
            }
            catch (e) {
                await this.setState({loading: false});
                if(e.response.status === 400) {
                    await _.forEach(e.response.data.errors, (value,key) => {
                        notification['error']({
                            message: `${key} error`,
                            description: value
                        });
                    });
                } else {
                    notification['error']({
                        message: `error`,
                        description: "Please try again!"
                    });
                }
            }
        });
    };
    render() {
        const { describe} = this.props;
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        return (
            <FormBox>
                <ModalButton>
                    <Button type="primary" onClick={() => this.setModalVisible(true)}><IntlMessages id="form.modal.btn"/></Button>
                </ModalButton>
                <Modal
                    title={this.context.intl.formatMessage({id: "form.modal.title"})}
                    centered
                    visible={this.state.modalVisible}
                    footer={null}
                    onCancel={() => this.setModalVisible(false)}
                >
                    <h2>
                        <Texty type={this.state.type} mode={this.state.mode}>
                            {this.context.intl.formatMessage({
                                id: describe
                            })}
                        </Texty>
                    </h2>
                    <Form  onSubmit={this.handleSubmit}>
                        <FormItem
                            {...formItemLayout}
                            label= {this.context.intl.formatMessage({id: "form.modal.fname"})}
                        >
                            {getFieldDecorator('first_name', {
                                rules: [{
                                    required: true, message: this.context.intl.formatMessage({id: "form.modal.fname.validation"})
                                }],
                            })(
                                <Input autoFocus/>
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label={this.context.intl.formatMessage({id: "form.modal.lname"})}
                        >
                            {getFieldDecorator('last_name', {
                                rules: [{
                                    required: true, message: this.context.intl.formatMessage({id: "form.modal.lname.validation"}),
                                }],
                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label={this.context.intl.formatMessage({id: "form.modal.experience"})}
                        >
                            {getFieldDecorator('experience', {
                                rules: [{
                                    required: true,
                                    message: this.context.intl.formatMessage({id: "form.modal.experience.validation"}),
                                }],
                            })(
                                <Cascader expandTrigger="hover"
                                          size="large"
                                          options={options}
                                          showSearch={{filter}}
                                          placeholder="Please select"
                                />
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label={this.context.intl.formatMessage({id: "form.modal.email"})}
                        >
                            {getFieldDecorator('email', {
                                rules: [{
                                    type: 'email',
                                    message: this.context.intl.formatMessage({id: "form.modal.email.validation.format"}),
                                }, {
                                    required: true,
                                    message: this.context.intl.formatMessage({id: "form.modal.email.validation"}),
                                }],
                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label={this.context.intl.formatMessage({id: "form.modal.phone"})}
                        >
                            {getFieldDecorator('phone_number', {
                                rules: [{ required: false,
                                    message: this.context.intl.formatMessage({id: "form.modal.phone.validation"})
                                }],
                            })(
                                <Input  style={{ width: '100%' }} />
                            )}
                        </FormItem>
                        <FormItem {...tailFormItemLayout}>
                            <Button type="primary"
                                    className={"ant-btn-block"}
                                    size='large'
                                    loading={this.state.loading}
                                    htmlType='submit'
                            >
                                Join us
                            </Button>
                        </FormItem>
                    </Form>
                </Modal>
            </FormBox>
        );
    }
}

SubscribeForm.contextTypes = {
    intl: PropTypes.object.isRequired
};
SubscribeForm.propTypes = {
    describe: PropTypes.string.isRequired,
};
export default Form.create()(SubscribeForm);
