import React from "react";

function List(props) {
    return (
        props.lis.map(item => { return <li key={item ** 2}>{item}</li> })
    );
}

export default List;