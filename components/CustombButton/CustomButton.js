import React from "react";
import { TouchableOpacity,Text,Image } from "react-native";
import styles from "./style";

const CustomButton = ({
    onPress,
    buttonView,
    InputText,
    textStyle,
    src,
    imageStyle
}) => {

    return (
        <TouchableOpacity
            style={[styles.button, buttonView]}
            onPress={onPress}
        >
            {src ? <Image source={src}  style={[imageStyle]} /> : <Text style={[textStyle]}>{InputText}</Text>}
        </TouchableOpacity>
    )
}


export default CustomButton