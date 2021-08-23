import React from "react";
import { gql, useQuery } from "@apollo/client";
import Row from "./Row";

function Grid() {
  interface Log {
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

  interface LogArray {
    logs: Log[];
  }

  const LOGS_QUERY = gql`
    query {
      logs {
        id
        date
        useBathroom
        lowCalorie
        didFast
        noJunk
        takeVitamins
        sleep8
        didMeditate
        caloriesOut
        totalDistance
        runDistance
        weights
        cardio
        yoga
        weight
        comment
        createdAt
      }
    }
  `;

  const { data } = useQuery<LogArray>(LOGS_QUERY);

  return (
    <div>
      {data?.logs.map((log) => (
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
    </div>
  );
}

export default Grid;
