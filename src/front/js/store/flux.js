const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters :[],
			favorites: [],
			planets: [],
			species: [],
	
		},
		actions: {

			fetchCharacter: () => {
				fetch("https://swapi.py4e.com/api/people")
				.then((response)=> response.json())
				.then((data) => setStore({characters: data.results}))},

			setFavorites: (name) => {
					const store = getStore();
					setStore({favorites: [...store.favorites, name]})
			},

			removeFavorites: (item) => {
				const store = getStore();
				setStore({ favorites: store.favorites.filter(favorito => favorito !== item) });
			},	

			fetchPlanets: () => {
				fetch("https://swapi.py4e.com/api/planets")
				.then((response)=> response.json())
				.then((data) => setStore({planets: data.results}))},

			fetchSpecies: () => {
				fetch("https://swapi.py4e.com/api/species")
				.then((response)=> response.json())
				.then((data) => setStore({species: data.results}))},
		}
	};
};

export default getState;
