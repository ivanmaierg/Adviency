/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, {useState} from 'react';
import {demoGifts} from 'src/utils/demoGift';
import {Gift} from 'src/utils/types';

interface State {
	selectedGift?:Gift;
    deleteModal:{
        isOpen:boolean;
    };
    gifts:Gift[];
    bottomModal:{
        modalTab:number;
        overlay:boolean;
    }
	total:number;
}

interface IAppContext {
    state:State;
    changeState: (state:State) => void;
}

const initialState = {
	deleteModal: {
		isOpen: false,
	},
	gifts: demoGifts,
	bottomModal: {
		modalTab: 0,
		overlay: false,
	},
	total: (() => {
		let total = 0;
		demoGifts.forEach(el => {
			total += el.price;
		});
		return total;
	})(),
};
const state = initialState;
const changeState = (state:State) => {};

export const AppContext = React.createContext<IAppContext>({state, changeState});

export interface ContextProps{
    children:JSX.Element | JSX.Element[];
}
export const ContextProvider = ({children}:ContextProps) => {
	const [state, setState] = useState<State>(initialState);
	const changeState = (state:any) => {
		setState(state);
	};

	return (<AppContext.Provider value={{state, changeState}}>
		{children}
	</AppContext.Provider>);
};
