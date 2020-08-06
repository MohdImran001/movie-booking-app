import { readable } from 'svelte/store';

const movies = readable([
{
	id: 1,
	name: 'Incredibles 2',
	price: 299,
	portrait: '/assets/images/Incredibles_2/portrait.jpg',
	landscape: '/assets/images/Incredibles_2/landscape.jpg'
},
{
	id: 2,
	name: 'Alita Battle Angel',
	price: 249,
	portrait: '/assets/images/Alita Battle Angel/portrait.png',
	landscape: '/assets/images/Alita Battle Angel/landscape.jpg'
},
{
	id: 3,
	name: 'The Lion King',
	price: 579,
	portrait: '/assets/images/The Lion King/portrait.jpg',
	landscape: '/assets/images/The Lion King/landscape.webp'
},
{
	id: 4,
	name: 'Toy Story 4',
	price: 199,
	portrait: '/assets/images/Toy Story 4/portrait.jpg',
	landscape: '/assets/images/Toy Story 4/landscape.jpg'
},
{
	id: 5,
	name: 'How To Train Your Dragon',
	price: 239,	
	portrait: '/assets/images/How To Train Your Dragon/portrait.jpg',
	landscape: '/assets/images/How To Train Your Dragon/landscape.jpg'
},
{
	id: 6,
	name: 'Thor Ragnarok',
	price: 334,
	portrait: '/assets/images/Thor Ragnarok/portrait.jpg',
	landscape: '/assets/images/Thor Ragnarok/landscape.jpg'
},
{
	id: 7,
	name: 'Avengers Infinity War',
	price: 459,
	portrait: '/assets/images/Avengers Infinity War/portrait.jpg',
	landscape: '/assets/images/Avengers Infinity War/landscape.jpg'
},
{
	id: 8,
	name: 'Spiderman: Homecoming',
	price: 630,
	portrait: '/assets/images/Spiderman: Homecoming/portrait.jpg',
	landscape: '/assets/images/Spiderman: Homecoming/landscape.jpg'
}
])

export { movies };