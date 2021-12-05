import React from 'react'
import GiftBox from '../../svg/giftbox.svg';
import DeleteBeige from '../../svg/deletebeige.svg';
import Trash from '../../svg/trash.svg';
import './Buttons.css';

interface ButtonProps {
    type?:'submit' | 'reset' | 'button' | undefined;
    children?: React.ReactNode;
    className?: string;
    onClick?:React.MouseEventHandler;
}



const Button = ({type,children,className,onClick,...rest}: ButtonProps) => {
    return (
        <button type={type} className={className} onClick={onClick} {...rest}>
            {children}
        </button>
    )
}


export const AddButton = ({...rest}:ButtonProps) => {
    return (
        <Button className="Button__Container primary AddButton" {...rest}>
            <span className="Button__content">
                <img src={GiftBox} alt="add gift icon" />
            </span>
        </Button>
    )
}



export const DeleteItemButton = ({...rest}:ButtonProps) => {

    return (
        <Button  className="Button__Container deleteItem" {...rest}>
            <span className="Button__content">
                <img src={DeleteBeige} alt="delete item icon" />
            </span>
        </Button>
    )
}





export const ButtonDeleteAll = ({...rest}: ButtonProps) => {
    return (
         <Button className="Button__Container deleteAll" {...rest}>
            <span className="Button__content">
                <img src={Trash} alt="delete all icon" />
            </span>
        </Button>
    )
}

export interface ButtonModalProps extends ButtonProps {
    variant?:'delete'|'outline';
}

export const ButtonModal = ({type,variant,children,...rest}:ButtonModalProps) => {
   return(
    <Button type="button" className={`Button__Container modal ${variant ? variant : ""}`}{...rest}>
            {children}
    </Button>
   ) 
}

export default Button;
