import React from "react";
import { useState, useEffect } from "react";

import axios from "axios";

const PokemonImg = ({url}) => {

    const [imgUrl, setImgUrl] = useState();

    useEffect(() => {
        axios.get(url).then(res => {
            setImgUrl(res.data.sprites.front_default);
        })
    }, [])

    return (
        <img src={imgUrl} />
    )
}

export default PokemonImg;