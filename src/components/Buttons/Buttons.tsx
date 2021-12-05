import React from 'react'
import GiftBox from '../../svg/giftbox.svg';
import DeleteBeige from '../../svg/deletebeige.svg';
import './Buttons.css';

interface ButtonProps {
    children?: React.ReactNode;
    className?: string;
}



const Button = ({children,className,...rest}: ButtonProps) => {
    return (
        <button className={className} {...rest}>
            {children}
        </button>
    )
}


interface AddButtonProps extends ButtonProps {};

export const AddButton = ({...rest}:AddButtonProps) => {
    return (
        <Button className="Button__Container primary AddButton" {...rest}>
            <span className="Button__content">
                <img src={GiftBox} alt="Add gift" />
            </span>
        </Button>
    )
}

interface DeleteItemButtonProps extends ButtonProps {
    onClick:React.MouseEventHandler;
};

export const DeleteItemButton = ({...rest}:DeleteItemButtonProps) => {

    return (
        <Button className="Button__Container deleteItem" {...rest}>
            <span className="Button__content">
                <img src={DeleteBeige} alt="Delete item" />
            </span>
        </Button>
    )
}

export default Button;
