/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, {SyntheticEvent, useContext, useState, useRef, useEffect} from 'react';
import {Input} from '../Input/Input';
import copyIcon from '../../svg/copyIcon.svg';
import randomIcon from '../../svg/randomIcon.svg';
import fileIcon from '../../svg/fileIcon.svg';
import cancelIcon from '../../svg/cancelIcon.svg';
import imageIcon from '../../svg/imageIcon.svg';
import checkIcon from '../../svg/checkIcon.svg';
import './AddGifts.css';
import {Gift, Title} from '../../utils/types';
import {ModalTabProps} from '../BottomModal/BottomModal';
import Button from '../Buttons/Buttons';
import {AppContext} from 'src/context/AppContext';
import {demoGifts} from 'src/utils/demoGift';
import {getRandomGift} from '../../utils/randomGift';

interface Props extends ModalTabProps {
	handleOverlay:Function;
}
const regex = /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

const Titles:Title = {
	quantity: 'Cantidad',
	name: 'Nombre',
	price: 'Precio',
	destination: 'Destinatario',
	image: 'Imagen',
};

const AddGifts = ({handleOverlay, setModalTab}: Props) => {
	const [values, setValues] = useState({selected: '', isValid: true, quantity: '', name: '', price: '', destination: '', image: ''});
	const {state, changeState} = useContext(AppContext);
	const imageInput = useRef<HTMLInputElement>(null);
	const [showInput, setShowInput] = useState(false);
	useEffect(() => {
		if (state.selectedGift) {
			handleOverlay();
			const gift = state.selectedGift;
			const newGift = {
				quantity: gift.quantity.toString(), name: gift.title, price: gift.price.toString(), destination: gift.dest, image: gift.src || '',
			};
			setValues({...values, ...newGift});
		}
	}, [state.selectedGift]);

	const handleCancel = () => {
		handleOverlay(false);
		setModalTab(0);
	};

	console.log(state);
	const handleOnSubmit = (e:React.FormEvent) => {
		e.preventDefault();
		if (state.selectedGift) {
			const gift:Gift = {
				id: state.selectedGift.id,
				title: values.name,
				price: Number(values.price) * Number(values.quantity),
				quantity: Number(values.quantity),
				dest: values.destination,
				src: values.image,
			};
			const gifts = state.gifts.map(el => {
				if (el.id === gift.id) {
					return gift;
				}

				return el;
			});
			changeState({...state, gifts, selectedGift: undefined});
		} else {
			const newGift:Gift = {
				id: Date.now(),
				title: values.name,
				price: Number(values.price) * Number(values.quantity),
				quantity: Number(values.quantity),
				dest: values.destination,
				src: values.image,
			};
			if (state.gifts.length !== 0 && state.gifts[0].id === demoGifts[0].id) {
				state.gifts = [];
				state.total = 0;
			}

			const gifts = state?.gifts.concat(newGift);
			const total = state.total + newGift.price;
			changeState({...state, total, gifts});
		}

		handleOverlay(false);
		setModalTab(0);
	};

	const handleInputChange = (e:SyntheticEvent) => {
		console.log('ja', getRandomGift());
		const input = e.target as HTMLInputElement;
		const {name} = input;
  		const {value} = input;
		console.log(name);
		setValues({...values, [name]: value});
		e.preventDefault();
	};

	const handleOnFocus = (e:SyntheticEvent) => {
		const input = e.target as HTMLInputElement;
		const {name} = input;
		setValues({...values, selected: name});
	};

	const handleInputImage = () => {
		setShowInput(!showInput);
		imageInput.current?.focus();
	};

	const handleCopy = () => {
		if (state.selectedGift) {
			const newGift = {
				id: Date.now(),
				title: values.name,
				price: Number(values.price) * Number(values.quantity),
				quantity: Number(values.quantity),
				dest: values.destination,
				src: values.image,
			};
			const gifts = state?.gifts.concat(newGift);
			const total = state.total + newGift.price;
			changeState({...state, gifts, total});
			handleOverlay(false);
			setModalTab(0);
		}
	};

	const handleRandom = () => {
		console.log('random');
		const {title, price, quantity, src} = getRandomGift();
		if (!state.selectedGift) {
			console.log('ja');
			const gift = {
				name: title,
				price: price.toString(),
				quantity: quantity.toString(),
				image: src,
				destination: '',
			};
			setValues(
				{...values, ...gift},
			);
		}
	};

	return (
		<div className="AddGifts__container">
			<div className="AddGifts__header">
				<h3>{Titles[values.selected]}</h3>
				<div className="AddGifts__header--buttons">
					<Button onClick={() => handleCopy()}><img src={copyIcon} alt="copy" /></Button>
					<Button onClick={() => handleRandom()}><img src={randomIcon} alt="random"/></Button>
				</div>
			</div>
			<form onSubmit={handleOnSubmit}>
				<div className="AddGifts__Form">
					<div className="Form__left">
						<div className="Form__Input--image">
							<img src={values.image && values.image.match(regex) ? values.image : fileIcon} alt="file" />
						</div>
						<Input onFocus={handleOnFocus} required type="number" id="quantity" placeHolder="..." className="Form__Input--quantity" onChange={handleInputChange} value={values.quantity}/>
					</div>
					<div className="Form__middle">
						<Input onFocus={handleOnFocus} required type="text" id="name" className="Form__input" onChange={handleInputChange} value={values.name}/>
						<Input onFocus={handleOnFocus} required type="text" id="destination" className="Form__input" onChange={handleInputChange} value={values.destination}/>
					</div>
					<div className="Form__right">
						<Input onFocus={handleOnFocus} required type="number" id="price" className="Form__input" onChange={handleInputChange} value={values.price}/>
					</div>
					<Input autoFocus ref={imageInput} onFocus={handleOnFocus} type="text" id="image" className={showInput ? 'Form__input--img show' : 'Form__input--img'} onChange={handleInputChange} value={values.image} />
				</div>
				<div className="AddGift__Buttons">
					<Button className="AddGift__Buttons danger" onClick={handleCancel}>
						<img src={cancelIcon} alt="cancel"/>
					</Button>
					<Button type="button" onClick={handleInputImage} className="AddGift__Buttons secondary">
						<img src={imageIcon} alt="add file"/>
					</Button>
					<Button type="submit" className="AddGift__Buttons primary">
						<img src={checkIcon} alt="success"/>
					</Button>
				</div>
			</form>
		</div>

	);
};

export default AddGifts;
