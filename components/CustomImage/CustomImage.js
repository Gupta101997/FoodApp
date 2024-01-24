import React from "react";
import { Image, View } from "react-native";
import style from "./styles";


const CustomImage = ({
    src,
    ImageView
}) => {
    return (
        <>
            <Image
                source={src}
                style={[style.Image, ImageView]}
            />
        </>
    )
}


export default CustomImage