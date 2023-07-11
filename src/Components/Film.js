import React from "react";

function Film({url, children}){

    return (
        <>
        <h2><a href={url}>{children}</a></h2>
        </>
    )
}

export default Film;