import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react'

function GifList({showGif}) {

    return (
        <ul>
            {showGif.map((gif) => {
                return (
                    <Card style={{marginTop: "20px"}}>
                        <Image src={gif.url} alt="gif" wrapped ui={false} />
                    </Card>
                )
            })}
        </ul>
    )
}

export default GifList;