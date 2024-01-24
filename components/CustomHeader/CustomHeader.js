import React from "react";
import { View,Text } from "react-native";
import style from "./styles";
import CustomButton from "../CustombButton/CustomButton";
import CustomImage from "../CustomImage/CustomImage";

const CustomHeader =({
src,
text1,
text2,
BackImage,
imageStyle,
onPress
})=>{
    return(
        <View style={style.headerSection}>
        <CustomImage
            ImageView={style.image}
            src={src}
        />
        <View style={style.insideHeaderView}>
            <CustomButton
                buttonView={style.backButton}
                src={BackImage}
                imageStyle={imageStyle}
                onPress={onPress}
            />
            <View style={{
                marginTop: 20,
                marginLeft: 19
            }}>
                <Text style={{fontSize:25,fontWeight:'900',color:'white'}}>{text1}</Text>
                <Text style={{fontSize:12,color:'white',letterSpacing:1}}>{text2}</Text>
            </View>
        </View>
    </View>
    )
}

export default CustomHeader