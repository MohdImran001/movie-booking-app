import { readable } from 'svelte/store';

const movies = readable([
{
	id: 1,
	name: 'Incredibles 2',
	price: 200,
	portrait: 'https://cdn.chili.com/images/public/cms/d7/53/9c/b1/d7539cb1-cb62-4d89-8a94-94df8b20afe8.jpg?width=800',
	landscape: 'https://www.moviedash.com/wp-content/uploads/2018/04/The-Incredibles-2-Trailer-Release-Date.jpg'
},
{
	id: 2,
	name: 'Alita Battle Angel',
	price: 240,
	portrait: 'https://upload.wikimedia.org/wikipedia/en/e/ee/Alita_Battle_Angel_%282019_poster%29.png',
	landscape: 'https://d32qys9a6wm9no.cloudfront.net/images/movies/landscape/e3/84a73299b33795320d5af5beea4dc7dd_700x259.jpg?t=1559228101'
},
{
	id: 3,
	name: 'The Lion King',
	price: 570,
	portrait: 'https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_.jpg',
	landscape: 'https://i.insider.com/5c739a9deb3ce83fe05045e3?width=1100&format=jpeg&auto=webp'
},
{
	id: 4,
	name: 'Toy Story 4',
	price: 100,
	portrait: 'https://m.media-amazon.com/images/M/MV5BMTYzMDM4NzkxOV5BMl5BanBnXkFtZTgwNzM1Mzg2NzM@._V1_.jpg',
	landscape: 'https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/1553003892023-ZY0BDUJ1FE5LH3J1IQKV/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USOFn4xF8vTWDNAUBm5ducQhX-V3oVjSmr829Rco4W2Uo49ZdOtO_QXox0_W7i2zEA/wonderful-full-trailer-for-pixars-toy-stoy-4-social.jpg?format=2500w'
},
{
	id: 5,
	name: 'How to train your Dragon',
	price: 230,	
	portrait: 'https://m.media-amazon.com/images/M/MV5BMjIwMDIwNjAyOF5BMl5BanBnXkFtZTgwNDE1MDc2NTM@._V1_.jpg',
	landscape: 'https://flxt.tmsimg.com/assets/p13022653_v_h8_ac.jpg'
},
{
	id: 6,
	name: 'Thor Ragnarok',
	price: 300,
	portrait: 'https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg',
	landscape: 'https://www.geekalerts.com/u/THOR-RAGNAROK-DVD-Blu-ray-4K.jpg'
},
{
	id: 7,
	name: 'Avengers Infinity War',
	price: 450,
	portrait: 'https://terrigen-cdn-dev.marvel.com/content/qa/1x/5ae4ca-MLou_13x19_DolbyAtAMC_Handout_v4_online_lg.jpg',
	landscape: 'https://www.motherjones.com/wp-content/uploads/2018/04/avengers-infinity-war-official-poster.jpg?w=990'
},
{
	id: 8,
	name: 'Spiderman: Homecoming',
	price: 630,
	portrait: 'https://i.pinimg.com/originals/c8/66/93/c86693302b6981209afe2def102d0668.jpg',
	landscape: 'https://images2.alphacoders.com/837/837434.jpg'
}
])

export { movies };