import React, { ReactElement } from 'react'
import './ListItems.css';

interface Props {
    title:string;
}

export default function ListItem({title}: Props): ReactElement {
    return (
        <li className="List__item">
            <p>{title}</p>
        </li>
    )
}
