import React from "react";

interface Props {
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

function Row(props: Props) {
  return (
    <div>
      <div>The Row</div>
      <div>{props.id}</div>
      <div>{props.date}</div>
      <div>{props.useBathroom.toString()}</div>
      <div>{props.lowCalorie.toString()}</div>
      <div>{props.didFast.toString()}</div>
      <div>{props.noJunk.toString()}</div>
      <div>{props.takeVitamins.toString()}</div>
      <div>{props.sleep8.toString()}</div>
      <div>{props.didMeditate.toString()}</div>
      <div>{props.caloriesOut}</div>
      <div>{props.totalDistance}</div>
      <div>{props.runDistance}</div>
      <div>{props.weights}</div>
      <div>{props.cardio}</div>
      <div>{props.yoga}</div>
      <div>{props.weight}</div>
      <div>{props.comment}</div>
      <div>{props.createdAt}</div>
    </div>
  );
}

export default Row;
