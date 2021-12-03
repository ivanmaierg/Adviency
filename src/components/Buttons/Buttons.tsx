import React from 'react'
import GiftBox from '../../svg/giftbox.svg';
import './Buttons.css';

interface ButtonProps {
    children?: React.ReactNode;
    className?: string;
}

const Button = ({children,className,...rest}: ButtonProps) => {
    return (
        <button className={`Button__Container ${className ? className : ""}`} {...rest}>
            {children}
        </button>
    )
}


interface AddButtonProps extends ButtonProps {};

export const AddButton = ({...rest}:AddButtonProps) => {
    return (
        <Button>
            <span className="Button__content">
                <img src={GiftBox} alt="Add gift" />
            </span>
        </Button>
    )
}




export default Button;
