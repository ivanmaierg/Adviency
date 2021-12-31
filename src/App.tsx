
import React, {useState, useContext} from 'react';
import Header from './components/Header/Header';
import List from './components/List/List';
import Snowfall from 'react-snowfall';
import './styles.css';
import ListItem from './components/ListItem/ListItem';
import {DeleteModal} from './components/DeleteModal/DeleteModal';
import {BottomModal} from './components/BottomModal/BottomModal';
import {BottomModalButtons} from './components/BottomModal/BottomModalButtons';
import AddGifts from './components/AddGifts/AddGifts';
import {AppContext} from './context/AppContext';
import {demoGifts} from './utils/demoGift';
import {Gift} from 'src/utils/types';

const App = () => {
	const {state, changeState} = useContext(AppContext);
	const [isOpen, setOpen] = useState(false);
	const [modalTab, setModalTab] = useState(0);
	const [overlay, setOverlay] = useState(false);

	const handleDeleteItem = (id:number | string) => {
		const filterGifts:Gift[] = state.gifts.filter(gift => gift.id !== id);
		changeState({...state, gifts: filterGifts});
	};

	// This is pass to the DeleteModal
	const handleDeleteAll = () => {
		changeState({...state, gifts: []});
		setOpen(false);
	};

	const handleOverlay = (value?:boolean):void => {
		if (value) {
			setOverlay(value);
		} else {
			setOverlay(!overlay);
		}
	};

	const handleEdit = (g:Gift) => {
		if (!demoGifts.map(el => el.id).includes(g.id)) {
			console.log(state.selectedGift?.price);
			changeState({...state, selectedGift: g});
			setModalTab(1);
		}
	};

	return (
		<main className="App">
			<Header />
			<section style={{marginTop: '1rem'}}>
				<DeleteModal handleDelete={handleDeleteAll} isOpen={isOpen} closeModal={() => setOpen(false)}/>
			</section>
			<List>
				{state.gifts.map(gift => <ListItem handleEdit={handleEdit} key={gift.id} handleDeleteItem={handleDeleteItem} gift={gift}/>)}
			</List>
			<BottomModal modalTab={modalTab} setModalTab={setModalTab} overlay={overlay}>
				<BottomModalButtons total={state.total} setModalTab={setModalTab} setOpen={setOpen} handleOverlay={handleOverlay}/>
				<AddGifts setModalTab={setModalTab} handleOverlay={handleOverlay}/>
			</BottomModal>
			<Snowfall snowflakeCount={20}/>
		</main>
	);
};

export default App;
