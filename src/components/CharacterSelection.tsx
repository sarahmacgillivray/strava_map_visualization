import React, { useState } from 'react';
import characterData from '../assets/icons/characterData'; // Assuming character data is stored in this file

const CharacterSelection: React.FC = () => {
    const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null);

    const handleCharacterSelect = (character: string) => {
        setSelectedCharacter(character);
    };

    return (
        <div className="character-selection">
            <h2>Select Your Character</h2>
            <div className="character-list">
                {characterData.map((character) => (
                    <div
                        key={character.id}
                        className={`character-item ${selectedCharacter === character.name ? 'selected' : ''}`}
                        onClick={() => handleCharacterSelect(character.name)}
                    >
                        <img src={character.icon} alt={character.name} />
                        <p>{character.name}</p>
                    </div>
                ))}
            </div>
            {selectedCharacter && <p>You have selected: {selectedCharacter}</p>}
        </div>
    );
};

export default CharacterSelection;