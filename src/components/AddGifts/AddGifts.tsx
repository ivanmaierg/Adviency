import React, {useState} from 'react';
import {Input} from '../Input/Input';
import copyIcon from '../../svg/copyIcon.svg';
import randomIcon from '../../svg/randomIcon.svg';
import fileIcon from '../../svg/fileIcon.svg';
import cancelIcon from '../../svg/cancelIcon.svg';
import imageIcon from '../../svg/imageIcon.svg';
import checkIcon from '../../svg/checkIcon.svg';
import './AddGifts.css';
import {Gift} from '../../utils/types';
import {ModalTabProps} from '../BottomModal/BottomModal';
import Button from '../Buttons/Buttons';

interface Props extends ModalTabProps {
    setGifts:Function;
	handleOverlay:Function;
}

const AddGifts = ({setGifts, handleOverlay}: Props) => {
	const [value, setValue] = useState('');
	const handleInputChange = (e:React.FormEvent<HTMLInputElement>) => {
		setValue(e.currentTarget.value);
	};

	const handleCancel = () => {
		handleOverlay();
	};

	const handleOnSubmit = (e:React.FormEvent) => {
		const newGift:Gift = {
			id: Date.now(),
			title: value,
			price: 0,
			quantity: 0,
			dest: '',
		};
		setGifts((prev:string[]) => [...prev, newGift]);
		setValue('');
		e.preventDefault();
	};

	return (
		<div className="AddGifts__container">
			<div className="AddGifts__header">
				<h3>Producto</h3>
				<div className="AddGifts__header--buttons">
					<Button><img src={copyIcon} alt="copy"/></Button>
					<Button><img src={randomIcon} alt="random"/></Button>
				</div>
			</div>
			<form className="AddGifts__Form" onSubmit={handleOnSubmit}>
				<div className="Form__left">
					<Input type="file" id="image" value={value} className="Form__Input--image" onChange={handleInputChange} >
						<img src={fileIcon} alt="file" />
					</Input>
					<Input required type="number" id="quantity" placeHolder="..." value={value} className="Form__Input--quantity" onChange={handleInputChange} />
				</div>
				<div className="Form__middle">
					<Input required type="text" id="name" value={value} className="Form__input" onChange={handleInputChange} />
					<Input required type="text" id="dest" value={value} className="Form__input" onChange={handleInputChange} />
				</div>
				<div className="Form__right">
					<Input required type="number" id="price" value={value} className="Form__input" onChange={handleInputChange} />
				</div>
			</form>
			<div className="AddGift__Buttons">
				<Button className="AddGift__Buttons danger" onClick={handleCancel}>
					<img src={cancelIcon} alt="cancel"/>
				</Button>
				<Button className="AddGift__Buttons secondary">
					<img src={checkIcon} alt="add file"/>
				</Button>
				<Button className="AddGift__Buttons primary">
					<img src={imageIcon} alt="success"/>
				</Button>
			</div>
		</div>

	);
};

export default AddGifts;
