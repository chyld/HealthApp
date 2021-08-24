import React from 'react';

interface Props {
    create: () => void;
}

function Form(props: Props) {
    return (
        <div>
            <div>The Form</div>
            <input type="text"></input>
            <button onClick={props.create}>Submit</button>
        </div>
    );
}

export default Form;
