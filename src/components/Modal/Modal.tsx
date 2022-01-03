/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
interface ModalProps {
    isOpen?:boolean;
    children: React.ReactNode;
    onClose?:Function;
	type:'center'|'bottom';
	overlay?:boolean;
}

export const Modal = ({isOpen = true, children, onClose, type, overlay}: ModalProps) => {
	const portalDiv = document.getElementById('portal');
	if (!portalDiv) {
		throw new Error('The element #portal wasn\'t found');
	}

	if (!isOpen) {
		return null;
	}

	const handleOnClick = ():void => {
		if (type === 'center' && onClose) {
			onClose();
		}
	};

	const className = 'Modal__Container--' + type;

	return ReactDOM.createPortal(
		<>
			<div className={`Modal__Overlay--${overlay ? 'open' : 'close'}`} onClick={handleOnClick}/>
			<div className={className}>
				{children}
			</div>
		</>
		, portalDiv);
};
