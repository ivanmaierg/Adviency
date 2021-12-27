
import React, {useState} from 'react';
import Header from './components/Header/Header';
import List from './components/List/List';
import Snowfall from 'react-snowfall';
import './styles.css';
// Import AddGifts from './components/AddGifts/AddGifts';
import {Gift} from './utils/types';
import ListItem from './components/ListItem/ListItem';
import {DeleteModal} from './components/DeleteModal/DeleteModal';
import {demoGifts} from './utils/demoGift';
import {BottomModal} from './components/BottomModal/BottomModal';
import {BottomModalButtons} from './components/BottomModal/BottomModalButtons';
import AddGifts from './components/AddGifts/AddGifts';

const App = () => {
	const [isOpen, setOpen] = useState(false);
	const [gifts, setGifts] = useState<Gift[]>(() => demoGifts);
	const [modalTab, setModalTab] = useState(0);
	const [overlay, setOverlay] = useState(false);

	const handleDeleteItem = (id:number | string) => {
		setGifts(gifts.filter(gift => gift.id !== id));
	};

	// This is pass to the DeleteModal
	const handleDeleteAll = () => {
		setGifts([]);
		setOpen(false);
	};

	const handleOverlay = () => {
		setOverlay(!overlay);
	};

	return (
		<main className="App">
			<Header />
			<section style={{marginTop: '1rem'}}>
				<DeleteModal handleDelete={handleDeleteAll} isOpen={isOpen} closeModal={() => setOpen(false)}/>
			</section>
			<List>
				{gifts.map(gift => <ListItem key={gift.id} handleDeleteItem={handleDeleteItem} gift={gift}/>)}
			</List>
			<BottomModal modalTab={modalTab} setModalTab={setModalTab} overlay={overlay}>
				<BottomModalButtons setModalTab={setModalTab} setOpen={setOpen} handleOverlay={handleOverlay}/>
				<AddGifts setGifts={setGifts} setModalTab={setModalTab} handleOverlay={handleOverlay}/>
			</BottomModal>
			<Snowfall snowflakeCount={20}/>
		</main>
	);
};

export default App;
