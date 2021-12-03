import React from 'react'

interface Props {
    onChange:React.ChangeEventHandler<HTMLInputElement>;
    value:any;
    type:string;
    id?:string;
    classNameLabel?:string;
    className:string
}

export const Input = ({value,onChange,type,id, classNameLabel,className,...rest}:Props) => {
    return (
        <label htmlFor={id} className={classNameLabel}>
              <input id={id} type={type} value={value} className={className} onChange={onChange} {...rest}/>
        </label>
      
    )
}
