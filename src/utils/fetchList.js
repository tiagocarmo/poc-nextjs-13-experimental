import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { gql } from '@apollo/client';

let client = null;

const getClient = () => {
  if (!client || typeof window === 'undefined') {
    client = new ApolloClient({
      link: new HttpLink({
        uri: 'https://beta.pokeapi.co/graphql/v1beta',
      }),
      cache: new InMemoryCache({
        addTypename: false
      }),
    });
  }

  return client;
};

export const fetchUpdateList = async (offset = 0) => {
  const query = gql`
    query samplePokeAPIquery {
      pokemon_v2_pokemon(limit: 20, offset: ${offset}) {
        name
      }
    }
  `;

  const client = getClient();
  const { data: { pokemon_v2_pokemon: jsonData } } = await client.query({ query });

  return jsonData || [];
}
