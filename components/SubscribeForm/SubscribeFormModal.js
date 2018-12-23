import React, { Component } from "react";
import PropTypes from 'prop-types';
import Button from "antd/lib/button";
import Modal from "antd/lib/modal";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import Cascader from "antd/lib/cascader";
import notification from "antd/lib/notification";
import Texty from "rc-texty";
import "rc-texty/assets/index.css";
import animType from "rc-texty/lib/animTypes";
import config from 'config';
import axios from 'axios';
import forEach from 'lodash/forEach';

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

class SubscribeFormModal extends Component {

	state = {
		loading: false,
		mode: "smooth",
		type: pickRandomProperty(animType)
	};

	filter = (inputValue, path) => {
			console.log(inputValue, path);
			return (path.some(option => (option.label).toLowerCase().indexOf(inputValue.toLowerCase()) > -1));
	}
	handleSubmit = (e) => {
	const { form, setModalInVisible } = this.props;
			e.preventDefault();
			form.validateFields( async (err, values)  => {
					try {
							if (!err) {
									await this.setState({loading: true});
									Object.assign(values, {experience : values.experience.toString()});
									const response = await axios.post(config.apiUrl,values);
									await this.setState({
											loading: false,
									});
									await setModalInVisible();
									await form.resetFields();
									await notification['success']({
											message: 'Success',
											description: response.data.message
									});
							}
					}
					catch (e) {
							await this.setState({loading: false});
							if(e.response.status === 400) {
									await forEach(e.response.data.errors, (value,key) => {
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
		const { describe, form, setModalInVisible } = this.props;
		const { getFieldDecorator } = form;
		const { loading, mode, type } = this.state;
		const { intl } = this.context;
		const { formatMessage } = intl;
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
					<Modal
							centered
							visible
							title={formatMessage({id: "form.modal.title"})}
							footer={null}
							onCancel={setModalInVisible}
					>
							<h2>
									<Texty type={type} mode={mode}>
											{formatMessage({
													id: describe
											})}
									</Texty>
							</h2>
							<Form onSubmit={this.handleSubmit}>
									<FormItem
											{...formItemLayout}
											label= {formatMessage({id: "form.modal.fname"})}
									>
											{getFieldDecorator('first_name', {
													rules: [{
															required: true, message: formatMessage({id: "form.modal.fname.validation"})
													}],
											})(
													<Input autoFocus />
											)}
									</FormItem>
									<FormItem
											{...formItemLayout}
											label={formatMessage({id: "form.modal.lname"})}
									>
											{getFieldDecorator('last_name', {
													rules: [{
															required: true, message: formatMessage({id: "form.modal.lname.validation"}),
													}],
											})(
													<Input />
											)}
									</FormItem>
									<FormItem
											{...formItemLayout}
											label={formatMessage({id: "form.modal.experience"})}
									>
											{getFieldDecorator('experience', {
													rules: [{
															required: true,
															message: formatMessage({id: "form.modal.experience.validation"}),
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
											label={formatMessage({id: "form.modal.email"})}
									>
											{getFieldDecorator('email', {
													rules: [{
															type: 'email',
															message: formatMessage({id: "form.modal.email.validation.format"}),
													}, {
															required: true,
															message: formatMessage({id: "form.modal.email.validation"}),
													}],
											})(
													<Input />
											)}
									</FormItem>
									<FormItem
											{...formItemLayout}
											label={formatMessage({id: "form.modal.phone"})}
									>
											{getFieldDecorator('phone_number', {
													rules: [{ required: false,
															message: formatMessage({id: "form.modal.phone.validation"})
													}],
											})(
													<Input style={{ width: '100%' }} />
											)}
									</FormItem>
									<FormItem {...tailFormItemLayout}>
											<Button type="primary"
															className={"ant-btn-block"}
															size='large'
															loading={loading}
															htmlType='submit'
											>
													Join us
											</Button>
									</FormItem>
							</Form>
					</Modal>
		);
	}
}

SubscribeFormModal.contextTypes = {
    intl: PropTypes.object.isRequired
};
SubscribeFormModal.propTypes = {
		describe: PropTypes.string.isRequired,
		setModalInVisible: PropTypes.func.isRequired

};
export default Form.create()(SubscribeFormModal);
