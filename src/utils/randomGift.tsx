export interface randomGift {
    title:string;
    quantity:number;
    price:number;
    src:string;
}

const randomGifts:randomGift[] = [{
	title: 'medias',
	quantity: 3,
	price: 1050,
	src: 'https://http2.mlstatic.com/D_NQ_NP_811899-MLA45269824387_032021-O.webp',
},
{
	title: 'chocolates',
	quantity: 1,
	price: 200,
	src: 'https://http2.mlstatic.com/D_NQ_NP_698720-MLA42304354683_062020-O.webp',
},
{
	title: 'cafe',
	quantity: 1,
	price: 200,
	src: 'https://http2.mlstatic.com/D_NQ_NP_703540-MLA45259648431_032021-O.webp',
}];

export const getRandomGift = ():randomGift => {
	const randomIndex = Math.floor(Math.random() * randomGifts.length);
	return randomGifts[randomIndex];
};
