import React from 'react'
import PropTypes from 'prop-types';
import Drawer from "antd/lib/drawer";
import Menu from "antd/lib/menu";
import Anchor from "antd/lib/anchor";

const SlideMenu = (props) => {
	const { items, onClose } = props;
	return(
		<Drawer
			visible
			title="Menu"
			placement="right"
			zIndex={99999}
			onClose={onClose}
		>
			<Menu mode="vertical" className="main-menu">
				{
					items.map((item, index) => {
						return (
							<Menu.Item key={`main-menu-${index}`}>
								{item.type === "external" ? (
									<a href={item.url} target="_blank" rel="noopener noreferrer">
										{item.text}
									</a>
								) : (
										<Anchor affix={false}><Anchor.Link href={`${item.url}`} title={item.text} /></Anchor>
								)}
							</Menu.Item>
						);
					})
				}
			</Menu>
		</Drawer>
	)
}

SlideMenu.propTypes = {
	items: PropTypes.array.isRequired,
	onClose: PropTypes.func.isRequired
}

export default SlideMenu;