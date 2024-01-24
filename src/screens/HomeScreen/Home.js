import React from "react";
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import CustomButton from "../../../components/CustombButton/CustomButton";
import CustomInput from "../../../components/CustomInput/CustomInput";

const { height, width } = Dimensions.get('screen')

const Home = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={{ width: '100%', height: height * 0.09, backgroundColor: 'pink', }}>
                    <View style={{ width: '100%', height: '100%', flexDirection: 'row', justifyContent: 'space-around', marginTop: 15 }}>
                        <CustomButton
                            src={require('../../../Assets/Images/Menu.png')}
                            buttonView={style.menuButton}
                            imageStyle={style.menuImg}
                        />
                        <View style={{ width: '60%', alignItems: 'center' }}>
                            <Text>Deliver to </Text>
                            <Text>Address</Text>
                        </View>
                        <View style={{
                            width: '13%',
                            height: '55%',
                            borderRadius: 30,
                            backgroundColor: 'white',
                            marginRight: 10
                        }}>

                        </View>
                    </View>
                </View>
                <View style={style.searchView}>
                  <CustomInput
                    viewStyle={style.search}
                  />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    menuButton: {
        width: '13%',
        height: '55%',
        borderRadius: 10,
        // marginTop: 30,
        marginLeft: 19,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    },
    menuImg: {
        width: 20,
        height: 25
    },
    searchView: {
        width: '100%',
        height: height*0.1,
        backgroundColor: 'red'
    },
    search:{
        
    }
})
export default Home