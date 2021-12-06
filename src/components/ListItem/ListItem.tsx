import React, {ReactElement} from 'react';
import './ListItems.css';
import giftItem from '../../svg/giftitem.svg';
import {DeleteItemButton} from '../Buttons/Buttons';
import {Gift} from './../../utils/types';
interface Props {
    gift:Gift;
    handleDeleteItem:Function;
}

export default function ListItem({gift, handleDeleteItem}: Props): ReactElement {
	const {title, src} = gift;
	return (
		<li className="List__item">
			<span className="List__item--img">
				<img src={src ? src : giftItem} />
			</span>
			<p>
				{title}
			</p>
			<DeleteItemButton onClick={() => {
				handleDeleteItem(gift.id);
			}} />
		</li>
	);
}
