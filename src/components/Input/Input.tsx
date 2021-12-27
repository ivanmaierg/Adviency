/* eslint-disable no-undef */
import React from 'react';
interface Props {
    onChange:React.ChangeEventHandler<HTMLInputElement>;
    value:any;
    type:string;
    id?:string;
    className:string;
    placeHolder?:string;
    children?:JSX.Element;
    required?:boolean;
}

export const Input = ({value, onChange, type, id, className, required = false, children, placeHolder = '', ...rest}:Props) => (
	<label htmlFor={id} className={className}>
		{children && children}<input placeholder={placeHolder} required={required} id={id} type={type} value={value} onChange={onChange} {...rest}/>
	</label>

);
