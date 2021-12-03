import React, { ReactElement } from 'react'
import './ListItems.css';
import giftItem from '../../svg/giftitem.svg';
interface Props {
    title:string;
    src?:string;
}

export default function ListItem({title,src}: Props): ReactElement {
    return (
        <li className="List__item">
            <span className="List__item--img"><img src={src ? src : giftItem} /></span><p>{title}</p>
        </li>
    )
}
