import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
interface ModalProps {
    isOpen:boolean;
    children: React.ReactNode;
    onClick:React.MouseEventHandler;
}


export const Modal = ({isOpen,children,onClick}: ModalProps) => {
    const portalDiv = document.getElementById('portal');
    if (!portalDiv) {
    throw new Error("The element #portal wasn't found");
}
    if(!isOpen) return null;
    return ReactDOM.createPortal(
        <>
        <div className="Modal__Overlay" onClick={onClick}/>
        <div className="Modal__Container">
            {children}
        </div>
        </>
   , portalDiv);
}
