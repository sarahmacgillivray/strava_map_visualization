import React, { useEffect, useRef } from 'react';
import { Howl } from 'howler';

const AudioEffects: React.FC<{ speed: number }> = ({ speed }) => {
    const soundRef = useRef<Howl | null>(null);

    useEffect(() => {
        if (speed > 10) {
            soundRef.current = new Howl({
                src: ['/assets/audio/boost.mp3'],
                volume: 0.5,
            });
            soundRef.current.play();
        }
    }, [speed]);

    return null;
};

export default AudioEffects;