import React from "react";
import Film from "./Film";
import './FilmList.css'

function FilmList ({filmsData}){
    const filmNodes = filmsData.map(function(film){
        return (
            <Film key={film.id} url={film.url}>{film.name}</Film>
        )
    })

    return (
        <>
        {filmNodes}
        </>
    )
};


export default FilmList;