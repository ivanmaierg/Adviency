import React, {useState} from 'react';
import Button from '../Buttons/Buttons';
import Triangle from '../../svg/triangleIcon.svg';
import {ModalTabProps} from './BottomModal';
import './BottomModalButtons.css';

interface Props extends ModalTabProps{
	setOpen:Function;
	handleOverlay:Function;
	total:number;
}

export const BottomModalButtons = ({setModalTab, setOpen, handleOverlay, total}:Props) => {
	const [isOpen, setIsOpen] = useState(true);

	const handleOnClickAddGiftButton = () => {
		handleOverlay();
		setModalTab(1);
	};

	return (
		<div className={`BottomModal__Buttons  ${isOpen ? 'open' : 'close'}`} >
			<Button className="BottomModal__active-button" onClick={() => {
				setIsOpen(!isOpen);
			}}><img src={Triangle} alt="open / close icon"></img></Button>
			<div className="BottomModal__content">
				<div className="BottomModal__content--total">Total<span> $ {total.toFixed(2)}</span></div>
				<div className={'BottomModal__content--buttons'}>
					<Button className="primary BottomModal--button" onClick={handleOnClickAddGiftButton}>Agregar regalos</Button>
					<Button className="secondary BottomModal--button" onClick={() => setModalTab(2)}>Previsualizar</Button>
					<Button className="danger BottomModal--button" onClick={() => setOpen(true)}>Borrar todo</Button>
				</div>
			</div>
		</div>
	);
};
