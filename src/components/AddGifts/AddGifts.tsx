import React,{useState} from 'react'
import Button, { AddButton } from '../Buttons/Buttons';
import { Input } from '../Input/Input';
import './AddGifts.css';

interface Props {
    setGifts:Function;
}

export const AddGifts = ({setGifts}: Props) => {
    const [value, setValue] = useState("");
    const handleInputChange = (e:React.FormEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    }
    const handleOnSubmit = (e:React.FormEvent) => {
        setGifts((prev:string[]) => [...prev,value]);
        setValue("");
        e.preventDefault();
  } 
    return (
        <form  className="Form" onSubmit={handleOnSubmit}>
           <Input type="text" id="gift" value={value} className="Input__container" onChange={handleInputChange} />
            <AddButton />
        </form>
    )
}
