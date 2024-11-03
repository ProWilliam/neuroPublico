import React, { useState, useEffect } from 'react';
import {DropDownIcon, DropUpIcon} from '../Icons/index';
import './RyckAndMortyApi.styles.css';

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  image: string;
}

interface ApiResponse {
  results: Character[];
}

export const RickAndMortyList: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data: ApiResponse = await response.json();
      setCharacters(data.results);
      setLoading(false);
    } catch (err) {
      setError('Error al cargar los personajes');
      setLoading(false);
    }
  };

  const toggleCharacter = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  if (loading) {
    return <div className="center-text">Cargando personajes...</div>;
  }

  if (error) {
    return <div className="center-text">{error}</div>;
  }

  return (
    <div className="container-api">
      <h1 className="title">Personajes de Rick y Morty</h1>
      <div className="card-list">
        {characters.map((character) => (
          <div 
            key={character.id} 
            className="list-item" 
            onClick={() => toggleCharacter(character.id)}
          >
            <img src={character.image} alt={character.name} className="avatar" />
            <div className="character-info">
              <h2 className="character-name">{character.name}</h2>
              <p className="character-species">{character.species}</p>
            </div>
            {expandedId === character.id ? (
              <DropUpIcon />
            ) : (
              <DropDownIcon />
            )}
          </div>
        ))}

        {/* Expanded details section */}
        {expandedId && (
          <div className="details">
            {characters
              .filter((character) => character.id === expandedId)
              .map((character) => (
                <div key={character.id}>
                  <p><strong>Estado:</strong> {character.status}</p>
                  <p><strong>Género:</strong> {character.gender}</p>
                  <p><strong>Origen:</strong> {character.origin.name}</p>
                  <p><strong>Ubicación:</strong> {character.location.name}</p>
                  {character.type && (
                    <p><strong>Tipo:</strong> {character.type}</p>
                  )}
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};
