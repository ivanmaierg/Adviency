import React from 'react';
import './List.css';
interface Props {
  children:React.ReactNode;
}

export default function List({children}: Props) {
	return <div className="List__container"><ul className="List">{children}</ul></div>;
}
