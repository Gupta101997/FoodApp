import React from "react";
import {View, TextInput, Text } from "react-native";
import style from "./styles";

const CustomInput =({
    placeholder,
    onChangeText,
    inputStyle,
    Name,
    textStyle,
    viewStyle
})=>{
    return(
        <View style={[viewStyle]}>
            <Text style={[textStyle]}>{Name}</Text>
            <TextInput
              placeholder={placeholder}
              onChangeText={onChangeText}
              style={[style.inputView,inputStyle]}
            />
        </View>
    )
}

export default CustomInput