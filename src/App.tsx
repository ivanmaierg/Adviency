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
import {AppContext, State} from './context/AppContext';
import {demoGifts} from './utils/demoGift';
import {Gift} from 'src/utils/types';

const App = () => {
	const {state, changeState} = useContext(AppContext);
	const [isOpen, setOpen] = useState(false);
	const [modalTab, setModalTab] = useState(0);
	const [overlay, setOverlay] = useState(false);
	console.log(state);

	React.useEffect(() => {
		try {
			const data = window.localStorage.getItem('state');
			if (data) {
				const localStorageState = ((data:string):State => JSON.parse(data))(data);
				if (localStorageState.gifts.length === 0) {
					const total = (() => {
						let total = 0;
						demoGifts.forEach(el => {
							total += el.price;
						});
						return total;
					})();
					changeState({...state, ...localStorageState, gifts: demoGifts, total});
				} else {
					changeState({...state, ...localStorageState});
				}
			}
		} catch (e) {
			let err:any;
			if (typeof e === 'string') {
				err = e.toUpperCase();
			} else if (e instanceof Error) {
				err = e.message; // Works, `e` narrowed to Error
			}

			changeState({...state, error: err});
		}
	}, []);
	React.useEffect(() => {
		window.localStorage.setItem('state', JSON.stringify(state));
	}, [state]);

	const handleDeleteItem = (id:number | string) => {
		const filterGifts:Gift[] = state.gifts.filter(gift => gift.id !== id);
		let total = 0;
		filterGifts.forEach((el => {
			total = Number(el.price);
		}));
		changeState({...state, gifts: filterGifts, total});
	};

	// This is pass to the DeleteModal
	const handleDeleteAll = () => {
		changeState({...state, gifts: [], total: 0});
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
