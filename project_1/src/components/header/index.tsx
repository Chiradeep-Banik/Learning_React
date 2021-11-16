import React from "react";

export default function Header(props: { mov: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) {
    return <h1>{props.mov}</h1>;
}