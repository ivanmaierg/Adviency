import React from 'react';
import DeleteBeige from '../../svg/deletebeige.svg';
import Edit from '../../svg/editicon.svg';
import './Buttons.css';

interface ButtonProps {
    type?:'submit' | 'reset' | 'button' | undefined;
    children?: React.ReactNode;
    className?: string;
    onClick?:React.MouseEventHandler;
}

const Button = ({type = 'button', children, className, onClick, ...rest}: ButtonProps) => (
	<button type={type} className={'Button__Container ' + className} onClick={onClick} {...rest}>
		{children}
	</button>
);

export const DeleteItemButton = ({...rest}:ButtonProps) => (
	<Button className="Button__Container" {...rest}>
		<span>
			<img src={DeleteBeige} alt="delete item icon" />
		</span>
	</Button>
);

export const EditItemButton = ({...rest}:ButtonProps) => (
	<Button className="Button__Container" {...rest}>
		<span>
			<img src={Edit} alt="delete item icon" />
		</span>
	</Button>
);

export interface ButtonModalProps extends ButtonProps {
    variant?:'delete'|'outline';
}

export const ButtonModal = ({type, variant, children, ...rest}:ButtonModalProps) => (
	<Button type="button" className={`Button__Container modal ${variant ? variant : ''}`}{...rest}>
		{children}
	</Button>
);

export default Button;
