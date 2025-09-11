const getData = (url, errorMessage) => {
  return fetch(url).then((response) => {
    {
      if (!response.ok) {
        throw new Error(errorMessage);
      }
      return response.json();
    }
  });
};

const getAbility = () => {
  getData('https://pokeapi.co/api/v2/pokemon/ditto', 'can not receive pokemon')
    .then((data) => getData(data.abilities[0].ability.url, 'cant receive ability'))
    .then((data) =>
      console.log(data.flavor_text_entries.find((lang) => lang.language.name === 'en')),
    );
};

getAbility();
