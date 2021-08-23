import React from 'react';
import { Log } from './interfaces';

function Row(props: Log) {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.date}</td>
            <td>{props.useBathroom.toString()}</td>
            <td>{props.lowCalorie.toString()}</td>
            <td>{props.didFast.toString()}</td>
            <td>{props.noJunk.toString()}</td>
            <td>{props.takeVitamins.toString()}</td>
            <td>{props.sleep8.toString()}</td>
            <td>{props.didMeditate.toString()}</td>
            <td>{props.caloriesOut}</td>
            <td>{props.totalDistance}</td>
            <td>{props.runDistance}</td>
            <td>{props.weights}</td>
            <td>{props.cardio}</td>
            <td>{props.yoga}</td>
            <td>{props.weight}</td>
            <td>{props.comment}</td>
            <td>{props.createdAt}</td>
        </tr>
    );
}

export default Row;
