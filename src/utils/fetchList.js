export const fetchUpdateList = async (offset = 0) => {
  const urlGraphql = 'https://beta.pokeapi.co/graphql/v1beta';
  const headers = {
    'content-type': 'application/json',
    accept: '*/*'
  };
  const query = `
    query samplePokeAPIquery {
      pokemon_v2_pokemon(limit: 20, offset: ${offset}) {
        name
      }
    }
  `;

  const fetchData = await fetch(urlGraphql, {
    method: 'POST',
    body: JSON.stringify({
      query
    }),
    headers
  });
  const { data: { pokemon_v2_pokemon: jsonData } } = await fetchData.json();

  return jsonData || [];
}
