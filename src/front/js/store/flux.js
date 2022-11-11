const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters :[]
		
		},
		actions: {

			fetchCharacter: () => {
				fetch("https://swapi.dev/api/people")
				.then((response)=> response.json())
				.then((data) => setStore({characters: data.results}))}
			
		}
	};
};

export default getState;
