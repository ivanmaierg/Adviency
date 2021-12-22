import React, {ReactElement} from 'react';
import './ListItems.css';
import giftItem from '../../svg/giftitem.svg';
import {DeleteItemButton, EditItemButton} from '../Buttons/Buttons';
import {Gift} from './../../utils/types';
interface Props {
	gift: Gift;
	handleDeleteItem: Function;
}

export default function ListItem({gift, handleDeleteItem}: Props): ReactElement {
	const {title, src, dest, quantity, price} = gift;
	return (
		<li className="List__item">
			<div className="List__item--img">
				<span className="img">
					<img src={src ? src : giftItem} alt="item" />
				</span>
				<span className="List__item--quantity">
					<p>x {quantity && quantity}</p>
				</span>
			</div>
			<div className="List__item--text-content">
				<p>{title} - $ {price}</p>
				<p className="for">Destinatario: {dest}</p>
			</div>
			<div className="List__item--buttons">
				<DeleteItemButton onClick={() => {
					handleDeleteItem(gift.id);
				}} />
				<EditItemButton/>
			</div>

		</li>
	);
}
