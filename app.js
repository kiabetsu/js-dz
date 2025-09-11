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
  getData('https://pokeapi.co/api/v2/pokemon/ditto', 'cant find pokemon')
    .then((data) => getData(data.abilities[0].ability.url, 'cant find ability'))
    .then((data) =>
      console.log(data.flavor_text_entries.find((lang) => lang.language.name === 'en')),
    )
    .catch((error) => console.log('cant find ability language', error));
};

getAbility();
