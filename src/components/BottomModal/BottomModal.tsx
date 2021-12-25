import React, {MouseEventHandler} from 'react';
import Button from '../Buttons/Buttons';
import Triangle from '../../svg/triangleIcon.svg';
import './BottomModal.css';

interface Props {
	isOpen:boolean;
	isVisible:boolean;
	handleClose:MouseEventHandler;
}

export const BottomModal = ({isOpen, isVisible = true, handleClose}: Props) => (

	<div className={`BottomModal__container  ${isOpen ? 'open' : 'close'} ${isVisible ? '' : 'notVisible'}`}>
		<Button className="BottomModal__active-button" onClick={handleClose}><img src={Triangle} alt="open / close icon"></img></Button>
		<div className="BottomModal__content">
			<div className="BottomModal__content--total">Total<span>$1220,00</span></div>
			<div className={'BottomModal__content--buttons'}>
				<Button className="primary BottomModal--button">Agregar regalos</Button>
				<Button className="secondary BottomModal--button">Previsualizar</Button>
				<Button className="danger BottomModal--button">Borrar todo</Button>
			</div>
		</div>
	</div>
);

