import React, {useState} from 'react';
import {Input} from '../Input/Input';
import './AddGifts.css';
import {Gift} from '../../utils/types';

interface Props {
    setGifts:Function;
}

const AddGifts = ({setGifts}: Props) => {
	const [value, setValue] = useState('');
	const handleInputChange = (e:React.FormEvent<HTMLInputElement>) => {
		setValue(e.currentTarget.value);
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
		<form className="Form" onSubmit={handleOnSubmit}>
			<Input type="text" id="gift" value={value} className="Input__container" onChange={handleInputChange} />
		</form>
	);
};

export default AddGifts;
