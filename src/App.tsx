
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

const App = () => {
	const [isOpen, setOpen] = useState(false);
	const [isOpenModalBottom, setOpenModalBottom] = useState(false);
	const [gifts, setGifts] = useState<Gift[]>(() => demoGifts);
	const handleDeleteItem = (id:number | string) => {
		setGifts(gifts.filter(gift => gift.id !== id));
	};

	const handleDeleteAll = () => {
		setGifts([]);
		setOpen(false);
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
			<BottomModal isOpen={isOpenModalBottom} handleClose={() => setOpenModalBottom(!isOpenModalBottom)} isVisible={false}/>
			<Snowfall snowflakeCount={20}/>
		</main>
	);
};

export default App;
