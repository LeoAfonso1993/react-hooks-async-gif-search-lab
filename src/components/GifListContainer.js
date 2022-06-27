import React, { useEffect, useState } from "react";
import GifSearch from "./GifSearch.js"
import GifList from "./GifList.js"

function GifListContainer() {

    const [search, setSearch] = useState([])
    const [showGif, setShowGif] = useState([])

    useEffect(() => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=76W63N4nXvRXOuT0i4flqesqMlJl20Yj&rating=g&limit=3`)
        .then((response) => response.json())
        .then(({data}) => {
            const firstThree = data.map((item) => ({ url: item.images.original.url }))
            setShowGif(firstThree)
        })
    }, [search])


    return (
        <>
            <GifSearch search={search} setSearch={setSearch} />
            <GifList showGif={showGif} />
        </>
    )
}

export default GifListContainer;