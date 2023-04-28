export const fetchUpdateList = async (offset = 0) => {
  const fetchData = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`);
  const { results: jsonData } = await fetchData.json();

  return jsonData || [];
}
