/* eslint-disable no-undef */
import React from 'react';
import {Modal} from '../Modal/Modal';

import './BottomModal.css';

export interface ModalTabProps {
	setModalTab:Function;
}

interface Props {
	children:JSX.Element[];
	modalTab:number;
	setModalTab:React.Dispatch<React.SetStateAction<number>>;
	overlay:boolean;
}

export const BottomModal = ({children, modalTab, overlay}: Props) => (
	<Modal type="bottom" overlay={overlay}>
		{children[modalTab]}
	</Modal>
);

