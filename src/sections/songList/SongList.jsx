import React from "react";

export default function SongList({songs, songsType, rating, color}){
    return(
        <section style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", border: "2px", borderColor: "#000000", borderStyle: "solid", marginBottom: "20px"}}>
            <h1>{songsType}</h1>
            <h3>Rating {rating}</h3>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start"}}>
                {
                    songs.map((song,index) => <h2 key={index} style={{padding: "30px", marginRight: "10px", background: color}}>{song}</h2>)
                }
            </div>
        </section>
    )
}