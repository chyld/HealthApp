import React from 'react';
import Row from './Row';
import { LogArray } from './interfaces';

interface Props {
    data: LogArray | undefined;
    refetch: any;
}

function Grid(props: Props) {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Date</th>
                        <th>Use Bathroom</th>
                        <th>Low Calorie</th>
                        <th>Did Fast</th>
                        <th>No Junk</th>
                        <th>Take Vitamins</th>
                        <th>Sleep 8</th>
                        <th>Did Meditate</th>
                        <th>Calories Out</th>
                        <th>Total Distance</th>
                        <th>Run Distance</th>
                        <th>Weights</th>
                        <th>Cardio</th>
                        <th>Yoga</th>
                        <th>Weight</th>
                        <th>Comment</th>
                        <th>Created At</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data?.logs.map((log) => (
                        <Row
                            key={log.id}
                            id={log.id}
                            date={log.date}
                            useBathroom={log.useBathroom}
                            lowCalorie={log.lowCalorie}
                            didFast={log.didFast}
                            noJunk={log.noJunk}
                            takeVitamins={log.takeVitamins}
                            sleep8={log.sleep8}
                            didMeditate={log.didMeditate}
                            caloriesOut={log.caloriesOut}
                            totalDistance={log.totalDistance}
                            runDistance={log.runDistance}
                            weights={log.weights}
                            cardio={log.cardio}
                            yoga={log.yoga}
                            weight={log.weight}
                            comment={log.comment}
                            createdAt={log.createdAt}
                        ></Row>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Grid;
