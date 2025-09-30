export interface Character {
    id: string;
    name: string;
    sprite: string;
    speed: number;
}

export interface GPSPoint {
    latitude: number;
    longitude: number;
    timestamp: number;
}

export interface ActivityData {
    id: string;
    distance: number;
    duration: number;
    route: GPSPoint[];
    characterId: string;
}