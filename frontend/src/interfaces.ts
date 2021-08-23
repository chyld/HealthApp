export interface Log {
    id: number;
    date: string;
    useBathroom: boolean;
    lowCalorie: boolean;
    didFast: boolean;
    noJunk: boolean;
    takeVitamins: boolean;
    sleep8: boolean;
    didMeditate: boolean;
    caloriesOut: number;
    totalDistance: number;
    runDistance: number;
    weights: number;
    cardio: number;
    yoga: number;
    weight?: number;
    comment?: string;
    createdAt: string;
}

export interface LogArray {
    logs: Log[];
}
