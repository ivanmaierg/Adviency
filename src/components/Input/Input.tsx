/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, {Ref} from 'react';
import {SyntheticEvent} from 'react';
interface Props {
    onChange?:React.ChangeEventHandler<HTMLInputElement>;
    value?:any;
    type:string;
    id?:string;
    className:string;
    placeHolder?:string;
    children?:JSX.Element;
    required?:boolean;
    ref?:Ref<HTMLInputElement>;
    onFocus: (arg0:SyntheticEvent) => void;
    autoFocus?:boolean;
}

export const Input = ({value, onChange, type, id, className, autoFocus, required = false, children, onFocus, placeHolder = '', ...rest}:Props) => (
	<label htmlFor={id} className={className}>
		{children && children}<input autoFocus={autoFocus} name={id} onFocus={onFocus} placeholder={placeHolder} required={required} id={id} type={type} value={value} onChange={onChange} {...rest}/>
	</label>

);
