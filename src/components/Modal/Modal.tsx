/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
interface ModalProps {
    isOpen:boolean;
    children: React.ReactNode;
    onClose:Function;
}

export const Modal = ({isOpen, children, onClose}: ModalProps) => {
	const portalDiv = document.getElementById('portal');
	if (!portalDiv) {
		throw new Error('The element #portal wasn\'t found');
	}

	if (!isOpen) {
		return null;
	}

	const handleOnClick = ():void => {
		onClose();
	};

	return ReactDOM.createPortal(
		<>
			<div className="Modal__Overlay" onClick={handleOnClick}/>
			<div className="Modal__Container">
				{children}
			</div>
		</>
		, portalDiv);
};
