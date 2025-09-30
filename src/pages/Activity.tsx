import React, { useEffect, useState } from 'react';
import GPSRouteMap from '../components/GPSRouteMap';
import CharacterSelection from '../components/CharacterSelection';
import AudioEffects from '../components/AudioEffects';

const Activity: React.FC = () => {
    const [activityData, setActivityData] = useState(null);
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    useEffect(() => {
        // Fetch activity data from Strava API
        const fetchActivityData = async () => {
            try {
                const response = await fetch('https://api.strava.com/v3/activities'); // Replace with actual endpoint and token
                const data = await response.json();
                setActivityData(data);
            } catch (error) {
                console.error('Error fetching activity data:', error);
            }
        };

        fetchActivityData();
    }, []);

    return (
        <div>
            <h1>Activity Details</h1>
            {selectedCharacter ? (
                <>
                    <CharacterSelection onSelectCharacter={setSelectedCharacter} />
                    <GPSRouteMap activityData={activityData} />
                    <AudioEffects />
                </>
            ) : (
                <CharacterSelection onSelectCharacter={setSelectedCharacter} />
            )}
        </div>
    );
};

export default Activity;