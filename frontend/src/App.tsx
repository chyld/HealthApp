import React from 'react';
import './App.css';
import Form from './Form';
import Grid from './Grid';
import { gql, useQuery, useMutation } from '@apollo/client';
import { LogArray } from './interfaces';

// ------------------------------------------------------------------------- //

const ADD_LOG = gql`
    mutation AddLogMutation($addLogData: LogCreateInput!) {
        addLog(data: $addLogData) {
            id
            date
        }
    }
`;

// ------------------------------------------------------------------------- //

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

// ------------------------------------------------------------------------- //

function App() {
    const [addTodo, { data: mutationData }] = useMutation(ADD_LOG);
    const { data: queryData, refetch } = useQuery<LogArray>(LOGS_QUERY);

    function create() {
        addTodo({
            variables: {
                addLogData: {
                    useBathroom: true,
                    caloriesOut: 1234,
                    totalDistance: 10.02,
                },
            },
        });

        refetch();
    }

    return (
        <div>
            <div>Application Title</div>
            <div>
                <Form create={create}></Form>
            </div>
            <div>
                <Grid data={queryData} refetch={refetch}></Grid>
            </div>
        </div>
    );
}

export default App;
