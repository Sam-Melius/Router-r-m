import { useEffect, useState } from 'react';


export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const getCharacters = async () => {

      const res = await fetch('https://rickandmortyapi.com/api/character');
      const { data } = await res.json();
      const characterData = data.map((character) => ({
        id: character.id,
        name: `${character.name}`
      }));
      setCharacters(characterData);
      setLoading(false);

    };
    getCharacters();
  }, []);

  return (
    <>
    <h1>List of Characters</h1>
    {loading ? (
      <p>Loading</p>
    ) : (
      <>
      <ul>
        {characters.map(() => {
          return (
            <li key={character.id}>
              {character.name}
            </li>
          )
        })}
      </ul>
      </>
    )}
    </>
  )
}
