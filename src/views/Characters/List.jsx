import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';


export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const status = new URLSearchParams(location.search).get('status') ?? 'all';
  const location = useLocation();

  

  useEffect(() => {
    const getCharacters = async () => {
      setLoading(true);

      const statusParams = new URLSearchParams(location.search).get('status');

      const url = status === 'all' || !status 
      ? 'https://rickandmortyapi.com/api/character'
      : `https://rickandmortyapi.com/api/character?status=${statusParams}`;
      const res = await fetch(url);
      const { results } = await res.json();
      setCharacters(results);
      setLoading(false);

    };
    getCharacters();
  }, [location.search]);

  return (
    <>
    <h1>List of Characters</h1>
    {loading ? (
      <p>Loading</p>
    ) : (
      <>
      <ul>
        {characters.map((character) => {
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
